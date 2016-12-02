'use strict'

const Promise = require('bluebird')
const DoshiiResource = require('../DoshiiResource')

module.exports = DoshiiResource.extend({
  retrieveAll: function (data) {
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Tables.retrieveAll\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/tables`,
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
    if (!data.name) throw new Error('Parameter \'name\' is required for the function \'Tables.retrieveOne\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Tables.retrieveOne\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/tables/${data.name}`,
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

  retrieveBookings: function (data) {
    if (!data.name) throw new Error('Parameter \'name\' is required for the function \'Tables.retrieveBookings\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Tables.retrieveBookings\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/tables/${data.name}/bookings`,
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

  retrieveCheckins: function (data) {
    if (!data.name) throw new Error('Parameter \'name\' is required for the function \'Tables.retrieveBookings\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Tables.retrieveBookings\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/tables/${data.name}/checkins`,
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

  retrieveOrders: function (data) {
    if (!data.name) throw new Error('Parameter \'name\' is required for the function \'Tables.retrieveBookings\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Tables.retrieveBookings\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/tables/${data.name}/orders`,
        supplimentHeaders: [{
          'doshii-location-id': data.doshiiLocationId
        }]
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  }
})
