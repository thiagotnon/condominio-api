'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Apartment = use('App/Models/Apartment');

/**
 * Resourceful controller for interacting with apartments
 */
class ApartmentController {
  /**
   * Show a list of all apartments.
   * GET apartments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const { page, qty, name } = request.all();
    const query = Apartment.query();
    if ( name ) {
      query.where('name', 'like', '%'+name+'%');
    }
    return await query.paginate(page, qty);
  }

  /**
   * Create/save a new apartment.
   * POST apartments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const registerFields = Apartment.getRegisterFields();
    const data = request.only(registerFields);
    return await Apartment.create(data);
  }

  /**
   * Display a single apartment.
   * GET apartments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Apartment.query()
                          .where('id', params.id)
                          .first()
  }

  /**
   * Update apartment details.
   * PUT or PATCH apartments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const apartment = await Apartment.findOrFail(params.id);
    const registerFields = Apartment.getRegisterFields();
    const data = request.only(registerFields);
    apartment.merge(data);
    await apartment.save();
    return apartment;
  }

  /**
   * Delete a apartment with id.
   * DELETE apartments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const apartment = await Apartment.findOrFail(params.id);
    apartment.delete();
  }
}

module.exports = ApartmentController
