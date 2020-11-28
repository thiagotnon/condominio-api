"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const AbstractModel = use("App/Models/AbstractModels");

class Apartment extends AbstractModel {
  static getRegisterFields() {
    return ["unit_number", "block", "floor"];
  }
}

module.exports = Apartment;
