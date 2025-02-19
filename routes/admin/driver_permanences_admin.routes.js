const express = require('express')
const driver_permanence_routes_controlleur = require('../../controllers/admin/driver_permanences_admin.controller')
const permanence_routes = express.Router()



 /**
 * Une route pour lister les permanences
 *@method GET
 * @url /admin/permanences/
 */
 permanence_routes.get('/',driver_permanence_routes_controlleur.findAll)

  /**
 * Une route pour creer les permanence
 *@method POST
 * @url /admin/permanences/
 */
 permanence_routes.post('/',driver_permanence_routes_controlleur.createDriverPermanence)

  /**
 * Une route pour lister les statuts de performances
 *@method GET
 * @url /admin/permanences/statut_permanence
 */
 permanence_routes.get('/statut_permanence',driver_permanence_routes_controlleur.findAllStatutPemanence)

  /**
 * Une route pour lister une permanence
 *@method GET
 * @url /admin/permanences/1
 */
 permanence_routes.get('/:ID_DRIVER_PERMANENCE',driver_permanence_routes_controlleur.findPermanenceById),

 /**
 * Une route pour supprimer les permanences
 *@method POST
 * @url /admin/permanences/delete
 */
 permanence_routes.post('/delete',driver_permanence_routes_controlleur.deleteItems),

   /**
 * Une route pour modifier une permanence
 *@method PUT
 * @url /admin/permanences/1
 */
 permanence_routes.put('/:ID_DRIVER_PERMANENCE',driver_permanence_routes_controlleur.editPermanence),



module.exports = permanence_routes