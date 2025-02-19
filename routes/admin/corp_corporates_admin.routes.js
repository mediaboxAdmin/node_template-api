const express = require('express')
const corp_corporates_controller = require("../../controllers/admin/corp_corporates_admin.controller")
const corp_corporate_routes = express.Router()


/**
* Une route pour faire la liste des corporates
*@method GET
* @url /admin/corporates/findAll
*/
corp_corporate_routes.get('/', corp_corporates_controller.findAll)

/**
* Une route pour enregistrer un nouveau corporate
*@method POST
* @url /admin/corp_corporates/
*/
corp_corporate_routes.post('/', corp_corporates_controller.createCorp_corporate)

/**
* Une route pour faire la liste des corporates
*@method PUT
* @url /admin/corp_corporates/1
*/
corp_corporate_routes.put('/:idCorporate', corp_corporates_controller.ediCorporate)

/**
* Une route pour faire la liste des corporates
*@method GET
* @url /admin/corp_corporates/1
*/
corp_corporate_routes.get('/:idCorporate', corp_corporates_controller.findOne)

corp_corporate_routes.get('/fetchall', corp_corporates_controller.fetchAll)

/**
* Une route pour retourner la liste des employes des corporates
*@method GET
* @url /admin/corp_corporates/corp_corporates_riders
*/
corp_corporate_routes.get('/corp_corporates_riders/list', corp_corporates_controller.findEmployes)

/**
* Une route pour supprimer les corporates
*@method GET
* @url /admin/corp_corporates/delete_items
*/
corp_corporate_routes.post('/delete_items', corp_corporates_controller.deteleCorporates)

/**
* Une route pour supprimer les  employes du corporate
*@method GET
* @url /admin/corp_corporates/corp_corporates_riders/delete_items
*/
corp_corporate_routes.post('/corp_corporates_riders/delete_items', corp_corporates_controller.deteleEmployes)

/**
* Une route pour switcher la responsabilite d'un employe
*@method GET
* @url /admin/corp_corporates/corp_corporates_riders/1
*/
corp_corporate_routes.put('/corp_corporates_riders/responsable/:idCorporateClient', corp_corporates_controller.switchResponsable)

/**
* Une route pour recuperer les modes d;un corporate
*@method GET
* @url /admin/corp_corporates/corporates_modes/1
*/
corp_corporate_routes.get('/corporates_modes/:idCorporate', corp_corporates_controller.findCorporateModes)

/**
* Une route pour recuperer les details des courses d'un corporate
*@method GET
* @url /admin/corp_corporates/details_courses/ID_CORP_CORPORATE(1,........)
*/
corp_corporate_routes.get('/details_courses/:idCorporate', corp_corporates_controller.getFacture)

/**
* Une route pour recuperer les details des courses d'un corporate
*@method GET
* @url /admin/corp_corporates/valider_invalider/:ID_RIDER
*/
corp_corporate_routes.put('/valider_invalider/:ID_RIDER', corp_corporates_controller.valider_invalider)

/**
* Une route pour attribuer les droits aux employes de se connecter au web
*@method POST
* @url /admin/corp_corporates/validation/:ID_RIDER
*/
corp_corporate_routes.post('/approve_validation', corp_corporates_controller.approveValidation)


module.exports = corp_corporate_routes