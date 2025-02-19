const express = require('express')

const course_admin_controller = require('../../controllers/admin/corporates_admin.controller')

const driver_details_routes_controller =require('../../controllers/admin/driver_admin_details.controller')
const driver_details_routes = express.Router()


 /**
 * Une route pour afficher le total de coures d'un driver
 *@method GET
 * @url /admin/details_driver/total/ID_DRIVER
 */
 driver_details_routes.get('/total/:ID_DRIVER', driver_details_routes_controller.get_total_course);

  /**
 * Une route pour afficher les coures d'un driver
 *@method GET
 * @url /admin/details_driver/all_courses/ID_DRIVER
 */
 driver_details_routes.get('/all_courses/:ID_DRIVER', driver_details_routes_controller.get_couresByDriver);

 /**
 * Une route pour afficher les coures finies d'un driver
 *@method GET
 * @url /admin/details_driver/end_courses_list/ID_DRIVER
 */
 driver_details_routes.get('/end_courses_list/:ID_DRIVER', driver_details_routes_controller.get_couresEndByDriver);

  /**
 * Une route pour afficher la somme de revenu de coures finies d'un driver
 *@method GET
 * @url /admin/details_driver/note_driver_list/ID_DRIVER
 */
 driver_details_routes.get('/note_driver_list/:ID_DRIVER', driver_details_routes_controller.get_driver_is_note);

   /**
 * Une route pour afficher le rapport du driver de 7 derniers jours
 *@method GET
 * @url /admin/details_driver/last_week_rapport/ID_DRIVER
 */
 driver_details_routes.get('/last_week_rapport/:ID_DRIVER', driver_details_routes_controller.get_rapport_course);

    /**
 * Une route pour afficher le rapport du driver par heur
 *@method GET
 * @url /admin/details_driver/hours_rapport/ID_DRIVER
 */
 driver_details_routes.get('/hours_rapport/:ID_DRIVER', driver_details_routes_controller.courseParHeure_rapport);


     /**
 * Une route pour afficher le rapport du driver par heure
 *@method GET
 * @url /admin/details_driver/list_courses/ID_DRIVER
 */
 driver_details_routes.get('/list_courses/:ID_DRIVER', driver_details_routes_controller.findAllCourseByD);

     /**
 * Une route pour afficher les notes du driver
 *@method GET
 * @url /admin/details_driver/get_notes/ID_DRIVER
 */
 driver_details_routes.get('/get_notes/:ID_DRIVER', driver_details_routes_controller.findAllNote);

module.exports = driver_details_routes