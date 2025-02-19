const express = require('express')
const driverwallet_controller=require('../../controllers/admin/driver_wallet_admin_controller')
const driverwallet_routes=express.Router()


driverwallet_routes.get('/alldriverwallet',driverwallet_controller.findAlldriverwallet)
driverwallet_routes.post('/montantretirer/:ID_DRIVER_WALLET',driverwallet_controller.retirerwallet)
driverwallet_routes.post('/montantpayer/:ID_DRIVER_WALLET',driverwallet_controller.payerwallet)
driverwallet_routes.get("/findcourse",driverwallet_controller.findAll)
driverwallet_routes.get("/driverpayement", driverwallet_controller.finddriverpayment)
driverwallet_routes.post("/avancedriver", driverwallet_controller.avance_driver)
driverwallet_routes.post("/historiquepaiement", driverwallet_controller.historique_paiement_driver)
driverwallet_routes.get("/history",driverwallet_controller.historiques)
driverwallet_routes.post("/delete",driverwallet_controller.deleteHistory)




module.exports = driverwallet_routes


