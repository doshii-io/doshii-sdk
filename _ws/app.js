'use strict'

// require('./.config/config.json')

const Doshii = require('../lib/doshii.js')({
  clientId: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkb3NoaWkgc2VydmVyIiwic3ViIjp7ImZvciI6IkFwcENsaWVudElkIiwiaWQiOjc3fSwiZXhwIjoxNTI2MDExNjc4fQ.md1rQe72KVwzABJaHlz9KrSFejgN2iSjY_sTp5htjRw',
  clientSecret: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkb3NoaWkgc2VydmVyIiwic3ViIjp7ImZvciI6IkFwcENsaWVudFNlY3JldCIsImlkIjo3N30sImV4cCI6MTUyNjAxMTY3OH0.u8NeY-FOflrgsTRI3VTWaSw5G87F3Cf6_fO0PAJ4j9I',
  env: 'beta-sandbox',
  version: 'v3'
})

const DoshiiSocket = Doshii.WebSocket()

DoshiiSocket.on('error', (error) => {
  console.log(error)
})
