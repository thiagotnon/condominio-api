'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservationListSchema extends Schema {
  up () {
    this.create('reservation_lists', (table) => {
      table.increments()
      table.integer('reservation_guest_id').unsigned().references('id').inTable('reservation_guests').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('reservation_lists')
  }
}

module.exports = ReservationListSchema
