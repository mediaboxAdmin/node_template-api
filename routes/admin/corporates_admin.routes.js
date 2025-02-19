const express = require('express')
const corporate_routes_controller = require('../../controllers/admin/corporates_admin.controller')
const corporate_routes = express.Router()

/**
 * Une route pour insert un corporate
 *@method POST
 * @url /admin/corporates/insert_data
 */
 corporate_routes.post('/insert_data', corporate_routes_controller.createCorporate)
 /**
 * Une route pour faire la liste des corporates
 *@method GET
 * @url /admin/corporates/findAll
 */
 corporate_routes.get('/findAll', corporate_routes_controller.findAll)

 corporate_routes.get('/fetchmodecourse', corporate_routes_controller.fetchAll)
  /**
 * Une route pour supprimer un corporate
 *@method POST
 * @url /admin/corporates/delete_corporates
 */
corporate_routes.post("/delete_corporates",corporate_routes_controller.deleteItems);
  /**
 * Une route pour editer un corporate
 *@method GET
 * @url /admin/corporates/delete_corporates
 */
 corporate_routes.get("/get_corporates/:ID_CORPORATE",corporate_routes_controller.findCorporateById);
  /**
 * Une route pour editer un corporate
 *@method PUT
 * @url /admin/corporates/delete_corporates
 */
 corporate_routes.put("/update_corporates/:ID_CORPORATE",corporate_routes_controller.updateCorporate)


/**
 * Une route pour editer un corporate
 *@method GET
 * @url /admin/corporates/delete_corporates
 */
 corporate_routes.get("/findAllModeCourse",corporate_routes_controller.findAllModeCourse);


module.exports = corporate_routes