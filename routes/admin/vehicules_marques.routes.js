
const express = require('express')

const vehicules_Marques_routes_controller = require('../../controllers/admin/vehicule_marques.controller')
const vehicules_Marques_routes = express.Router()

/**
 * Une route pour insert la marque
 *@method POST
 * @url /admin/vehiculeMarque/insert
 */

vehicules_Marques_routes.post('/insert', vehicules_Marques_routes_controller.createvehiculeMarque)
/**
* Une route pour lister tous  les marques
*@method GET
* @url /admin/vehiculeMarque/tous
*/
vehicules_Marques_routes.get('/tous', vehicules_Marques_routes_controller.findAll)

/**
* Une route pour editer la marque
*@method GET
* @url/admin/vehiculeMarque/one/
*/
vehicules_Marques_routes.get('/one/:ID_VEHICULE_MARQUE', vehicules_Marques_routes_controller.findOneVehiculeMarque)

/**
 * Une route pour supprimer la marque
 *@method POST
 * * @url/admin/vehiculeMarque/
 */
vehicules_Marques_routes.post('/delete', vehicules_Marques_routes_controller.deleteItems)


/**
 * Une route pour update
 *@method POST
 * * @url/admin/vehiculeMarque/update/
 */
 vehicules_Marques_routes.put('/update/:ID_VEHICULE_MARQUE', vehicules_Marques_routes_controller.updateMarque)


module.exports = vehicules_Marques_routes