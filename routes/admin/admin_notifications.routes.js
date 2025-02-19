const express = require('express');
const admin_notifications_controllers=require('../../controllers/admin/admin_notifications.admin.controller')
const admin_notifications_routes=express.Router();

admin_notifications_routes.get('/notifications_admin',admin_notifications_controllers.findAllnotificationsreservation)
admin_notifications_routes.put('/upnotification/:ID_ADMIN_NOTIFICATION',admin_notifications_controllers.readnotifications)
admin_notifications_routes.get('/countnotifications',admin_notifications_controllers.countnotifications)



module.exports = admin_notifications_routes

