
const express = require('express')

const vehicules_models_controller = require('../../controllers/admin/vehicule_models.controller')
const vehicules_models_routes = express.Router()

/**
 * Une route pour insert la models
 *@method POST
 * @url /admin/vehiculemodels/insert
 */

vehicules_models_routes.post('/insert', vehicules_models_controller.createvehiculemodele)
/**
* Une route pour lister tous  les modeles
*@method GET
* @url /admin/vehiculemodels/tous
*/
vehicules_models_routes.get('/tous', vehicules_models_controller.findAll)

/**
* Une route pour editer la models
*@method GET
* @url/admin/vehiculemodels/one/
*/
vehicules_models_routes.get('/one/:ID_VEHICULE_MODELE', vehicules_models_controller.findOneVehiculemodels)

/**
 * Une route pour supprimer la modeles
 *@method POST
 * * @url/admin/vehiculemodels/
 */
vehicules_models_routes.post('/delete', vehicules_models_controller.deleteItems)


/**
 * Une route pour update
 *@method put
 * * @url/admin/vehiculemodels/update/
 */
 vehicules_models_routes.put('/update/:ID_VEHICULE_MODELE', vehicules_models_controller.updateMarque)

 /**
 * Une route pour les listes des marques
 *@method get
 * * @url/admin/vehiculemodels/marque
 */
 vehicules_models_routes.get('/marque', vehicules_models_controller.listemarques)



module.exports = vehicules_models_routes