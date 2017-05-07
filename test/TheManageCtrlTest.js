/**
 * Test for TheManageCtrl.
 * Runs with mocha.
 */
'use strict'

const TheManageCtrl = require('../lib/TheManageCtrl')
const { TheUserResource } = require('the-resource-user')
const theDb = require('the-db')
const { ok, equal } = require('assert')

describe('the-manage-ctrl', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', async () => {
    let db = theDb({ dialect: 'memory' })
    db.load(TheUserResource, 'User')

    class UserManageCtrl extends TheManageCtrl {
      static get resourceName () {
        return 'User'
      }
    }
    const { User } = db.resources
    let ctrl = new UserManageCtrl({
      app: { db },
      session: {}
    })
    ok(ctrl)

    let user01 = await User.create({ name: 'user01' })
    ok(user01)
    ctrl.session.user = user01

    await ctrl.createBulk([ { name: 'user02' }, { name: 'user03' } ])

  })
})

/* global describe, before, after, it */
