'use strict'

const WebSocket = require('ws')
const btoa = require('btoa')
const EventEmitter = require('events')

Doshii.DEFAULT_PROTOCOL = 'https://'
Doshii.DEFAULT_ENV = 'sandbox'
Doshii.DEFAULT_HOST = '.doshii.co/'
Doshii.DEFAULT_CLIENT = 'partner'
Doshii.DEFAULT_API_VERSION = '/v3'

// Use node's default timeout:
Doshii.DEFAULT_TIMEOUT = require('http').createServer().timeout
Doshii.PACKAGE_VERSION = require('../package.json').version

Doshii.DEFAULT_SILENT = false

const resources = {
  Locations: require('./resources/Locations'),
  Checkins: require('./resources/Checkins'),
  Members: require('./resources/Members'),
  Orders: require('./resources/Orders'),
  Reservations: require('./resources/Reservations'),
  Rewards: require('./resources/Rewards'),
  Tables: require('./resources/Tables'),
  Transactions: require('./resources/Transactions'),
  Webhooks: require('./resources/Webhooks')
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
    timeout: Doshii.DEFAULT_TIMEOUT,
    silent: Doshii.DEFAULT_SILENT,
  }
  this.setApiKey(opts.clientId, opts.clientSecret)
  this.setApiVersion(opts.version)
  this.setServerTimeout(opts.timeout)
  this.setEnv(opts.env)
  this.setSilentMode(opts.silent)
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

  setSilentMode: function (mode) {
    this._setApiField('silent', !mode ? Doshii.DEFAULT_SILENT : mode)
  },

  _setApiField: function (key, value) {
    this._api[key] = value
  },

  getApiField: function (key) {
    return this._api[key]
  },

  getConstant: function (c) {
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
    const Emitter = new EventEmitter()
    const ws = new WebSocket(`wss://${this.getApiField('env')}.doshii.co/app/socket?auth=${this.getApiField('key')}`)
    const silentModeEnabled = this.getApiField('silent')

    ws.on('open', () => {
      console.log('Connection to the Doshii WebSocket established')
      function heartbeat () {
        let timestamp = Date.now()

        if (!silentModeEnabled) {
          console.log(`primus::ping::${timestamp}`)
        }

        ws.send(`"primus::ping::${timestamp}"`)
      }
      heartbeat()
      setInterval(heartbeat, 15000)
    })
    ws.on('error', (err) => {
      Emitter.emit('error', err)
      throw new Error('Doshii socket error: '+ err)
    })
    ws.on('message', (event) => {
      const ev = JSON.parse(event)
      if (!ev) return
      if (!ev.emit) return silentModeEnabled ? null : console.log(ev)
      Emitter.emit(ev.emit[0], ev.emit[1])
    })
    return Emitter
  }
}

module.exports = Doshii
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Doshii = Doshii
