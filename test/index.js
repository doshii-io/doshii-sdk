require('../.config/.env')

const assert = require('chai').assert
const expect = require('chai').expect
const Doshii = require('../lib/doshii.js')()

describe('Checkins', () => {
  describe('.retrieveOne', () => {
    describe('GET /partner/v3/checkins/:id', () => {
      it('should retrieve a checkin', (done) => {
        Doshii.Checkins.retrieveOne({
          id: 1,
          doshiiLocationId: 'p7PEkVxe'
        }, (err, result) => {
          console.log(result)
          assert.isNotOk(err, 'returned an error')
          assert.isOk(result, 'returned a result')
          done()
        })
      })
    })
  })
})

describe('Locations', () => {
  describe('.retrieveAll', () => {
    describe('GET /partner/v3/locations', () => {
      it('should retrieve all locations', (done) => {
        Doshii.Locations.retrieveAll().then((result) => {
          assert.isOk(result, 'returned a result')
          expect(result).to.be.ok
          done()
        }).catch((err) => {
          assert.isNotOk(err, 'returned an error')
          done()
        })
      })
    })
  })
  describe('.retrieveMenu', () => {
    describe('GET /partner/v3/locations/:id/menu', () => {
      it('should retrieve a menu from a location', (done) => {
        Doshii.Locations.retrieveMenu({
          id: 'p7PEkVxe'
        }).then((result) => {
          assert.isOk(result, 'returned a result')
          expect(result).to.be.ok
          done()
        }).catch((err) => {
          assert.isNotOk(err, 'returned an error')
          done()
        })
      })
    })
  })
})

describe('Members', () => {
  describe('.retrieveAll', () => {
    describe('GET /partner/v3/members', () => {
      it('should retrieve all members in an organisation', (done) => {
        Doshii.Members.retrieveAll({
          doshiiOrganisationId: 2
        }, (err, result) => {
          console.log(result)
          assert.isNotOk(err, 'returned an error')
          assert.isOk(result, 'returned a result')
          done()
        })
      })
    })
  })
  describe('.retrieveOne', () => {
    describe('GET /partner/v3/members/:id', () => {
      it('should retrieve a member in an organisation', (done) => {
        Doshii.Members.retrieveOne({
          id: 1,
          doshiiOrganisationId: 2
        }, (err, result) => {
          console.log(result)
          assert.isNotOk(err, 'returned an error')
          assert.isOk(result, 'returned a result')
          done()
        })
      })
    })
  })
})
