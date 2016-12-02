'use strict'

const omit = require('lodash/omit')
const Promise = require('bluebird')
const DoshiiResource = require('../DoshiiResource')

module.exports = DoshiiResource.extend({
  retrieveAll: function (data) {
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Orders.retrieveAll\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/orders`,
        urlParams: [],
        supplimentHeaders: [{
          'doshii-location-id': data.doshiiLocationId
        }]
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  retrieveOne: function (data) {
    if (!data.orderId) throw new Error('Parameter \'orderId\' is required for the function \'Orders.retrieveOne\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Orders.retrieveOne\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/orders/${data.orderId}`,
        urlParams: ['id'],
        supplimentHeaders: [{
          'doshii-location-id': data.doshiiLocationId
        }]
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  create: function (data) {
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Orders.create\'')
    if (!data.order) throw new Error('Parameter \'order\' is required in the body for the function \'Orders.create\'')
    let doshiiLocationId = data.doshiiLocationId
    data = omit(data, 'doshiiLocationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'POST',
        path: `/orders`,
        urlParams: [],
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
    if (!data.orderId) throw new Error('Parameter \'orderId\' is required for the function \'Orders.update\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Orders.update\'')
    let doshiiLocationId = data.doshiiLocationId
    data = omit(data, 'doshiiLocationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'PUT',
        path: `/orders/${data.orderId}`,
        urlParams: [],
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

  retrieveTransactions: function (data) {
    if (!data.orderId) throw new Error('Parameter \'orderId\' is required for the function \'Orders.update\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Orders.update\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/orders/${data.orderId}/transactions`,
        urlParams: [],
        supplimentHeaders: [{
          'doshii-location-id': data.doshiiLocationId
        }]
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  createTransaction: function (data) {
    if (!data.orderId) throw new Error('Parameter \'orderId\' is required for the function \'Orders.createTransaction\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Orders.createTransaction\'')
    let doshiiLocationId = data.doshiiLocationId
    data = omit(data, 'doshiiLocationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'POST',
        path: `/orders/${data.orderId}/transactions`,
        urlParams: [],
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
