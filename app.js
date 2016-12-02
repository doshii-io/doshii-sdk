'use strict'

require('./.config/.env')

const Doshii = require('./lib/doshii.js')()

Doshii.ws.on('message', (event) => {
  if (!event) return
  event = JSON.parse(event.data)
  if (!event.emit) return
  console.log(event.emit)
})

Doshii.ws.on('member_created', (event) => {
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

Doshii.ws.on('order_updated', (event) => {
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

Doshii.ws.on('member_created', (event) => {
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

Doshii.ws.on('member_updated', (event) => {
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})

Doshii.ws.on('error', (err) => {
  console.log(err)
  throw new Error(err)
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

Doshii.Reservations.update({
  id: 6231,
  tableNames: ['Table 1'],
  date: '2016-04-12T20:54:25.289Z',
  covers: '4',
  ref: '813889491',
  consumer: {
    name: '4',
    email: 'user@test.com',
    phone: '0415 123 456',
    address: {
      line1: '616 St Kilda Road',
      line2: 'Level 8',
      city: 'Melbourne',
      state: 'VIC',
      postalCode: '3004',
      country: 'AU'
    }
  },
  doshiiLocationId: 'p7PEkVxe'
}, (err, result) => {
  console.log(err)
  console.log(result)
})
