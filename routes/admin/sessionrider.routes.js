const express = require('express')

const sessionrider_controller=require('../../controllers/admin/session_rider_admin.controller')
const sessionrider_routes=express.Router()


sessionrider_routes.get('/allrider',sessionrider_controller.riderAll)
sessionrider_routes.put('/changestatutrider/:ID_NOTIFICATION_TOKEN',sessionrider_controller.change_status)
sessionrider_routes.get('/allsessionRider',sessionrider_controller.findAllsessionRider)
sessionrider_routes.post('/deletesessionRider',sessionrider_controller.deleteItems)

sessionrider_routes.post('/notificationrider/:ID_NOTIFICATION_TOKEN',sessionrider_controller.envoyernotification)

module.exports = sessionrider_routes


