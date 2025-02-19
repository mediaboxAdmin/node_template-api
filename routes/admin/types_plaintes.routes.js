const express = require('express')
const  types_plaintes_routes_controller =require('../../controllers/admin/types_plaintes_admin_controller')
const  types_plaintes_routes = express.Router()

/**
 * Une route pour insert un type de plainte
 *@method POST
 * @url /admin/types_plaintes/
 */
 types_plaintes_routes.post('/',types_plaintes_routes_controller.createType_plaintes)


 /**
 * Une route pour lister tous  les types des plaintes 
 *@method GET
 * @url /admin/types_plaintes/
 */
 types_plaintes_routes.get('/',types_plaintes_routes_controller.findAll)

 /**
 * Une route pour modifier  les types des plaintes 
 *@method PUT
 * @url /admin/types_plaintes/:ID_TYPE_PLAINTE
 */
 types_plaintes_routes.put('/modifier/:ID_TYPE_PLAINTE',types_plaintes_routes_controller.updateelement)

 /**
 * Une route pour supprimer  les types des plaintes 
 *@method DELETE
 * @url /admin/types_plaintes/delete
 */
 types_plaintes_routes.post('/delete',types_plaintes_routes_controller.deletePlainte)

  
/**
 * Une route pour recuperer  le type plainte dans un formulaire
 *@method GET
 * @url /admin/types_plaintes/edit/:ID_TYPE_PLAINTE
 */
 types_plaintes_routes.get('/edit/:ID_TYPE_PLAINTE',types_plaintes_routes_controller.findOne)

 
module.exports = types_plaintes_routes