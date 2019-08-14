'use strict'

const omit = require('lodash/omit')
const Promise = require('bluebird')
const DoshiiResource = require('../DoshiiResource')

module.exports = DoshiiResource.extend({
  retrieveOne: function (data) {
    if (!data.checkinId) throw new Error('Parameter \'checkinId\' is required for the function \'Checkins.retrieve\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Checkins.retrieveOne\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/checkins/${data.checkinId}`,
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
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Checkins.create\'');
    let doshiiLocationId = data.doshiiLocationId;
    let checkTables = data.checkTables || false;
    data = omit(data, ['checkTables', 'doshiiLocationId']);

    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'POST',
        path: `/checkins`,
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
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Checkins.create\'');
    let doshiiLocationId = data.doshiiLocationId;
    let checkTables = data.checkTables || false;
    let checkinId = data.checkinId;
    data = omit(data, ['checkTables', 'doshiiLocationId', 'checkinId']);

    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'PUT',
        path: `/checkins/${checkinId}`,
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
