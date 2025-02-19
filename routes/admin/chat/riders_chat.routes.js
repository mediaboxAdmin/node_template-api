const express = require('express')
const chat_riders_controller = require('../../../controllers/admin/chat/chat_riders.controller')
const riders_chat_routes = express.Router()

/**
* Une route pour recuperer les conversations entre le client  et  l'admin
*@method GET
* @url /admin/chat/riders
*/
riders_chat_routes.get('/', chat_riders_controller.getConversationRiders)

/**
* Une route pour recuperer les conversation non lus des chauffeurs
*@method GET
* @url /admin/chat/riders/unread/conversations
*/
riders_chat_routes.get('/unread/conversations', chat_riders_controller.getUnreadRiders)

/**
* Une route pour recuperer les message entre le client et l'admin
*@method GET
* @url /admin/chat/riders/1
*/
riders_chat_routes.get('/:idRider', chat_riders_controller.getMessages)


/**
* Une route qui permte de marquer les messages comme lus
*@method PUT
* @url /admin/chat/riders/1
*/
riders_chat_routes.put('/:idRider', chat_riders_controller.readRiderMessages)

/**
* Une route pour envoyer le message au chauffeur
*@method POST
* @url /admin/chat/drivers/1
*/
riders_chat_routes.post('/:idRider', chat_riders_controller.sendRiderMessage)


module.exports = riders_chat_routes
