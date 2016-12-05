'use strict'

require('./.config/.env')

const Doshii = require('./lib/doshii.js')()
const DoshiiSocket = Doshii.WebSocket()

// After connecting we need to send heartbeats
DoshiiSocket.on('open', (event) => {
  console.log('Connection to the Doshii WebSocket established')
  function heartbeat () {
    let timestamp = Date.now()
    console.log(`"primus::ping::${timestamp}"`)
    DoshiiSocket.send(`"primus::ping::${timestamp}"`)
  }
  heartbeat()
  setInterval(heartbeat, 15000)
})

DoshiiSocket.on('message', (event) => {
  console.log(event)
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

DoshiiSocket.addEventListener('disconnect', () => {
  console.log('disconnect')
  setTimeout(() => {
    DoshiiSocket()
  }, 5000)
})

// Doshii.Locations.retrieveAll().then((result) => {
//   console.log(result)
// }).catch((err) => {
//   console.log(err)
// })

// Doshii.Locations.retrieveMenu({
//   id: 'p7PEkVxe'
// }).then((result) => {
//   console.log(result)
// }).catch((err) => {
//   console.log(err)
// })

// Doshii.Checkins.retrieveOne({
//   id: 1,
//   doshiiLocationId: 'p7PEkVxe'
// }, (err, result) => {
//   if (err) console.log(err)
//   console.log(result)
// })

// Doshii.Orders.retrieveAll({
//   doshiiLocationId: 'EBP5DRJD'
// }, (err, result) => {
//   if (err) console.log(err)
//   console.log(result)
// })

// Doshii.Members.retrieveOne({
//   id: 1,
//   doshiiOrganisationId: 2
// }, (err, result) => {
//   if (err) console.log(err)
//   console.log(result)
// })

// Doshii.Orders.create({
//   consumer: {
//     name: 'Tony T',
//     phone: '01234567890'
//   },
//   order: {
//     type: 'pickup',
//     surcounts: [],
//     items: [{
//       name: 'Toasted Sourdough Bread & Eggs',
//       description: 'Just ye old classic',
//       unitPrice: 1100,
//       totalBeforeSurcounts: 1100,
//       totalAfterSurcounts: 1100,
//       posId: 'toasted_eggs',
//       quantity: 1,
//       surcounts: [],
//       options: []
//     }]
//   },
//   doshiiLocationId: 'p7PEkVxe'
// }, (err, result) => {
//   if (err) console.log(err)
//   console.log(result)
// })

// Doshii.Reservations.update({
//   reservationId: 6231,
//   tableNames: ['Table 1'],
//   date: '2016-04-12T20:54:25.289Z',
//   covers: '4',
//   ref: '813889491',
//   consumer: {
//     name: '4',
//     email: 'user@test.com',
//     phone: '0415 123 456',
//     address: {
//       line1: '616 St Kilda Road',
//       line2: 'Level 8',
//       city: 'Melbourne',
//       state: 'VIC',
//       postalCode: '3004',
//       country: 'AU'
//     }
//   },
//   doshiiLocationId: 'p7PEkVxe'
// }, (err, result) => {
//   console.log(err)
//   console.log(result)
// })
