const fs = require('fs')
const Bluebird = require('bluebird')
const path = require('path')
Bluebird.promisifyAll(fs)

module.exports = (key, value) => {
  return new Bluebird((resolve, reject) => {
    try {
      if (!fs.existsSync(path.join(__dirname, '../../.config'))) {
        fs.mkdir(path.join(__dirname, '../../.config'))
      }
      if (!fs.existsSync(path.join(__dirname, '../../.config/credentialsjson'))) {
        fs.writeFile(path.join(__dirname, '../../.config/credentialsjson'), JSON.stringify({}))
      }
      return fs.readFileAsync(path.join(__dirname, '../../.config/credentials.json'), 'utf-8')
        .then(json => {
          const newConfig = Object.assign({}, JSON.parse(json), { [key]: value })
          return resolve(fs.writeFileAsync(path.join(__dirname, '../../.config/credentials.json'), JSON.stringify(newConfig, null, 2)))
        })
    } catch (e) {
      return reject(e)
    }
  })
}
