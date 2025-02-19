const express = require('express')


const map_controller =require('../../controllers/admin/map.controller')
const map_routes = express.Router()


 /**
 * Une route pour recuperer les chauffeurs a afficher sur la carte
 *@method GET
 * @url /admin/map/drivers
 */
 map_routes.get('/drivers', map_controller.findDrivers)
 map_routes.get('/count/drivers', map_controller.countDrivers)

module.exports = map_routes