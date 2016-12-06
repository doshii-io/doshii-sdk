'use strict'

require('./.config/.env')

const Doshii = require('./lib/doshii.js')()
const DoshiiSocket = Doshii.WebSocket()

// After connecting we need to send heartbeats
DoshiiSocket.on('open', () => {
  console.log('Connection to the Doshii WebSocket established')
  function heartbeat () {
    let timestamp = Date.now()
    console.log(`primus::ping::${timestamp}`)
    DoshiiSocket.send(`"primus::ping::${timestamp}"`)
  }
  heartbeat()
  setInterval(heartbeat, 15000)
})

DoshiiSocket.addEventListener('order_updated', (event) => {
  console.log('order_updated')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('transaction_created', (event) => {
  console.log('transaction_created')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('transaction_updated', (event) => {
  console.log('transaction_updated')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('menu_updated', (event) => {
  console.log('menu_updated')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('member_created', (event) => {
  console.log('member_created')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('member_updated', (event) => {
  console.log('member_created')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('checkin_created', (event) => {
  console.log('checkin_created')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('checkin_updated', (event) => {
  console.log('checkin_updated')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('checkin_deleted', (event) => {
  console.log('checkin_deleted')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('table_created', (event) => {
  console.log('table_created')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('table_updated', (event) => {
  console.log('table_updated')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('table_bulk_updated', (event) => {
  console.log('table_bulk_updated')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('table_deleted', (event) => {
  console.log('table_deleted')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('reward_redemption', (event) => {
  console.log('reward_redemption')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.addEventListener('points_redemption', (event) => {
  console.log('points_redemption')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

DoshiiSocket.on('error', (error) => {
  console.log(error)
})
