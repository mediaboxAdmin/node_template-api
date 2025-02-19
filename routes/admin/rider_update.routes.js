const express = require('express')
const rider_updates_controller=require('../../controllers/admin/rider_update_admin.controller')
const rider_updates_routes=express.Router()

rider_updates_routes.put('/changestatutrider/:ID_RIDER_UPDATE',rider_updates_controller.change_status)
rider_updates_routes.get('/fetch',rider_updates_controller.findAllriderupdate)
rider_updates_routes.post('/delete',rider_updates_controller.deleteItems)
rider_updates_routes.post('/create',rider_updates_controller.createRiderupdate)
rider_updates_routes.put('/update/:ID_RIDER_UPDATE',rider_updates_controller.updateRiderrupdate)
rider_updates_routes.get('/findone/:ID_RIDER_UPDATE',rider_updates_controller.findRiderupdateById)
rider_updates_routes.put('/change_obligatoire/:ID_RIDER_UPDATE',rider_updates_controller.change_obligatoire)

module.exports = rider_updates_routes


// admin/rider_update/changestatutrider/:ID_RIDER_UPDATE'
// admin/rider_update/fetch
// admin/rider_update/delete
// admin/rider_update/create
// admin/rider_update/update/:ID_RIDER_UPDATE
// admin/rider_update/findone/:ID_RIDER_UPDATE
// admin/rider_update/change_obligatoire/:ID_RIDER_UPDATE