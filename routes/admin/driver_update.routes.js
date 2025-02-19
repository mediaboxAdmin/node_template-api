const express = require('express')
const driver_updates_controller=require('../../controllers/admin/driver_update_admin.controller')
const driver_updates_routes=express.Router()

driver_updates_routes.put('/changestatutdriver/:ID_DRIVER_UPDATE',driver_updates_controller.change_status)
driver_updates_routes.get('/fetch',driver_updates_controller.findAlldriverupdate)
driver_updates_routes.post('/delete',driver_updates_controller.deleteItems)
driver_updates_routes.post('/create',driver_updates_controller.createDriverupdate)
driver_updates_routes.put('/update/:ID_DRIVER_UPDATE',driver_updates_controller.updateDriverupdate)
driver_updates_routes.get('/findone/:ID_DRIVER_UPDATE',driver_updates_controller.findDriverupdateById)
driver_updates_routes.put('/change_obligatoire/:ID_DRIVER_UPDATE',driver_updates_controller.change_obligatoire)

module.exports = driver_updates_routes


// admin/driver_update/changestatutdriver/:ID_DRIVER_UPDATE'
// admin/driver_update/fetch
// admin/driver_update/delete
// admin/driver_update/create
// admin/driver_update/update/:ID_DRIVER_UPDATE
// admin/driver_update/findone/:ID_DRIVER_UPDATE
// admin/driver_update/change_obligatoire/:ID_DRIVER_UPDATE