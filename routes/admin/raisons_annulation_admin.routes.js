const express = require('express')
const raisons_annulation_routes_controlleur =require('../../controllers/admin/raisons_annulation.controller')
const raisons_annulation_routes = express.Router()

/**
 * Une route pour ajouter une raison
 *@method POST
 * @url /admin/raison_annulation/
 */
 raisons_annulation_routes.post('/',raisons_annulation_routes_controlleur.createRaison)

 /**
 * Une route pour lister tous  les profils
 *@method GET
 * @url /admin/raison_annulation/
 */
 raisons_annulation_routes.get('/',raisons_annulation_routes_controlleur.findAll)
 
 /**
 * Une route pour  recuperer
 *@method GET
 * @url /admin/raison_annulation/types_raison
 */
 raisons_annulation_routes.get('/types_raison',raisons_annulation_routes_controlleur.findAllTyperaison)

  /**
 * Une route pour editer une raison
 *@method GET
 * @url /admin/raison_annulation/
 */
 raisons_annulation_routes.get('/:ID_RAISON',raisons_annulation_routes_controlleur.findRaisonById)

/**
 * Une route pour supprimer une raison
 *@method POST
 * @url /admin/raison_annulation/delete
 */
 raisons_annulation_routes.post('/delete',raisons_annulation_routes_controlleur.deleteItems)

  /**
 * Une route pour modifier une raison
 *@method PUT
 * @url /admin/raison_annulation/
 */
 raisons_annulation_routes.put("/:ID_RAISON",raisons_annulation_routes_controlleur.editRaison)

 /**
 * Route permet de faire le rapport sur les montants des courses finies des client d'un corpo
 *@method GET
 * @url /admin/raison_annulation/rapport/per_raison_a
 */
 raisons_annulation_routes.get('/rapport/per_raison_a',raisons_annulation_routes_controlleur.rapport_crs_annulee);

  /**
 * Route permet de faire le rapport sur les types des raisons d'annulation
 *@method GET
 * @url /admin/raison_annulation/rapport/per_raison_a_type
 */
 raisons_annulation_routes.get('/rapport/per_raison_a_type',raisons_annulation_routes_controlleur.rapport_crs_annuleeByType);




module.exports = raisons_annulation_routes