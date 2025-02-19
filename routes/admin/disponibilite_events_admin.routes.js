const express = require('express')
const disponibilite_events_routes_controlleur = require('../../controllers/admin/disponibilite_events_admin.controller')
const disponibilite_events_routes = express.Router()



 /**
 * Une route pour lister les disponibilites events
 *@method GET
 * @url /admin/dispo_events/
 */
 disponibilite_events_routes.get('/',disponibilite_events_routes_controlleur.findAll)

  /**
 * Une route pour creer la disponibilite
 *@method POST
 * @url /admin/dispo_events/
 */
 disponibilite_events_routes.post('/',disponibilite_events_routes_controlleur.createDispoEvent)

  /**
 * Une route pour lister une disponibilite
 *@method GET
 * @url /admin/dispo_events/1
 */
 disponibilite_events_routes.get('/:ID_DISPONIBILITE_EVENT',disponibilite_events_routes_controlleur.findDispoEventById),

 /**
 * Une route pour supprimer les dispo_events
 *@method POST
 * @url /admin/dispo_events/delete
 */
 disponibilite_events_routes.post('/delete',disponibilite_events_routes_controlleur.deleteItems),

   /**
 * Une route pour modifier une disponibilite
 *@method PUT
 * @url /admin/dispo_events/1
 */
 disponibilite_events_routes.put('/:ID_DISPONIBILITE_EVENT',disponibilite_events_routes_controlleur.editDispoEvent),

  /**
 * Une route pour modifier is_actif
 *@method PUT
 * @url /admin/dispo_events/activated/1
 */
 disponibilite_events_routes.put("/activated/:activerDriver",disponibilite_events_routes_controlleur.activerDisponEvents);

 /**
 * Une route pour lister les situations des chauffeurs
 *@method GET
 * @url /admin/dispo_events/situation/all
 */
 disponibilite_events_routes.get('/situations/all',disponibilite_events_routes_controlleur.findAllDriverDispo)

  /**
 * Une route pour lister les situations des chauffeurs
 *@method GET
 * @url /admin/dispo_events/disponibilite/last
 */
 disponibilite_events_routes.get('/disponibilite/last',disponibilite_events_routes_controlleur.findAllDriverDispoLast)


module.exports = disponibilite_events_routes