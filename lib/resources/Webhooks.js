'use strict'

const Promise = require('bluebird');
const DoshiiResource = require('../DoshiiResource');

module.exports = DoshiiResource.extend({
    create: function (data) {
        return new Promise((resolve, reject) => {
            if (!data.event) throw new Error('Parameter \'event\' is required for the function \'Webhooks.create\'')
            if (!data.webhookUrl) throw new Error('Parameter \'webhookUrl\' is required in the body for the function \'Webhooks.create\'')
            const callback = this._returnCallback([].slice.call(arguments))
            this.constructRequest({
                method: 'POST',
                path: `/webhooks`,
                urlParams: [],
                body: data
            }, callback).then((response) => {
                resolve(response)
            }).catch((err) => {
                reject(err)
            })
        })
    },

    update: function (data) {
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
    },

    delete: function (data) {
        if (!data.event) throw new Error('Parameter \'event\' is required for the function \'Webhooks.create\'')
        const callback = this._returnCallback([].slice.call(arguments))
        this.constructRequest({
            method: 'DELETE',
            path: `/webhooks/${data.event}`,
            urlParams: [],
        }, callback).then((response) => {
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    },

    get: function () {
        const callback = this._returnCallback([].slice.call(arguments))
        this.constructRequest({
            method: 'GET',
            path: `/webhooks`,
            urlParams: [],
        }, callback).then((response) => {
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    }
})