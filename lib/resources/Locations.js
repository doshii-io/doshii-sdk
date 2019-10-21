'use strict'

const Promise = require('bluebird')
const DoshiiResource = require('../DoshiiResource')

module.exports = DoshiiResource.extend({
  retrieveAll: function () {
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/locations`,
        urlParams: []
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  retrieve: function (data) {
    if (!data.locationId) throw new Error('Parameter \'locationId\' is required for the function \'Locations.retrieve\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/locations/${data.locationId}`,
        supplimentHeaders: [{
          'doshii-location-id': data.locationId
        }]
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  retrieveMenu: function (data) {
    if (!data.locationId) throw new Error('Parameter \'locationId\' is required for the function \'Locations.findMenu\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/locations/${data.locationId}/menu`,
        urlParams: ['locationId']
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  retrieveMenuProduct: function (data) {
    if (!data.locationId) throw new Error('Parameter \'locationId\' is required for the function \'Locations.retrieveMenuProduct\'')
    if (!data.itemPosId) throw new Error('Parameter \'itemPosId\' is required for the function \'Locations.retrieveMenuProduct\'')

    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/locations/${data.locationId}/menu/products/${data.itemPosId}`,
        supplimentHeaders: [{
          'doshii-location-id': data.locationId
        }]
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  subscribe: function (data) {
    if (!data.locationId) throw new Error('Parameter \'locationId\' is required for the function \'Locations.subscribe\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'POST',
        path: `/locations/${data.locationId}/subscription`,
        urlParams: ['locationId']
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  unsubscribe: function (data) {
    if (!data.locationId) throw new Error('Parameter \'locationId\' is required for the function \'Locations.unsubscribe\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'DELETE',
        path: `/locations/${data.locationId}/subscription`,
        urlParams: ['locationId']
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

    retrieveAllHealth: function() {
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments));
      this.constructRequest(
        {
          method: "GET",
          path: `/health/locations`,
          urlParams: []
        },
        callback
      )
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  retrieveHealth: function(data) {
    if (!data.locationId)
      throw new Error(
        "Parameter 'locationId' is required for the function 'Locations.retrieveHealth'"
      );
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments));
      this.constructRequest(
        {
          method: "GET",
          path: `/health/locations/${data.locationId}`,
          urlParams: ["locationId"]
        },
        callback
      )
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

})
