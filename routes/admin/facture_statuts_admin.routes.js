const express = require('express')
const facture_status_routes_controller = require('../../controllers/admin/facture_statuts_admin.controller')
const facture_status_routes = express.Router()



facture_status_routes.get('/', facture_status_routes_controller.findAllFacture_status)
facture_status_routes.get('/findone/:ID_FACTURE_STATUT', facture_status_routes_controller.findOneFacture_status)
facture_status_routes.put('/facture_status_update/:ID_FACTURE_STATUT', facture_status_routes_controller.factureStatusUpdate)

module.exports = facture_status_routes