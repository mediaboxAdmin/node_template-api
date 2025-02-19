const express = require("express")
const all_roles_routes = require("./roles.routes")
const all_roles_router = express.Router()

all_roles_router.use("/", all_roles_routes)

module.exports = all_roles_router
