'use strict'

require('./.config/.env')

const Doshii = require('./lib/doshii.js')()

Doshii.getApiField('auth')
Doshii.Locations.retrieveAll().then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
})

Doshii.Locations.findMenu({
  id: 'p7PEkVxe'
}, (err, result) => {
  if (err) console.log(err)
  console.log(result)
})
