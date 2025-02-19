const express = require('express')
const raisons_annulation_routes_controlleur =require('../../controllers/admin/raisons_annulation.controller')
const facture_routes_controlleur = require('../../controllers/admin/factures_admin.controller')
const facture_routes = express.Router()



 /**
 * Une route pour lister les factures
 *@method GET
 * @url /admin/factures/
 */
 facture_routes.get('/',facture_routes_controlleur.findAll)

  /**
 * Une route pour creer la facture
 *@method POST
 * @url /admin/factures/
 */
 facture_routes.post('/',facture_routes_controlleur.createFacture)

  /**
 * Une route pour lister les factures
 *@method GET
 * @url /admin/factures/statut_facture
 */
 facture_routes.get('/statut_facture',facture_routes_controlleur.findAllStatut)

  /**
 * Une route pour lister une factures
 *@method GET
 * @url /admin/factures/1
 */
 facture_routes.get('/:ID_FACTURE',facture_routes_controlleur.findOneFact),

  /**
 * Une route pour lister une factures
 *@method PUT
 * @url /admin/factures/edit/1
 */
 facture_routes.put('/edit/:ID_FACTURE',facture_routes_controlleur.editPaiement),

  /**
 * Une route pour afficher les details de la facture
 *@method PUT
 * @url /admin/factures/detailsFacture/1
 */
 facture_routes.get('/detailsFacture/:ID_FACTURE',facture_routes_controlleur.getFacture)

  /**
 * Une route pour supprimer les factures
 *@method POST
 * @url /admin/factures/delete
 */
 facture_routes.post('/delete',facture_routes_controlleur.deleteItems),



module.exports = facture_routes