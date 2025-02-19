const express = require('express')
const  courses_status_routes_controller = require('../../controllers/admin/courses_statuts_admin.controller')
const statuts_routes = express.Router()


 /**
 * Une route pour faire la liste des corporates
 *@method POST
 * @url /admin/
 */
 statuts_routes.get('/', courses_status_routes_controller.findAll)
 statuts_routes.get('/onestatutcourse/:ID_STATUT', courses_status_routes_controller.findonestatutcourse)
 statuts_routes.put('/statutcourseupdate/:ID_STATUT', courses_status_routes_controller.statutcourseupdate)

module.exports = statuts_routes