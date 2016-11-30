'use strict'

const utils = require('./utils')

module.exports = _Error

/**
 * Generic Error klass to wrap any errors returned by doshii-node
 */
function _Error (raw) {
  this.populate.apply(this, arguments)
  this.stack = (new Error(this.message)).stack
}

// Extend Native Error
_Error.prototype = Object.create(Error.prototype)

_Error.prototype.type = 'GenericError'
_Error.prototype.populate = function (type, message) {
  this.type = type
  this.message = message
}

_Error.extend = utils.protoExtend

/**
 * Create subclass of internal Error klass
 * (Specifically for errors returned from Doshii's REST API)
 */
const DoshiiError = _Error.DoshiiError = _Error.extend({
  type: 'DoshiiError',
  populate: function (raw) {
    // Move from prototype def (so it appears in stringified obj)
    this.type = this.type

    this.stack = (new Error(raw.message)).stack
    this.rawType = raw.type
    this.code = raw.code
    this.param = raw.param
    this.message = raw.message
    this.detail = raw.detail
    this.raw = raw
    this.requestId = raw.requestId
    this.statusCode = raw.statusCode
  }
})

/**
 * Helper factory which takes raw doshii errors and outputs wrapping instances
 */
DoshiiError.generate = function (rawDoshiiError) {
  switch (rawDoshiiError.type) {
    case 'card_error':
      return new _Error.DoshiiCardError(rawDoshiiError)
    case 'invalid_request_error':
      return new _Error.DoshiiInvalidRequestError(rawDoshiiError)
    case 'api_error':
      return new _Error.DoshiiAPIError(rawDoshiiError)
  }
  return new _Error('Generic', 'Unknown Error')
}

// Specific Doshii Error types:
_Error.DoshiiInvalidRequestError = DoshiiError.extend({type: 'DoshiiInvalidRequestError'})
_Error.DoshiiAPIError = DoshiiError.extend({type: 'DoshiiAPIError'})
_Error.DoshiiAuthenticationError = DoshiiError.extend({type: 'DoshiiAuthenticationError'})
_Error.DoshiiPermissionError = DoshiiError.extend({type: 'DoshiiPermissionError'})
_Error.DoshiiRateLimitError = DoshiiError.extend({type: 'DoshiiRateLimitError'})
_Error.DoshiiConnectionError = DoshiiError.extend({type: 'DoshiiConnectionError'})
