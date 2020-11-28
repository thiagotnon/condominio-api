'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AbstractModel = use('App/Models/AbstractModels')

class Order extends AbstractModel {
  static getRegisterFields() {
    return [
      'tracking',
      'message',
      'sender',
      'recipient',
      'delivery_status',
      'registered_order',
      'apartment_id',
      'order_type_id',
    ]
  }
}

module.exports = Order
