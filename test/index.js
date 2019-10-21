require('../.config/.env')

const assert = require('chai').assert
const expect = require('chai').expect
const Doshii = require('../lib/doshii.js')()

describe('Checkins', () => {
  describe('.retrieveOne', () => {
    describe('GET /partner/v3/checkins/:id', () => {
      it('should retrieve a checkin', (done) => {
        Doshii.Checkins.retrieveOne({
          checkinId: 1,
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
          locationId: 'p7PEkVxe'
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
  describe('.subscribe', () => {
    describe('POST /partner/v3/locations/:id/subscription', () => {
      it('should subscribe to location', (done) => {
        Doshii.Locations.subscribe({
          locationId: '8KXM0OD4'
        }).then((result) => {
          console.log(result)
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
  describe('.unsubscribe', () => {
    describe('DELETE /partner/v3/locations/:id/subscription', () => {
      it('should unsubscribe from location', (done) => {
        Doshii.Locations.subscribe({
          locationId: '8KXM0OD4'
        }).then((result) => {
          console.log(result)
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
          memberId: 1,
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
          memberId: 1,
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
          memberId: 1,
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
          orderId: 1,
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
          orderId: 1,
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
          orderId: 1,
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
          orderId: 1,
          amount: 1000,
          status: 'pending',
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

describe('Reservations', () => {
  describe('.retrieveAll', () => {
    describe('GET /partner/v3/bookings(queryString)', () => {
      it('should retrieve all reservations for a location', (done) => {
        Doshii.Reservations.retrieveAll({
          from: 1,
          to: 1472709049,
          limit: 50,
          offset: 0,
          seated: false,
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
    describe('GET /partner/v3/bookings/:id', () => {
      it('should retrieve a reservations for a location', (done) => {
        Doshii.Reservations.retrieveOne({
          reservationId: 1,
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
    describe('POST /partner/v3/bookings', () => {
      it('should create a reservation for a location', (done) => {
        Doshii.Reservations.create({
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
          console.log(result)
          assert.isNotOk(err, 'returned an error')
          assert.isOk(result, 'returned a result')
          done()
        })
      })
    })
  })
  describe('.update', () => {
    describe('PUT /partner/v3/bookings/:id', () => {
      it('should update a reservation for a location', (done) => {
        Doshii.Reservations.update({
          reservationId: 6231,
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
          assert.isNotOk(err, 'returned an error')
          assert.isOk(result, 'returned a result')
          done()
        })
      })
    })
  })
  describe('.remove', () => {
    describe('DELETE /partner/v3/bookings/:id', () => {
      it('should remove a reservations for a location', (done) => {
        Doshii.Reservations.remove({
          reservationId: 6231,
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
  describe('.createCheckin', () => {
    describe('POST /partner/v3/bookings/:id/checkins', () => {
      it('should create a checkin for a reservation at a location', (done) => {
        Doshii.Reservations.createCheckin({
          reservationId: 6231,
          tableNames: ['Table 1'],
          covers: '4',
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

describe('Rewards', () => {
  describe('.retrieveAll', () => {
    describe('GET /partner/v3/members/:id/rewards', () => {
      it('should retrieve all rewards for a member', (done) => {
        Doshii.Rewards.retrieveAll({
          memberId: 1,
          doshiiOrganisationId: 'A0yZ8EeK'
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
    describe('GET /partner/v3/members/:memberId/rewards/:rewardId', () => {
      it('should retrieve a rewards for a member', (done) => {
        Doshii.Rewards.retrieveOne({
          memberId: 1,
          rewardId: 1,
          doshiiOrganisationId: 'A0yZ8EeK'
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
    describe('POST /partner/v3/members/:memberId/rewards', () => {
      it('should create a rewards for a member', (done) => {
        Doshii.Rewards.create({
          memberId: 1,
          rewards: [{
            ref: '123',
            name: '10% off your order',
            description: 'Any suitable description if any',
            surcountType: 'percentage',
            surcountAmount: '-10'
          }, {
            ref: '456',
            name: '$10 off your next shirt',
            eligibleTags: ['shirts'],
            surcountType: 'absolute',
            surcountAmount: '-1000'
          }, {
            ref: '789',
            name: '$5 off any meal (when you spend $20+)',
            minOrderValue: '2000',
            surcountType: 'absolute',
            surcountAmount: '-500'
          }],
          doshiiOrganisationId: 'A0yZ8EeK'
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
    describe('PUT /partner/v3/members/:memberId/reward/:rewardId', () => {
      it('should update all rewards for a member', (done) => {
        Doshii.Rewards.update({
          memberId: 1,
          rewardId: 1,
          doshiiOrganisationId: 'A0yZ8EeK',
          ref: '123',
          name: '$10 off your order',
          description: 'Our treat to you',
          surcountType: 'absolute',
          surcountAmount: '-1000'
        }, (err, result) => {
          console.log(result)
          assert.isNotOk(err, 'returned an error')
          assert.isOk(result, 'returned a result')
          done()
        })
      })
    })
  })
  describe('.updateAll', () => {
    describe('PUT /partner/v3/members/:memberId/reward', () => {
      it('should update all rewards for a member', (done) => {
        Doshii.Rewards.updateAll({
          memberId: 1,
          rewardId: 1,
          doshiiOrganisationId: 'A0yZ8EeK',
          rewards: [{
            ref: '123',
            name: '10% off your order',
            description: 'Any suitable description if any',
            surcountType: 'percentage',
            surcountAmount: '-10'
          }, {
            ref: '456',
            name: '$10 off your next shirt',
            eligibleTags: ['shirts'],
            surcountType: 'absolute',
            surcountAmount: '-1000'
          }, {
            ref: '789',
            name: '$5 off any meal (when you spend $20+)',
            minOrderValue: '2000',
            surcountType: 'absolute',
            surcountAmount: '-500'
          }]
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
    describe('DELETE /partner/v3/members/:memberId/reward/:rewardId', () => {
      it('should remove a reward from a member', (done) => {
        Doshii.Rewards.remove({
          memberId: 1,
          rewardId: 1,
          doshiiOrganisationId: 'A0yZ8EeK'
        }, (err, result) => {
          console.log(result)
          assert.isNotOk(err, 'returned an error')
          assert.isOk(result, 'returned a result')
          done()
        })
      })
    })
  })
  describe('.accept', () => {
    describe('PUT /partner/v3/members/:memberId/reward/:rewardId/accept', () => {
      it('should accept and consume a reward for a member', (done) => {
        Doshii.Rewards.accept({
          memberId: 1,
          rewardId: 1,
          doshiiOrganisationId: 'A0yZ8EeK',
          consume: true
        }, (err, result) => {
          console.log(result)
          assert.isNotOk(err, 'returned an error')
          assert.isOk(result, 'returned a result')
          done()
        })
      })
    })
  })
  describe('.reject', () => {
    describe('PUT /partner/v3/members/:memberId/reward/:rewardId/reject', () => {
      it('should reject and consume a reward for a member', (done) => {
        Doshii.Rewards.reject({
          memberId: 1,
          rewardId: 1,
          doshiiOrganisationId: 'A0yZ8EeK',
          consume: true,
          reason: 'Not applicable'
        }, (err, result) => {
          console.log(result)
          assert.isNotOk(err, 'returned an error')
          assert.isOk(result, 'returned a result')
          done()
        })
      })
    })
  })
  describe('.acceptPoints', () => {
    describe('PUT /partner/v3/members/:memberId/points/accept', () => {
      it('should accept points for a member', (done) => {
        Doshii.Rewards.acceptPoints({
          memberId: 1,
          doshiiOrganisationId: 'A0yZ8EeK'
        }, (err, result) => {
          console.log(result)
          assert.isNotOk(err, 'returned an error')
          assert.isOk(result, 'returned a result')
          done()
        })
      })
    })
  })
  describe('.rejectPoints', () => {
    describe('PUT /partner/v3/members/:memberId/points/reject', () => {
      it('should reject points for a member', (done) => {
        Doshii.Rewards.rejectPoints({
          memberId: 1,
          doshiiOrganisationId: 'A0yZ8EeK',
          reason: 'Not applicable'
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

describe('Tables', () => {
  describe('.retrieveAll', () => {
    describe('GET /partner/v3/tables', () => {
      it('should retrieve all tables for a location', (done) => {
        Doshii.Tables.retrieveAll({
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
    describe('GET /partner/v3/tables/:name', () => {
      it('should retrieve a table by name for a location', (done) => {
        Doshii.Tables.retrieveAll({
          name: 'Table 1',
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
  describe('.retrieveBookings', () => {
    describe('GET /partner/v3/tables/:name/bookings', () => {
      it('should retrieve bookings for a table by name for a location', (done) => {
        Doshii.Tables.retrieveBookings({
          name: 'Table 1',
          doshiiLocationId: 'p7PEkVxe'
        }, (err, result) => {
          console.log(result)
          assert.isNotOk(err, 'returned an error')
          done()
        })
      })
    })
  })
  describe('.retrieveCheckins', () => {
    describe('GET /partner/v3/tables/:name/checkins', () => {
      it('should retrieve checkins for a table by name for a location', (done) => {
        Doshii.Tables.retrieveCheckins({
          name: 'Table 1',
          doshiiLocationId: 'p7PEkVxe'
        }, (err, result) => {
          console.log(result)
          assert.isNotOk(err, 'returned an error')
          done()
        })
      })
    })
  })
  describe('.retrieveOrders', () => {
    describe('GET /partner/v3/tables/:name/orders', () => {
      it('should retrieve orders for a table by name for a location', (done) => {
        Doshii.Tables.retrieveOrders({
          name: 'Table 1',
          doshiiLocationId: 'p7PEkVxe'
        }, (err, result) => {
          console.log(result)
          assert.isNotOk(err, 'returned an error')
          done()
        })
      })
    })
  })
})

describe('Transactions', () => {
  describe('.retrieveOne', () => {
    describe('GET /partner/v3/transactions/:id', () => {
      it('should retrieve a transaction', (done) => {
        Doshii.Transactions.retrieveOne({
          transactionId: 1
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
    describe('POST /partner/v3/transactions/:id', () => {
      it('should create a transaction', (done) => {
        Doshii.Transactions.create({
          amount: '1000',
          orderId: '6343'
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
    describe('PUT /partner/v3/transactions/:id', () => {
      it('should update a transaction', (done) => {
        Doshii.Transactions.update({
          amount: '2000',
          transactionId: 1,
          version: 'INVALID'
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
