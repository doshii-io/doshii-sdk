'use strict'

const omit = require('lodash/omit')
const isEmpty = require('lodash/isEmpty')
const qs = require('qs')
const Promise = require('bluebird')
const DoshiiResource = require('../DoshiiResource')

module.exports = DoshiiResource.extend({
  retrieveAll: function (data) {
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Reservations.retrieveAll\'')
    let doshiiLocationId = data.doshiiLocationId
    data = omit(data, 'doshiiLocationId')
    let queryString = ''
    if (!isEmpty(data)) queryString = `?${qs.stringify(data)}`
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/bookings${queryString}`,
        urlParams: [],
        supplimentHeaders: [{
          'doshii-location-id': doshiiLocationId
        }]
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  retrieveOne: function (data) {
    if (!data.reservationId) throw new Error('Parameter \'rewardId\' is required for the function \'Reservations.retrieveOne\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Reservations.retrieveOne\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/bookings/${data.reservationId}`,
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
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Reservations.create\'')
    let doshiiLocationId = data.doshiiLocationId
    data = omit(data, 'doshiiLocationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'POST',
        path: `/bookings`,
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
    if (!data.reservationId) throw new Error('Parameter \'rewardId\' is required for the function \'Reservations.update\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Reservations.update\'')
    let doshiiLocationId = data.doshiiLocationId
    data = omit(data, 'doshiiLocationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'PUT',
        path: `/bookings/${data.reservationId}`,
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

  remove: function (data) {
    if (!data.reservationId) throw new Error('Parameter \'rewardId\' is required for the function \'Reservations.remove\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Reservations.remove\'')
    let doshiiLocationId = data.doshiiLocationId
    data = omit(data, 'doshiiLocationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'DELETE',
        path: `/bookings/${data.reservationId}`,
        urlParams: [],
        supplimentHeaders: [{
          'doshii-location-id': doshiiLocationId
        }]
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  createCheckin: function (data) {
    if (!data.reservationId) throw new Error('Parameter \'rewardId\' is required for the function \'Reservations.createCheckin\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Reservations.createCheckin\'')
    let doshiiLocationId = data.doshiiLocationId
    data = omit(data, 'doshiiLocationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'POST',
        path: `/bookings/${data.reservationId}/checkin`,
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
