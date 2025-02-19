const express = require('express')
const compte_paiement_routes_controlleur = require('../../controllers/admin/compte_paiement_admin.controller')
const compte_paiement_routes = express.Router()



 /**
 * Une route pour lister les comptes de paiement
 *@method GET
 * @url /admin/compte_paiement/
 */
 compte_paiement_routes.get('/',compte_paiement_routes_controlleur.findAll)

  /**
 * Une route pour creer le compte de paiement
 *@method POST
 * @url /admin/compte_paiement/
 */
 compte_paiement_routes.post('/',compte_paiement_routes_controlleur.createCmptPymt)

//   /**
//  * Une route pour lister les factures
//  *@method GET
//  * @url /admin/factures/statut_facture
//  */
//  compte_paiement_routes.get('/statut_facture',compte_paiement_routes_controlleur.findAllStatut)

  /**
 * Une route pour lister un compte de paiement
 *@method GET
 * @url /admin/compte_paiement/1
 */
 compte_paiement_routes.get('/:ID_COMPTE_PAIEMENT',compte_paiement_routes_controlleur.findOneCmptPmt),

  /**
 * Une route pour editer un compte de paiement
 *@method PUT
 * @url /admin/compte_paiement/edit/1
 */
 compte_paiement_routes.put('/edit/:ID_COMPTE_PAIEMENT',compte_paiement_routes_controlleur.editPaiement),

//   /**
//  * Une route pour afficher les details de la facture
//  *@method PUT
//  * @url /admin/factures/detailsFacture/1
//  */
//  compte_paiement_routes.get('/detailsFacture/:ID_FACTURE',compte_paiement_routes_controlleur.getFacture)

  /**
 * Une route pour supprimer les comptes
 *@method POST
 * @url /admin/compte_paiement/delete
 */
 compte_paiement_routes.post('/delete',compte_paiement_routes_controlleur.deleteItems),



module.exports = compte_paiement_routes