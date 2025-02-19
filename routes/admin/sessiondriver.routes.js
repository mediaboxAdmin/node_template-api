const express = require('express')

const sessiondriver_controller=require('../../controllers/admin/session_driver_admin.controller')
const sessiondriver_routes=express.Router()

sessiondriver_routes.get('/allsessionDriver',sessiondriver_controller.findAllsessionDriver)
sessiondriver_routes.put('/changestatut/:ID_NOTIFICATION_TOKEN',sessiondriver_controller.change_status)
sessiondriver_routes.get('/alldriver',sessiondriver_controller.driverAll)
sessiondriver_routes.post('/deletesession',sessiondriver_controller.deleteItems)
sessiondriver_routes.post('/notication/:ID_NOTIFICATION_TOKEN',sessiondriver_controller.envoyernotification)

module.exports = sessiondriver_routes

