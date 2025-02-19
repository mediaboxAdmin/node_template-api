const express = require('express')


const  service_routes_controller = require('../../controllers/admin/service_config.controller')
const service_routes = express.Router()


 /**
 * Une route qui retourne la ligne dans les services de configuration
 *@method GET
 * @url /admin/configuration
 */
 service_routes.get('/configuration', service_routes_controller.getOne)
 service_routes.put('/updateservice', service_routes_controller.updateservices)


module.exports = service_routes