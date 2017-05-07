/**
 * Manage controller for the-server
 * @augments TheCtrl
 * @class TheManageCtrl
 */
'use strict'

const { TheCtrl } = require('the-controller-base')

/** @lends TheManageCtrl */
class TheManageCtrl extends TheCtrl {
  /**
   * List entities
   * @param {Object} condition
   * @returns {Promise}
   */
  async list (condition = {}) {
    const s = this
    return s._resource.list(condition)
  }

  async createBulk (attributesArray) {
    const s = this
    return s._resource.createBulk(attributesArray)
  }

  async updateBulk (attributesHash) {
    const s = this
    return s._resource.updateBulk(attributesHash)
  }

  async destroyBulk (ids) {
    const s = this
    return s._resource.destroyBulk(ids)
  }

  get _resource () {
    const s = this
    const { db } = s.app
    return db.getResource(s.constructor.RESOURCE_NAME)
  }

  static get RESOURCE_NAME () {
    throw new Error('Not implemented!')
  }

}

module.exports = TheManageCtrl
