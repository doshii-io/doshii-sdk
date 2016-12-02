'use strict'

const omit = require('lodash/omit')
const Promise = require('bluebird')
const DoshiiResource = require('../DoshiiResource')

module.exports = DoshiiResource.extend({
  retrieveAll: function (data) {
    if (!data.memberId) throw new Error('Parameter \'memberId\' is required for the function \'Rewards.retrieveAll\'')
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Rewards.retrieveAll\'')
    let doshiiOrganisationId = data.doshiiOrganisationId
    data = omit(data, 'doshiiOrganisationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/members/${data.memberId}/rewards`,
        supplimentHeaders: [{
          'doshii-organisation-id': doshiiOrganisationId
        }]
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  retrieveOne: function (data) {
    if (!data.memberId) throw new Error('Parameter \'memberId\' is required for the function \'Rewards.retrieveOne\'')
    if (!data.rewardId) throw new Error('Parameter \'rewardId\' is required for the function \'Rewards.retrieveOne\'')
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Rewards.retrieveOne\'')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'GET',
        path: `/members/${data.memberId}/rewards/${data.rewardId}`,
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
    if (!data.memberId) throw new Error('Parameter \'memberId\' is required for the function \'Rewards.create\'')
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Rewards.create\'')
    let doshiiOrganisationId = data.doshiiOrganisationId
    data = omit(data, 'doshiiOrganisationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'POST',
        path: `/members/${data.memberId}/rewards`,
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
    if (!data.memberId) throw new Error('Parameter \'memberId\' is required for the function \'Rewards.update\'')
    if (!data.rewardId) throw new Error('Parameter \'rewardId\' is required for the function \'Rewards.update\'')
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Rewards.update\'')
    let doshiiOrganisationId = data.doshiiOrganisationId
    data = omit(data, 'doshiiOrganisationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'PUT',
        path: `/members/${data.memberId}/rewards/${data.rewardId}`,
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

  updateAll: function (data) {
    if (!data.memberId) throw new Error('Parameter \'memberId\' is required for the function \'Rewards.update\'')
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Rewards.update\'')
    let doshiiOrganisationId = data.doshiiOrganisationId
    data = omit(data, 'doshiiOrganisationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'PUT',
        path: `/members/${data.memberId}/rewards`,
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
    if (!data.memberId) throw new Error('Parameter \'memberId\' is required for the function \'Rewards.remove\'')
    if (!data.rewardId) throw new Error('Parameter \'id\' is required for the function \'Rewards.remove\'')
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Rewards.remove\'')
    let doshiiOrganisationId = data.doshiiOrganisationId
    data = omit(data, 'doshiiOrganisationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'DELETE',
        path: `/members/${data.memberId}/rewards/${data.rewardId}`,
        supplimentHeaders: [{
          'doshii-organisation-id': doshiiOrganisationId
        }]
      }, callback).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  accept: function (data) {
    if (!data.memberId) throw new Error('Parameter \'memberId\' is required for the function \'Rewards.accept\'')
    if (!data.rewardId) throw new Error('Parameter \'rewardId\' is required for the function \'Rewards.accept\'')
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Rewards.accept\'')
    let doshiiOrganisationId = data.doshiiOrganisationId
    data = omit(data, 'doshiiOrganisationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'PUT',
        path: `/members/${data.memberId}/rewards/${data.rewardId}/accept`,
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

  reject: function (data) {
    if (!data.memberId) throw new Error('Parameter \'memberId\' is required for the function \'Rewards.reject\'')
    if (!data.rewardId) throw new Error('Parameter \'rewardId\' is required for the function \'Rewards.reject\'')
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Rewards.reject\'')
    let doshiiOrganisationId = data.doshiiOrganisationId
    data = omit(data, 'doshiiOrganisationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'PUT',
        path: `/members/${data.memberId}/rewards/${data.rewardId}/reject`,
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

  acceptPoints: function (data) {
    if (!data.memberId) throw new Error('Parameter \'memberId\' is required for the function \'Rewards.acceptPoints\'')
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Rewards.acceptPoints\'')
    let doshiiOrganisationId = data.doshiiOrganisationId
    data = omit(data, 'doshiiOrganisationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'PUT',
        path: `/members/${data.memberId}/points/accept`,
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

  rejectPoints: function (data) {
    if (!data.memberId) throw new Error('Parameter \'memberId\' is required for the function \'Rewards.rejectPoints\'')
    if (!data.doshiiOrganisationId) throw new Error('Parameter \'doshiiOrganisationId\' is required for the function \'Rewards.rejectPoints\'')
    let doshiiOrganisationId = data.doshiiOrganisationId
    data = omit(data, 'doshiiOrganisationId')
    return new Promise((resolve, reject) => {
      const callback = this._returnCallback([].slice.call(arguments))
      this.constructRequest({
        method: 'PUT',
        path: `/members/${data.memberId}/points/reject`,
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
  }
})
