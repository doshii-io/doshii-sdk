# Doshii-SDK [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A wrapper for the Doshii Partner API

Currently a work in progress, would use for reference only at this point.

Looking to integrate? Check us out at [Doshii.io](http://doshii.io)

## Installation

```sh
$ npm install --save doshii-sdk
# or
$ yarn add doshii-sdk
```

## Usage

```js
const Doshii = require('doshii-sdk')()

Doshii.Locations.retrieveAll()
  .then((result) => {
    console.log(result)
  }).catch((err) => {
    console.log(err)
  })

// Both Promises and Callbacks supported

Doshii.Locations.findMenu({
  id: 'p7PEkVxe'
}, (err, result) => {
  if (err) console.log(err)
  console.log(result)
})
```
## License

MIT © [Jimmy Cann](mail@jimmycann.com)


[npm-image]: https://badge.fury.io/js/doshii-sdk.svg
[npm-url]: https://npmjs.org/package/doshii-sdk
[travis-image]: https://travis-ci.org/yjimk/doshii-sdk.svg?branch=master
[travis-url]: https://travis-ci.org/yjimk/doshii-sdk
[daviddm-image]: https://david-dm.org/yjimk/doshii-sdk.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/yjimk/doshii-sdk
