const express = require('express')
const chat_drivers_controller = require('../../../controllers/admin/chat/chat_drivers.controller')
const drivers_chat_routes = require('./drivers_chat.routes')
const riders_chat_routes = require('./riders_chat.routes')

const chatRouter = express.Router()

chatRouter.use("/riders", riders_chat_routes)
chatRouter.use("/drivers", drivers_chat_routes)

module.exports = chatRouter