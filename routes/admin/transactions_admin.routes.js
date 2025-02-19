const express = require('express')


const  transactions_routes_controller = require('../../controllers/admin/transactions_admin.controller')
const transactions_routes = express.Router()


 /**
 * Une route qui retourne la listes des transactions
 *@method GET
 * @url /admin/transactions/
 */
 transactions_routes.get('/', transactions_routes_controller.findAll)
 transactions_routes.get('/types', transactions_routes_controller.findTypetransaction)
 transactions_routes.get('/statut', transactions_routes_controller.findstatuttransaction)
 transactions_routes.get('/paymentmethod', transactions_routes_controller.findpaymentmethod)
 transactions_routes.put('/approuver/:ID_TRANSACTION', transactions_routes_controller.approuver)
 transactions_routes.put('/rejeter/:ID_TRANSACTION', transactions_routes_controller.rejeter)
 transactions_routes.post('/', transactions_routes_controller.createtransaction)
 
 transactions_routes.get('/modepayementriders', transactions_routes_controller.findmodespayementsriders)





module.exports = transactions_routes