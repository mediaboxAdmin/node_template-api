const express = require('express')
const sos_routes_controlleur =require('../../controllers/admin/sos_admin.controller')
const sos_routes = express.Router()


 /**
 * Une route pour lister tous  les sos
 *@method GET
 * @url /admin/sos/
 */
 sos_routes.get('/',sos_routes_controlleur.findAll)

  /**
 * Une route pour editer les status sos
 *@method PUT
 * @url /admin/sos/4
 */
 sos_routes.put("/:ID_SOS",sos_routes_controlleur.changeStatus);
 
 /**
 * Une route pour lister tous  les sos
 *@method GET
 * @url /admin/sos/alert_en_attente
 */
 sos_routes.get('/alert_en_attente',sos_routes_controlleur.countAlertInWaiting)

module.exports = sos_routes