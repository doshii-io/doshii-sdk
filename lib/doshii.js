'use strict'

const WebSocket = require('ws')
const btoa = require('btoa')

Doshii.DEFAULT_PROTOCOL = 'https://'
Doshii.DEFAULT_ENV = 'sandbox'
Doshii.DEFAULT_HOST = '.doshii.co/'
Doshii.DEFAULT_CLIENT = 'partner'
Doshii.DEFAULT_API_VERSION = '/v3'

// Use node's default timeout:
Doshii.DEFAULT_TIMEOUT = require('http').createServer().timeout
Doshii.PACKAGE_VERSION = require('../package.json').version

const resources = {
  Locations: require('./resources/Locations'),
  Checkins: require('./resources/Checkins'),
  Members: require('./resources/Members'),
  Orders: require('./resources/Orders'),
  Reservations: require('./resources/Reservations'),
  Rewards: require('./resources/Rewards'),
  Tables: require('./resources/Tables'),
  Transactions: require('./resources/Transactions')
}

Doshii.DoshiiResource = require('./DoshiiResource')

function Doshii (opts) {
  if (!opts) opts = {}
  if (!(this instanceof Doshii)) return new Doshii(opts)

  this._api = {
    auth: null,
    protocol: Doshii.DEFAULT_PROTOCOL,
    env: Doshii.DEFAULT_ENV,
    host: Doshii.DEFAULT_HOST,
    client: Doshii.DEFAULT_CLIENT,
    version: Doshii.DEFAULT_API_VERSION,
    timeout: Doshii.DEFAULT_TIMEOUT
  }
  this.setApiKey(opts.clientId, opts.clientSecret)
  this.setApiVersion(opts.version)
  this.setServerTimeout(opts.timeout)
  this.setEnv(opts.env)
  this._prepResources()
}

Doshii.prototype = {
  setApiKey: function (cid, secret) {
    let key
    if (!cid || !secret) {
      if (process.env.DOSHII_CLIENT_ID && process.env.DOSHII_CLIENT_SECRET) {
        key = btoa(`${process.env.DOSHII_CLIENT_ID}:${process.env.DOSHII_CLIENT_SECRET}`)
      } else throw new Error('DOSHII_CLIENT_ID or DOSHII_CLIENT_SECRET were not supplied as environment variables or explicitly passed in manually')
    } else key = btoa(`${cid}:${secret}`)
    this._setApiField('auth', `Basic ${key}`)
    this._setApiField('key', key)
  },

  setApiVersion: function (version) {
    if (version) this._setApiField('version', version)
  },

  setServerTimeout: function (timeout) {
    this._setApiField('timeout', !timeout ? Doshii.DEFAULT_TIMEOUT : timeout)
  },

  setEnv: function (env) {
    this._setApiField('env', !env ? Doshii.DEFAULT_ENV : env)
  },

  _setApiField: function (key, value) {
    this._api[key] = value
  },

  getApiField: function (key) {
    return this._api[key]
  },

  getConstant: function (c) {
    console.log(c)
    return Doshii[c]
  },

  constructBaseUrl: function () {
    return `${this._api.protocol}${this._api.env}${this._api.host}${this._api.client}`
  },

  _prepResources: function () {
    for (var name in resources) {
      this[name] = new resources[name](this)
    }
  },

  WebSocket: function () {
    return new WebSocket(`wss://${this.getApiField('env')}.doshii.co/partner/socket/v3?auth=${this.getApiField('key')}`)
  }
}

module.exports = Doshii
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Doshii = Doshii
