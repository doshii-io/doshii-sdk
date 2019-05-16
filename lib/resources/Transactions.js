'use strict'

const omit = require('lodash/omit')
const Promise = require('bluebird')
const DoshiiResource = require('../DoshiiResource')

module.exports = DoshiiResource.extend({
  retrieveOne: function (data) {
    if (!data.transactionId) throw new Error('Parameter \'transactionId\' is required for the function \'Transactions.retrieveOne\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/transactions/${data.transactionId}`
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  create: function (data) {
    if (!data.orderId) throw new Error('Parameter \'orderId\' is required in the body for the function \'Transactions.create\'')
    if (!data.amount) throw new Error('Parameter \'amount\' is required in the body for the function \'Transactions.create\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required in the body for the function \'Transactions.create\'')
    let doshiiLocationId = data.doshiiLocationId;
    data = omit(data, ['doshiiLocationId']);
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'POST',
        path: `/transactions`,
        supplimentHeaders: [{
          'doshii-location-id': doshiiLocationId
        }],
        body: data
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  update: function (data) {
    if (!data.transactionId) throw new Error('Parameter \'transactionId\' is required for the function \'Transactions.update\'')
    if (!data.version) throw new Error('Parameter \'amount\' is required in the body for the function \'Transactions.version\'')

    let doshiiLocationId = data.doshiiLocationId;
    let transactionId = data.transactionId;
    
    data = omit(data, ['transactionId', 'doshiiLocationId']);
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'PUT',
        path: `/transactions/${transactionId}`,
        supplimentHeaders: [{
          'doshii-location-id': doshiiLocationId
        }],
        body: data
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  }
})
