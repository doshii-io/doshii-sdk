'use strict'

const Promise = require('bluebird')
const DoshiiResource = require('../DoshiiResource')

module.exports = DoshiiResource.extend({
  retrieveOne: function (data) {
    if (!data.id) throw new Error('Parameter \'id\' is required for the function \'Checkins.retrieve\'')
    if (!data.doshiiLocationId) throw new Error('Parameter \'doshiiLocationId\' is required for the function \'Checkins.retrieveOne\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/checkins/${data.id}`,
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
  }
})
