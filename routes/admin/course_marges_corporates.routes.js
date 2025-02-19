const express = require('express')
const course_marges_corporates_controller =require('../../controllers/admin/Course_marges_corporates.controller')
const course_marges_corporates_routes = express.Router()

 /**
 * Une route pour lister toutes  les marges des corporate
 *@method GET
 * @url /admin/marges_corporates/
 */
 course_marges_corporates_routes.get('/',course_marges_corporates_controller.listMargesByCorporate)
 
 /**
 * Une route pour creer un marge
 *@method POST
 * @url /admin/marges_corporates/
 */
 course_marges_corporates_routes.post('/',course_marges_corporates_controller.createMarge) 

 /**
 * Une route pour supprimer les marges de prix
 *@method POST
 * @url /admin/marges_corporates/delete_marges
 */
 course_marges_corporates_routes.post('/delete_marges',course_marges_corporates_controller.deleteMarges)

  /**
 * Une route pour recuperer une marge
 *@method GET
 * @url /admin/marges_corporates/1
 */
 course_marges_corporates_routes.get('/:ID_MARGIN_CORPORATE',course_marges_corporates_controller.getOneMargeCorporate)

  /**
 * Une route pour modifier une marge
 *@method PUT
 * @url /admin/marges_corporates/1
 */
 course_marges_corporates_routes.put('/:ID_MARGIN_CORPORATE',course_marges_corporates_controller.updateMarge)

 
module.exports = course_marges_corporates_routes
