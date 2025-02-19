const express = require('express');
const transactionstypes_controller=require('../../controllers/admin/transactions_types_admin.controller')
const transactionstypes_routes=express.Router()

transactionstypes_routes.get('/allliste', transactionstypes_controller.findAlltransactions_types)
transactionstypes_routes.post('/delete', transactionstypes_controller.deleteItemstransactions_types)
transactionstypes_routes.put('/update/:ID_TRANSACTION_TYPE', transactionstypes_controller.transactionstypesUpdate)
transactionstypes_routes.get('/findone/:ID_TRANSACTION_TYPE', transactionstypes_controller.findOnetransactions_types)

module.exports = transactionstypes_routes

// /admin/transactionstypes/allliste
// /admin/transactionstypes/delete
// /admin/transactionstypes/update/
// /admin/transactionstypes/findone/

