const express = require('express')

const riderwallet_controller=require('../../controllers/admin/rider_wallet_admin_controller')
const riderwallet_routes=express.Router()


riderwallet_routes.get('/allriderwallet',riderwallet_controller.findAllriderwallet)
riderwallet_routes.post('/montantdeposer/:ID_RIDER_WALLET',riderwallet_controller.deposerwallet)
riderwallet_routes.get('/allriderwallettransaction',riderwallet_controller.findAlltransactionriderswallet)
riderwallet_routes.post('/createtransationriders',riderwallet_controller.createtransactionriders)
riderwallet_routes.put('/approuver/:ID_RIDER_WALLET_TRANSACTION',riderwallet_controller.approuvertransaction)
riderwallet_routes.put('/rejeter/:ID_RIDER_WALLET_TRANSACTION',riderwallet_controller.rejetertransaction)

module.exports = riderwallet_routes


// /admin/riderwallet/rejeter/