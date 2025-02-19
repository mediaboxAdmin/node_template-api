const express = require('express')
const chat_drivers_controller = require('../../../controllers/admin/chat/chat_drivers.controller')
const drivers_chat_routes = express.Router()

/**
* Une route pour recuperer les conversations entre le chauffeur le l'admin
*@method GET
* @url /admin/chat/drivers
*/
drivers_chat_routes.get('/', chat_drivers_controller.getConversations)

/**
* Une route pour envoyer le message au chauffeur
*@method POST
* @url /admin/chat/drivers/1
*/
drivers_chat_routes.post('/:idDriver', chat_drivers_controller.sendDriverMessage)

/**
* Une route qui permte de marquer les messages comme lus
*@method PUT
* @url /admin/chat/drivers/1
*/
drivers_chat_routes.put('/:idDriver', chat_drivers_controller.readDriverMessages)

/**
* Une route pour recuperer les message entre le chauffeur et l'admin
*@method GET
* @url /admin/chat/drivers/1
*/
drivers_chat_routes.get('/:idDriver', chat_drivers_controller.getMessages)

/**
* Une route pour recuperer les conversation non lus des chauffeurs
*@method GET
* @url /admin/chat/drivers/unread/conversations
*/
drivers_chat_routes.get('/unread/conversations', chat_drivers_controller.getUnreadDrivers)

module.exports = drivers_chat_routes