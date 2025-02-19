const express = require('express')
const roles_controller = require("../../controllers/admin/roles.controller")
const roles_routes = express.Router()

/**
 * Une route qui permet de creer un role 
 *@method POST
 * @url /roles/create/
 */
roles_routes.post("/create", roles_controller.createRole)

/**
 * Une route qui permet de lister tous les roles 
 *@method GET
 * @url /roles/all/
 */
 roles_routes.get("/all", roles_controller.findAllRole)

/**
 * Une route qui permet de supprimer un role 
 *@method POST
 * @url /roles/delete/
 */
 roles_routes.post("/delete", roles_controller.deleteItems)

/**
 * Une route qui permet de recuperer un role via son id
 *@method GET
 * @url /roles/get/
 */
 roles_routes.get("/get/:ID_ROLE", roles_controller.findOneRole)

/**
 * Une route qui permet de mettre à jour via son id 
 *@method PUT
 * @url /roles/update/
 */
 roles_routes.put("/update/:ID_ROLE", roles_controller.updateRole)

module.exports = roles_routes