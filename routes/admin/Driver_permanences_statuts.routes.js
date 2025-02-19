const express = require('express')
const driver_permanences_statuts_routes_controller = require('../../controllers/admin/driver_permanences_statuts.controller')
const driver_permanences_statuts_routes = express.Router()


driver_permanences_statuts_routes.get('/', driver_permanences_statuts_routes_controller.findAllDriver_permanences_statuts)
driver_permanences_statuts_routes.get('/findone/:ID_PERMANENCE_STATUT', driver_permanences_statuts_routes_controller.findOneDriver_permanences_statuts)
driver_permanences_statuts_routes.put('/driver_permanences_statutsUpdate/:ID_PERMANENCE_STATUT', driver_permanences_statuts_routes_controller.driver_permanences_statutsUpdate)

module.exports = driver_permanences_statuts_routes