const express = require('express')
const motif_modifications_trajets_routes_controlleur =require('../../controllers/admin/motif_modifications_trajets.controller')
const motif_modifications_trajets_routes = express.Router()

/**
 * Une route pour ajouter un motif de modification des trajets
 *@method POST
 * @url /admin/motif_modifications_trajets/
 */
 motif_modifications_trajets_routes.post('/',motif_modifications_trajets_routes_controlleur.createMotif)

 /**
 * Une route pour lister tous  les motif de modification des trajets
 *@method GET
 * @url /admin/motif_modifications_trajets/
 */
 motif_modifications_trajets_routes.get('/',motif_modifications_trajets_routes_controlleur.findAll)
 
  /**
 * Une route de recuperer un motif de modification des trajets
 *@method GET
 * @url /admin/motif_modifications_trajets/
 */
 motif_modifications_trajets_routes.get('/:ID_MOTIF_MODIFICATION',motif_modifications_trajets_routes_controlleur.findMotifEditionById)

/**
 * Une route pour supprimer un motif de modification des trajets
 *@method POST
 * @url /admin/motif_modifications_trajets/delete
 */
 motif_modifications_trajets_routes.post('/delete',motif_modifications_trajets_routes_controlleur.deleteItems)

  /**
 * Une route pour modifier un motif de modification des trajets
 *@method PUT
 * @url /admin/motif_modifications_trajets/
 */
 motif_modifications_trajets_routes.put("/:ID_MOTIF_MODIFICATION",motif_modifications_trajets_routes_controlleur.editMotif)

 /**
 * Route permet de faire le rapport sur les montants des courses finies des client d'un corpo
 *@method GET
 * @url /admin/motif_modifications_trajets/rapport/motif
 */
 motif_modifications_trajets_routes.get('/rapport/motif',motif_modifications_trajets_routes_controlleur.motif_modif_rapport);

  /**
 * Route permet de faire le rapport sur les types des raisons d'annulation
 *@method GET
 * @url /admin/motif_modifications_trajets/rapport/per_raison_a_type
 */
//  motif_modifications_trajets_routes.get('/rapport/per_raison_a_type',motif_modifications_trajets_routes_controlleur.rapport_crs_annuleeByType);




module.exports = motif_modifications_trajets_routes