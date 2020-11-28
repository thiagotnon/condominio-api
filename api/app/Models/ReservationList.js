'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

class ReservationList extends AbstractModel {
  static getRegisterFields() {
    return [
      'reservation_guest_id',
    ]
  }
}

module.exports = ReservationList
