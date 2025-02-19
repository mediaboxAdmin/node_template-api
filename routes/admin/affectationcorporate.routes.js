const express = require('express')
const affectationcorporate_controller=require('../../controllers/admin/affectation_corporate_admin_controller')
const affectationcorporate_routes=express.Router()

affectationcorporate_routes.get('/alldrivercorporate',affectationcorporate_controller.findAlldrivercorporate)
affectationcorporate_routes.post('/add_affectationdriver',affectationcorporate_controller.createdrivercorporate)
affectationcorporate_routes.get('/allcorporate',affectationcorporate_controller.findallcorcorporate)

affectationcorporate_routes.get('/getoneaffectationcorp/:ID_DRIVER',affectationcorporate_controller.findOnedrivercorporate)
affectationcorporate_routes.put('/updateaffectationcorp/:id_driver',affectationcorporate_controller.updatecorporatedriver)
affectationcorporate_routes.post('/deleteaffectation',affectationcorporate_controller.deleteItemsdrivercoporate)

module.exports = affectationcorporate_routes

