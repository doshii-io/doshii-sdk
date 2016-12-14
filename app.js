'use strict'

require('./.config/.env')

const Doshii = require('./lib/doshii.js')()
const DoshiiSocket = Doshii.WebSocket()

DoshiiSocket.on('message', (event) => {
  console.log('message', event)
})
