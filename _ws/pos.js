'use strict'

const WebSocket = require('ws')
const ws = new WebSocket(`http://localhost:2101/pos/socket?token=token`)

ws.on('open', () => {
  console.log('Connection to the Doshii WebSocket established')
  function heartbeat () {
    let timestamp = Date.now()
    console.log(`primus::ping::${timestamp}`)
    ws.send(`"primus::ping::${timestamp}"`)
  }
  heartbeat()
  setInterval(heartbeat, 15000)
})
ws.on('error', (err) => {
  throw new Error('Doshii socket error: ', err)
})
ws.addEventListener('message', (event) => {
  if (!event) return
  console.log({
    type: event.type,
    data: event.data
  })
})
