'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ReservationList = use('App/Models/ReservationList');

/**
 * Resourceful controller for interacting with reservationlists
 */
class ReservationListController {
  /**
   * Show a list of all reservationlists.
   * GET reservationlists
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const { page, qty, name } = request.all();
    const query = ReservationList.query();
    if ( name ) {
      query.where('name', 'like', '%'+name+'%');
    }
    return await query.paginate(page, qty);
  }

  /**
   * Create/save a new reservationlist.
   * POST reservationlists
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const registerFields = ReservationList.getRegisterFields();
    const data = request.only(registerFields);
    return await ReservationList.create(data);
  }

  /**
   * Display a single reservationlist.
   * GET reservationlists/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await ReservationList.query()
                          .where('id', params.id)
                          .first()
  }

  /**
   * Update reservationlist details.
   * PUT or PATCH reservationlists/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const reservationList = await ReservationList.findOrFail(params.id);
    const registerFields = ReservationList.getRegisterFields();
    const data = request.only(registerFields);
    reservationList.merge(data);
    await reservationList.save();
    return reservationList;
  }

  /**
   * Delete a reservationlist with id.
   * DELETE reservationlists/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const reservationList = await ReservationList.findOrFail(params.id);
    reservationList.delete();
  }
}

module.exports = ReservationListController
