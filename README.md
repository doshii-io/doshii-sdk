# Doshii Partner SDK [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A wrapper for the Doshii Partner API

Our API has been designed specifically to provide seamless integration into any POS, whether cloud or legacy. Built on the cloud, our SSL-secure API provides two-way communication between the POS and any app integrated with Doshii. Simply put, we're connecting hospitality.

Looking to integrate? Check us out at [Doshii.io](http://doshii.io) and one of our awesome staff will hook you up with an API key.

A breakdown of all the methods available are available on the [wiki](https://github.com/yjimk/doshii-sdk/wiki) page

## Installation

```sh
$ npm install --save doshii-sdk
# or
$ yarn add doshii-sdk
```

## Usage

Your clientId and clientSecret will be picked up by default if they're set in your environment variables as 'DOSHII_CLIENT_ID' and 'DOSHII_CLIENT_SECRET', both or none must be set.

I would suggest only using the default 'v3' for version.  Specifying 'v2' will work for some of these methods, but reliability may be lacking.

```js
// Initialize the library
const Doshii = require('doshii-sdk')({
  clientId: 'YOUR_DOSHII_CLIENT_ID',
  clientSecret: 'YOUR_DOSHII_CLIENT_SECRET',
  env: 'sandbox',
  version: 'v3'
})

// The above settings would result in a base path of https://sandbox.doshii.co/partner/v3
```

Both promises and callbacks are supported by this library
```js
Doshii.Locations.retrieveAll()
  .then((result) => {
    // Do awesome stuff here
  }).catch((err) => {
    // Manage any errors here
  })

Doshii.Locations.findMenu({
  locationId: 'HASHED_LOCATION_ID' // Required
}, (err, result) => {
  if (err) // Manage any errors here
  // Do awesome stuff here
})
```
A breakdown of the methods available are available on the [wiki](https://github.com/yjimk/doshii-sdk/wiki) page

## Doshii WebSocket

This library also includes a wrapper for Doshii WebSocket events. While WebSockets aren't mandatory to make your project work and gain certification, they will make development vastly simpler. Instead of manually polling Doshii, the WebSocket will send you exactly what you're after. All you need to is listen.

```js
// Establish a connection to the Doshii WebSocket
const DoshiiSocket = Doshii.WebSocket()
// Your authKey and environment will be generated in the same manner as you initialize the library

// Now lets ping the server and send a heartbeat, just to make sure it knows you're listening
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

// And add an error catcher in case there are any surprises
DoshiiSocket.on('error', (error) => {
  console.log(error)
})
```

There are a number of events which are handled by the Doshii WebSocket. A complete list can be found in the [Doshii WebSocket documentation](http://docs.doshii.co/api/v3/partner/#api-WebSocket), while examples of all the methods can be found in the [wiki](https://github.com/yjimk/doshii-sdk/wiki/WebSockets). The underlying library is `ws`, more information about this lib can be found [here](https://github.com/websockets/ws)

Here's a quick example of a socket event listener.

```js
// Listen for the 'order_updated' event and then do stuff with it
DoshiiSocket.addEventListener('order_updated', (event) => {
  console.log('order_updated')
  if (!event) return
  event = JSON.parse(event.data)
  console.log(event)
  if (!event.emit) return
  console.log(event.emit)
})
```

## Contributing

We LOVE PRs. Contribution is the foundation of open source and what makes the development community so great.

In saying that, it would really help out a bunch if you follow a few guidelines before submitting a PR for this repo.

- Please update/create then run tests (check out the /test folder). You'll need a DOSHII_CLIENT_ID and DOSHII_CLIENT_SECRET set as environment variables.
- Please keep the coding style consistent. If you use eslint, the standard babel config is being used and will be applied when installing dependencies for this repo. Simply put, we use spaces, no trailing semi-colons and prefer nice thin functions/conditionals where reasonable.

More generic points about contributing to this repo can be found in [CONTRIBUTING.md](https://github.com/yjimk/doshii-sdk/blob/master/CONTRIBUTING.md)

## License

© MIT

Developed by [Jimmy Cann](mail@jimmycann.com) and maintained by the Doshii Team.


[npm-image]: https://badge.fury.io/js/doshii-sdk.svg
[npm-url]: https://npmjs.org/package/doshii-sdk
[travis-image]: https://travis-ci.org/yjimk/doshii-sdk.svg?branch=master
[travis-url]: https://travis-ci.org/yjimk/doshii-sdk
[daviddm-image]: https://david-dm.org/yjimk/doshii-sdk.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/yjimk/doshii-sdk
