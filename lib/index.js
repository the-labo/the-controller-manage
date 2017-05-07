/**
 * Manage controller for the-server
 * @module the-controller-manage
 */
'use strict'

const TheManageCtrl = require('./TheManageCtrl')
const create = require('./create')
const Constants = require('./Constants')

const lib = create.bind(this)

Object.assign(lib, Constants, {
  TheManageCtrl,
  create,
  Constants
})

module.exports = lib
