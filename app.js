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

Doshii.Members.create({
  id: 1,
  doshiiOrganisationId: 2
}, (err, result) => {
  if (err) console.log(err)
  console.log(result)
})
