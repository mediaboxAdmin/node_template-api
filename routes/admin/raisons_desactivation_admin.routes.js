const express = require('express')
const raisons_desactivation_routes_controlleur =require('../../controllers/admin/raisons_desactivation.controller')
const raisons_desactivation_routes = express.Router()

/**
 * Une route pour ajouter une raison
 *@method POST
 * @url /admin/raisons_desactivation/
 */
 raisons_desactivation_routes.post('/',raisons_desactivation_routes_controlleur.createRaison)

 /**
 * Une route pour lister toutes les raisons
 *@method GET
 * @url /admin/raisons_desactivation/
 */
 raisons_desactivation_routes.get('/',raisons_desactivation_routes_controlleur.findAll)
 

  /**
 * Une route pour editer une raison
 *@method GET
 * @url /admin/raisons_desactivation/
 */
 raisons_desactivation_routes.get('/:ID_RAISON_DESACTIVATION',raisons_desactivation_routes_controlleur.findRaisonById)

/**
 * Une route pour supprimer une raison
 *@method POST
 * @url /admin/raisons_desactivation/delete
 */
 raisons_desactivation_routes.post('/delete',raisons_desactivation_routes_controlleur.deleteItems)

  /**
 * Une route pour modifier une raison
 *@method PUT
 * @url /admin/raisons_desactivation/
 */
 raisons_desactivation_routes.put("/:ID_RAISON_DESACTIVATION",raisons_desactivation_routes_controlleur.editRaison)

 /**
 * Une route pour lister l'historique de desactivation
 *@method GET
 * @url /admin/raisons_desactivation/fetch/hist_des
 */
 raisons_desactivation_routes.get('/fetch/hist_des',raisons_desactivation_routes_controlleur.findHistDesactivationD)




module.exports = raisons_desactivation_routes