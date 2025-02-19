const express = require('express')
const profil_routes_controller = require('../../controllers/admin/profil_admin.controller')
const profil_routes = express.Router()



/**
* Une route pour lister tous  les profils
*@method GET
* @url /admin/profils/
*/
profil_routes.get('/', profil_routes_controller.findAll)
/**
* Une route pour la suppression des profiles
*@method POST
* @url /admin/profils/
*/
profil_routes.post('/delete', profil_routes_controller.deleteItemsprofile)
/**
* Une route pour inserer une autre profile
*@method POST
* @url /admin/profils/
*/
profil_routes.post('/createprofile', profil_routes_controller.profileAdd)
/**
* Une route pour recuperer un profile
*@method GET
* @url /admin/profil/findOneProf/1
*/
profil_routes.get('/findOneProf/:ID_PROFIL', profil_routes_controller.findOneprofile)
/**
* Une route pour la mise a jour du profile
*@method PUT
* @url /admin/profils/
*/
profil_routes.put('/updateProf/:ID_PROFIL', profil_routes_controller.profileUpdate)

/**
* Une route pour lister tous  les roles
*@method GET
* @url /admin/profil/role
*/
profil_routes.get('/role', profil_routes_controller.findAllrole)

/**
* Une route pour recuperer les roles d'un profile
*@method GET
* @url /admin/profil/roles/1
*/
profil_routes.get('/roles/:ID_PROFIL', profil_routes_controller.findRoleByIdProfile)


module.exports = profil_routes