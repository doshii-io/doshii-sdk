const fs = require('fs')
const Bluebird = require('bluebird')
const path = require('path')
Bluebird.promisifyAll(fs)

module.exports = () => {
  return new Bluebird((resolve, reject) => {
    return fs.readFileAsync(path.join(__dirname, '../../.optx/config.json'), 'utf-8')
      .then(config => resolve(JSON.parse(config)))
      .catch(err => reject(new Error(err, 'Configuration file is not correctly set.')))
  })
}
