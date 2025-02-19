const express = require('express')
const  publicite_routes_controller =require('../../controllers/admin/publicite_admin.controller')
const  publicite_routes_controller_routes = express.Router()

/**
 * Une route pour insert une publicite
 *@method POST
 * @url /admin/publicite/
 */
 publicite_routes_controller_routes.post('/',publicite_routes_controller.create)


 /**
 * Une route pour lister tous les  publicite 
 *@method GET
 * @url /admin/publicite/
 */
 publicite_routes_controller_routes.get('/',publicite_routes_controller.findAll)

 /**
 * Une route pour modifier  publicite
 *@method PUT
 * @url /admin/publicite/:ID_PUBLICITE
 */
 publicite_routes_controller_routes.put('/modifier/:ID_PUBLICITE',publicite_routes_controller.updateelement)

 /**
 * Une route pour supprimer  publicite
 *@method DELETE
 * @url /admin/publicite/delete
 */
 publicite_routes_controller_routes.post('/delete',publicite_routes_controller.deletePublicite)

  
/**
 * Une route pour recuperer  publicite dans un formulaire
 *@method GET
 * @url /admin/publicite/edit/:ID_TYPE_PLAINTE
 */
 publicite_routes_controller_routes.get('/edit/:ID_PUBLICITE',publicite_routes_controller.findOne)

 /**
 * Une route pour changes le statut du   publicite
 *@method PUT
 * @url /admin/publicite/change_statut:ID_PUBLICITE
 */
 publicite_routes_controller_routes.put('/change_statut/:ID_PUBLICITE',publicite_routes_controller.change_status)

 
module.exports = publicite_routes_controller_routes