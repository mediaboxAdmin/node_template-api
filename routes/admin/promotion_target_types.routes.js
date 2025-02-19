const express = require('express')
const  promotion_target_types=require('../../controllers/admin/promotion_target_types.controller')
const  promotion_types_routes_routes = express.Router()


 /**
 * Une route pour lister tous les  de promotionstype
 *@method GET
 * @url /admin/promotion_type/liste
 */
 promotion_types_routes_routes.get('/liste',promotion_target_types.findAll)
 promotion_types_routes_routes.get('/all', promotion_target_types.findAll)
 promotion_types_routes_routes.put('/update/:ID_TARGET_TYPE', promotion_target_types.updatepromotiontypetarget)
 promotion_types_routes_routes.get('/findone/:ID_TARGET_TYPE', promotion_target_types.findOnepromotiontargettype)

module.exports = promotion_types_routes_routes