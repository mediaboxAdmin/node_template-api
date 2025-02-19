const express = require('express')
const  course_reservations_routes_controller =require('../../controllers/admin/course_reservations_admin.controller')
const  course_reservations_routes = express.Router()

 /**
 * Une route pour lister tous  les types des course_reservations 
 *@method GET
 * @url /admin/course_reservations/
 */
 course_reservations_routes.get('/',course_reservations_routes_controller.findAll)

  /**
 * Une route pour affectation une course a  un chauffeur
 *@method PUT
 * @url /admin/course_reservations/
 */
 course_reservations_routes.put('/:ID_COURSE_RESERVATION',course_reservations_routes_controller.assignDriver)
 /**
 * Une route pour compte les reservations qui est en ettente 
 *@method GET
 * @url /admin/course_reservations/countReservation
 */
 course_reservations_routes.get('/countReservation',course_reservations_routes_controller.countRervationEnEttente)

  /**
 * Une route annuler la reservation
 *@method GET
 * @url /admin/course_reservations/annuler_res/ID_COURSE_RESERVATION
 */
 course_reservations_routes.put('/annuler_res/:ID_COURSE_RESERVATION',course_reservations_routes_controller.annulerReservation)



 
module.exports = course_reservations_routes