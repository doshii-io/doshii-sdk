'use strict'

const omit = require('lodash/omit')
const Promise = require('bluebird');
const DoshiiResource = require('../DoshiiResource');

module.exports = DoshiiResource.extend({
    create: function (data) {
        return new Promise((resolve, reject) => {
            if (!data.event) throw new Error('Parameter \'event\' is required for the function \'Webhooks.create\'')
            if (!data.webhookUrl) throw new Error('Parameter \'webhookUrl\' is required in the body for the function \'Webhooks.create\'')

            const { locationId, ...payload } = data
            const callback = this._returnCallback([].slice.call(arguments))
            this.constructRequest({
                method: 'POST',
                path: `/webhooks`,
                urlParams: [],
                body: payload,

                // Subscribe to single or all locations - location is passed as the header
                // If locationId is passed in, then we will add to the supplement headers property
                ...(locationId && { supplimentHeaders: [{ 'doshii-location-id': locationId }] })
            }, callback).then((response) => {
                resolve(response)
            }).catch((err) => {
                reject(err)
            })
        })
    },

    update: function (data) {
        return new Promise((resolve, reject) => {
            if (!data.event) throw new Error('Parameter \'event\' is required for the function \'Webhooks.create\'')
            const callback = this._returnCallback([].slice.call(arguments))
            let event = data.event;
            data = omit(data, 'event')
            this.constructRequest({
                method: 'PUT',
                path: `/webhooks/${event}`,
                urlParams: [],
                body: data
            }, callback).then((response) => {
                resolve(response)
            }).catch((err) => {
                reject(err)
            })
        })
    },

    delete: function (data) {
        return new Promise((resolve, reject) => {
            if (!data.event) throw new Error('Parameter \'event\' is required for the function \'Webhooks.create\'')
            const { locationId, ...payload } = data
            const callback = this._returnCallback([].slice.call(arguments))
            this.constructRequest({
                method: 'DELETE',
                path: `/webhooks/${data.event}`,
                urlParams: [],

                // Subscribe to single or all locations - location is passed as the header
                // If locationId is passed in, then we will add to the supplement headers property
                ...(locationId && { supplimentHeaders: [{ 'doshii-location-id': locationId }] })
            }, callback).then((response) => {
                resolve(response)
            }).catch((err) => {
                reject(err)
            })
        });
    },

    get: function (data) {
        return new Promise((resolve, reject) => {
            if (!data.locationId) throw new Error('Parameter \'locationId\' is required for the function \'Webhooks.get\'')
            const callback = this._returnCallback([].slice.call(arguments))
            this.constructRequest({
                method: 'GET',
                path: `/webhooks`,
                urlParams: ['locationId'],
            }, callback).then((response) => {
                resolve(response)
            }).catch((err) => {
                reject(err)
            })
        })
    }
})
