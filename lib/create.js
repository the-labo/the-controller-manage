/**
 * Create a TheManageCtrl instance
 * @function create
 * @param {...*} args
 * @returns {TheManageCtrl}
 */
'use strict'

const TheManageCtrl = require('./TheManageCtrl')

/** @lends create */
function create (...args) {
  return new TheManageCtrl(...args)
}

module.exports = create
