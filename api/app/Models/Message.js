"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const AbstractModel = use("App/Models/AbstractModels");

class Message extends AbstractModel {
  static getRegisterFields() {
    return ["title", "message", "apartment_id"];
  }
  apartment() {
    return this.belongsTo("App/Models/Apartment");
  }
}

module.exports = Message;
