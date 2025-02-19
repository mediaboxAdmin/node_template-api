const express = require('express')
const modes_paiement_routes_controller = require('../../controllers/admin/modes_paiement.controller')
 const mode_paiement_routes = express.Router()







 /**
 * Une route pour lister tous  les modes de paiement 
 *@method GET
 * @url /admin/mode_paiement/liste
 */
mode_paiement_routes.get('/liste', modes_paiement_routes_controller.findAllModePaiement)
/**
* Une route pour inserer une mode de paiement
*@method POST
* @url /admin/mode_paiement/
*/
mode_paiement_routes.post('/createMode', modes_paiement_routes_controller.createModePaiement )
/**
* Une route pour recuperer un mode de paiement
*@method GET
* @url /admin/mode_paiement/findOne/1
*/
mode_paiement_routes.get('/findOne/:ID_MODE_PAIEMENT', modes_paiement_routes_controller.findOneMode)
/**
* Une route pour la mise a jour du mode de paiement
*@method PUT
* @url /admin/mode_paiement/
*/
mode_paiement_routes.put('/update/:ID_MODE_PAIEMENT',  modes_paiement_routes_controller.UpdateModePaiement)
/**
* Une route pour la suppression des modes de paiement
*@method POST
* @url /admin/mode_paiement/delete
*/
mode_paiement_routes.post('/delete', modes_paiement_routes_controller.deleteItemsMode)


   /**
 * Une route pour changer le statut d'un mode de paiement
 *@method PUT
 /admin/mode_paiement/change_statuts/:ID_MODE_PAIEMENT
 
 */
 mode_paiement_routes.put("/change_statuts/:ID_MODE_PAIEMENT", modes_paiement_routes_controller.change_status)





 
module.exports = mode_paiement_routes