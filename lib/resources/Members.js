'use strict'

const omit = require('lodash/omit')
const Promise = require('bluebird')
const DoshiiResource = require('../DoshiiResource')

module.exports = DoshiiResource.extend({
  retrieveAll: function (data) {
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Members.retrieveAll\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/members`,
        urlParams: [],
        supplimentHeaders: [{
          'doshii-organisation-id': data.doshiiOrganisationId
        }]
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  retrieveOne: function (data) {
    if (!data.id) throw new Error('Parameter \'id\' is required for the function \'Members.retrieveOne\'')
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Members.retrieveOne\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/members/${data.id}`,
        urlParams: ['id'],
        supplimentHeaders: [{
          'doshii-organisation-id': data.doshiiOrganisationId
        }]
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  create: function (data) {
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Members.create\'')
    let doshiiOrganisationId = data.doshiiOrganisationId
    data = omit(data, 'doshiiOrganisationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'POST',
        path: `/members`,
        urlParams: [],
        supplimentHeaders: [{
          'doshii-organisation-id': doshiiOrganisationId
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
    if (!data.id) throw new Error('Parameter \'id\' is required for the function \'Members.update\'')
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Members.update\'')
    let doshiiOrganisationId = data.doshiiOrganisationId
    data = omit(data, 'doshiiOrganisationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'PUT',
        path: `/members/${data.id}`,
        urlParams: [],
        supplimentHeaders: [{
          'doshii-organisation-id': doshiiOrganisationId
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
    if (!data.id) throw new Error('Parameter \'id\' is required for the function \'Members.remove\'')
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Members.remove\'')
    let doshiiOrganisationId = data.doshiiOrganisationId
    data = omit(data, 'doshiiOrganisationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'DELETE',
        path: `/members/${data.id}`,
        urlParams: [],
        supplimentHeaders: [{
          'doshii-organisation-id': doshiiOrganisationId
        }]
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  }
})
