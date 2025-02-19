const express = require('express')


const  statuttransactions_routes_controller = require('../../controllers/admin/statut_transaction_admin.controller')
const statuttransactions_routes = express.Router()


statuttransactions_routes.get('/edit/:ID_TRANSACTION_STATUT', statuttransactions_routes_controller.findOne)
 statuttransactions_routes.get('/', statuttransactions_routes_controller.findAll)
 statuttransactions_routes.post('/', statuttransactions_routes_controller.createstatutTransaction)
 statuttransactions_routes.put("/:ID_TRANSACTION_STATUT", statuttransactions_routes_controller.updateelement)




module.exports = statuttransactions_routes