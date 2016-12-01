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
  describe('.create', () => {
    describe('POST /partner/v3/members', () => {
      it('should create a new member in an organisation', (done) => {
        Doshii.Members.create({
          name: 'Tony T',
          ref: '5G6H7J88',
          email: 'tony@mail.com',
          phone: '0123456789',
          address: {
            line1: '616 St Kilda Road',
            line2: 'Level 8',
            city: 'Melbourne',
            state: 'VIC',
            postalCode: '3004',
            country: 'AU'
          },
          points: 100,
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
  describe('.update', () => {
    describe('PUT /partner/v3/members/:id', () => {
      it('should update a member in an organisation', (done) => {
        Doshii.Members.update({
          id: 1,
          points: 100,
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
  describe('.remove', () => {
    describe('DELETE /partner/v3/members/:id', () => {
      it('should remove a member from an organisation', (done) => {
        Doshii.Members.remove({
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

describe('Orders', () => {
  describe('.retrieveAll', () => {
    describe('GET /partner/v3/orders', () => {
      it('should retrieve all orders in a location', (done) => {
        Doshii.Orders.retrieveAll({
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
  describe('.retrieveOne', () => {
    describe('GET /partner/v3/orders/:id', () => {
      it('should retrieve an order in a location', (done) => {
        Doshii.Orders.retrieveOne({
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
  describe('.create', () => {
    describe('POST /partner/v3/orders', () => {
      it('should create a new order in a location', (done) => {
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
          console.log(result)
          assert.isNotOk(err, 'returned an error')
          assert.isOk(result, 'returned a result')
          done()
        })
      })
    })
  })
  describe('.update', () => {
    describe('PUT /partner/v3/orders/:id', () => {
      it('should update an order in a location', (done) => {
        Doshii.Orders.update({
          id: 1,
          status: 'cancelled',
          version: 'INVALID',
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
  describe('.retrieveTransactions', () => {
    describe('GET /partner/v3/orders/:id/transactions', () => {
      it('should retrieve all transactions for an order in a location', (done) => {
        Doshii.Orders.retrieveTransactions({
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
  describe('.createTransaction', () => {
    describe('POST /partner/v3/orders/:id/transactions', () => {
      it('should create a new transaction for an order in a location', (done) => {
        Doshii.Orders.createTransaction({
          id: 1,
          amount: 1000,
          status: 'pending',
          version: 'INVALID',
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
