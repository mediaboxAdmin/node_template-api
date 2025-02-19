const express = require('express')
const  promotion_routes_controller =require('../../controllers/admin/promotion_admin_controller')
const  promotion_routes_routes = express.Router()

/**
 * Une route pour insert un promotion
 *@method POST
 * @url /admin/publicite/
 */
 promotion_routes_routes.post('/',promotion_routes_controller.create)


 /**
 * Une route pour lister tous les  de promotions
 *@method GET
 * @url /admin/publicite/
 */
 promotion_routes_routes.get('/liste',promotion_routes_controller.findAll)

 /**
 * Une route pour modifier  promotion
 *@method PUT
 * @url /admin/publicite/:ID_PUBLICITE
 */
 promotion_routes_routes.put('/modifier/:ID_PROMOTION',promotion_routes_controller.updatePromotion)

 /**
 * Une route pour supprimer  promotion
 *@method DELETE
 * @url /admin/publicite/delete
 */
 promotion_routes_routes.post('/delete',promotion_routes_controller.deletePromotion)

  
/**
 * Une route pour recuperer  publicite dans un formulaire
 *@method GET
 * @url /admin/publicite/edit/:ID_TYPE_PLAINTE
 */
 promotion_routes_routes.get('/edit/:ID_PROMOTION',promotion_routes_controller.findOne)

 /**
 * Une route pour changes le statut du   promotions
 *@method PUT
 * @url /admin/publicite/change_statut:ID_PROMOTIONS
 */
 promotion_routes_routes.put('/change_statut/:ID_PROMOTION',promotion_routes_controller.change_status)

 
module.exports = promotion_routes_routes