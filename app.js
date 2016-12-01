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

// Doshii.Members.retrieveAll({
//   doshiiOrganisationId: 2
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

Doshii.Orders.create({
  consumer: {
    name: 'Tony T',
    phone: '01234567890'
  },
  order: {
    type: 'pickup',
    surcounts: [],
    items: [{
      name: 'Toasted Sourdough Bread & Eggs',
      description: 'Just ye old classic',
      unitPrice: 1100,
      totalBeforeSurcounts: 1100,
      totalAfterSurcounts: 1100,
      posId: 'toasted_eggs',
      quantity: 1,
      surcounts: [],
      options: []
    }]
  },
  doshiiLocationId: 'p7PEkVxe'
}, (err, result) => {
  if (err) console.log(err)
  console.log(result)
})
