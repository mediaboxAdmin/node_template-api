const express = require('express')
const plaintes_routes_controller = require('../../controllers/admin/plaintes_admin.controller')
const plaintes_routes = express.Router()



/**
* Une route pour lister tous  les types des plaintes 
*@method GET
* @url /admin/plaintes/
*/
plaintes_routes.get('/', plaintes_routes_controller.findAll)
/**
* Une route pour creer les commentaires
*@method POST
* @url /admin/plaintes/create
*/
plaintes_routes.post('/create/:ID_PLAINTE', plaintes_routes_controller.createAdminComnt)

/**
* Une route pour declarer une incident en tant qu'admin
*@method POST
* @url /admin/plaintes/new/new_incident
*/
plaintes_routes.post('/new/new_incident', plaintes_routes_controller.reportIncident)




module.exports = plaintes_routes