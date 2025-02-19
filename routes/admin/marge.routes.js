const express = require('express')
const marge_controller =require('../../controllers/admin/marge.controller')
const marges_routes = express.Router()

 /**
 * Une route pour lister tous  les marges
 *@method GET
 * @url /admin/marges/
 */
 marges_routes.get('/',marge_controller.listMarges)
 
 /**
 * Une route pour creer un marge
 *@method POST
 * @url /admin/marges/
 */
 marges_routes.post('/',marge_controller.createMarge) 

 /**
 * Une route pour supprimer les marges de prix
 *@method POST
 * @url /admin/marges/delete_marges
 */
 marges_routes.post('/delete_marges',marge_controller.deleteMarges)

  /**
 * Une route pour recuperer une marge
 *@method GET
 * @url /admin/marges/1
 */
 marges_routes.get('/:idMarge',marge_controller.getMarge)

  /**
 * Une route pour modifier une marge
 *@method PUT
 * @url /admin/marges/1
 */
 marges_routes.put('/:idMarge',marge_controller.updateMarge)

  /**
 * Une route pour afficher la majoration du corporate
 *@method GET
 * @url /admin/marges/get_merge_corporate
 */
 marges_routes.get('/get_merge_corporate/:idCorporate',marge_controller.listMargesByCorporate)

 /**
 * Une route pour supprimer les marges du corpotate
 *@method POST
 * @url /admin/marges/sup_corporate_marge
 */
 marges_routes.post('/sup_corporate_marge',marge_controller.supMargesCorporate)

module.exports = marges_routes
