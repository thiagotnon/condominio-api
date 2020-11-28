'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservationGuestSchema extends Schema {
  up () {
    this.create('reservation_guests', (table) => {
      table.increments()
      table.string('name', 255).notNullable()
      table.integer('rg').notNullable().unique()
      table.integer('cpf').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('reservation_guests')
  }
}

module.exports = ReservationGuestSchema
