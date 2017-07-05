const Bluebird = require('bluebird')
const promptly = require('promptly')
const writeConfig = require('./utils/write-config')

module.exports = (name, type, token) => {
  return new Bluebird((resolve, reject) => {
    if (token) return resolve(writeConfig(type, token))
    return promptly.prompt(`Enter Your Doshii ${name} (hidden): `, {
      'trim': true,
      'silent': true
    })
      .catch(err => reject(err))
  })
}
