const express = require('express')
const departements_routes_controlleur =require('../../controllers/admin/departements_admin.controlller')
const departements_routes = express.Router()

/**
 * Une route pour ajouter un departement
 *@method POST
 * @url /admin/departements/
 */
 departements_routes.post('/',departements_routes_controlleur.createDepartement)

 /**
 * Une route pour lister tous  les departements
 *@method GET
 * @url /admin/departements/
 */
 departements_routes.get('/',departements_routes_controlleur.findAll)
 

  /**
 * Une route pour recuperer un departement
 *@method GET
 * @url /admin/departements/4
 */
 departements_routes.get('/:ID_DEPARTEMENT',departements_routes_controlleur.findDepartementById)

/**
 * Une route pour supprimer une raison
 *@method POST
 * @url /admin/departements/delete
 */
 departements_routes.post('/delete',departements_routes_controlleur.deleteItems)

  /**
 * Une route pour modifier un departement
 *@method PUT
 * @url /admin/departements/
 */
 departements_routes.put("/:ID_DEPARTEMENT",departements_routes_controlleur.editDepartement)



module.exports = departements_routes