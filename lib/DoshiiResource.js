'use strict'

const request = require('request')
const path = require('path')
const utils = require('./utils')
const Error = require('./Error')
const Promise = require('bluebird')
const objectAssign = require('lodash/assign')
const forEach = require('lodash/forEach')

// Provide extension mechanism for Doshii Resource Sub-Classes
DoshiiResource.extend = utils.protoExtend

/**
 * Encapsulates request logic for a Doshii Resource
 */
function DoshiiResource (doshii, urlData) {
  this._doshii = doshii
  this._urlData = urlData || {}

  this.initialize.apply(this, arguments)
}

DoshiiResource.prototype = {

  initialize: function () {},

  constructRequest: function (requestData, callback) {
    return this.wrapTimeout(new Promise(((resolve, reject) => {
      function requestCallback (err, response) {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      }
      this._request(requestData.method, requestData.supplimentHeaders, path.join(this._doshii.getApiField('version'), requestData.path), requestData.body, requestCallback)
    }).bind(this)), callback)
  },

  wrapTimeout: function (promise, callback) {
    if (callback) {
      // Ensure callback is called outside of promise stack.
      return promise.then((res) => {
        setTimeout(() => { callback(null, res) }, 0)
      }, (err) => {
        setTimeout(() => { callback(err, null) }, 0)
      })
    }
    return promise
  },

  _returnCallback: function (args) {
    return typeof args[args.length - 1] === 'function' && args.pop()
  },

  _responseHandler: function (response, callback) {
    let err
    if (response.statusCode === 401) {
      err = new Error.DoshiiAuthenticationError(response.statusMessage)
    } else if (response.statusCode === 403) {
      err = new Error.DoshiiPermissionError(response.statusMessage)
    } else if (response.statusCode === 429) {
      err = new Error.DoshiiRateLimitError(response.statusMessage)
    }
    if (err) return callback.call(this, err, null)
    callback.call(this, null, response.body)
  },

  _errorHandler: function (error, callback) {
    callback.call(
      this,
      new Error.DoshiiConnectionError({
        message: 'An error occurred with your connection to Doshii',
        detail: error
      }),
      null
    )
  },

  _request: function (method, supplimentHeaders, path, body, callback) {
    const baseUrl = this._doshii.constructBaseUrl()
    let headers = {
      'Authorization': this._doshii.getApiField('auth'),
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': `DoshiiSDK/v1 NodeJS/ ${this._doshii.getConstant('PACKAGE_VERSION')}`
    }
    if (supplimentHeaders && supplimentHeaders.length > 0) {
      forEach(supplimentHeaders, (header) => {
        objectAssign(headers, header)
      })
    }
    request({
      url: `${baseUrl}${path}`,
      method: method,
      gzip: true,
      json: true,
      timeout: this._doshii.getApiField('timeout'),
      headers: headers,
      body: body
    }, (err, headers, body) => {
      if (err) return this._errorHandler(err, callback)
      this._responseHandler({
        statusCode: headers.statusCode,
        statusMessage: headers.statusMessage,
        body: body
      }, callback)
    })
  }
}

module.exports = DoshiiResource
