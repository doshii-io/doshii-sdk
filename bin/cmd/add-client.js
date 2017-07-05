const winston = require('winston')
const reqCredentials = require('../utils/req-credentials.js')

/**
 * Sets the optimizely API token in the current project folder.
 * @param  {String}   token     Optimizely API token
 */
module.exports = function (clientId, clientSecret) {
  return reqCredentials('Client ID', 'clientId', clientId)
    .then(() => reqCredentials('Client Secret', 'clientSecret', clientSecret))
    .then(() => winston.log('info', 'Doshii client successfully set'))
    .catch(err => winston.log('error', err.message))
}
