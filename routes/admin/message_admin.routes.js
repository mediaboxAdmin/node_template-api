const express = require('express')


const messageRider_controller =require('../../controllers/admin/messages.controller')
const messageDriver_controller =require("../../controllers/admin/messages.controller")
const messageRider_routes = express.Router()


 /**
 * Une route d'afficher les messages d'un client
 *@method GET
 * @url /admin/findMessageRider
 */
 messageRider_routes.get('/findMessageRider', messageRider_controller.fetchMessageRider)
 messageRider_routes.get('/findMessageDriver', messageDriver_controller.fetchMessageDriver)


module.exports = messageRider_routes