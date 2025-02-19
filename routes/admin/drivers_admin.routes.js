const express = require('express');
const drivercontroller= require('../../controllers/admin/drivers_admin.controller');
const driversroutes= express.Router()


driversroutes.post("/",drivercontroller.createDriver);
driversroutes.get("/",drivercontroller.findAll);
driversroutes.get("/getone/:ID_DRIVER",drivercontroller.getOneDriver);
driversroutes.get("/getNote/:id",drivercontroller.getNoteDriver);
driversroutes.get('/nombre/:id',drivercontroller.Nbrcoursedemande);
//admin/drivers/courseFini
driversroutes.get('/courseFini',drivercontroller.Nbrcoursefini);
driversroutes.get('/count',drivercontroller.CountAllDriver);
driversroutes.get('/activer',drivercontroller.CountAllDriverIsActive);
driversroutes.get('/desactiver',drivercontroller.CountAllDriverUNActive);
driversroutes.get('/CountAllDriverNew',drivercontroller.CountAllDriverNew);
driversroutes.get('/distanceparcourue/:id',drivercontroller.SumDistanceparcourue);
driversroutes.get('/montanttotl/:id',drivercontroller.SumMontanttotal);
driversroutes.get('/course_driver_annulee',drivercontroller.findAllCRejetee);
 /**
 * Route pour retourner le rapport sur la performance de 5 top chaffeur pendant les 7 derniers jours
 *@method GET
 * @url /admin/drivers/get_rapport_seven_days
 */
driversroutes.get('/get_rapport_seven_days',drivercontroller.get_rapport_driver_7_jrs);

 /**
 * Route pour retourner le rapport sur la performance de 5 top chaffeur pendant les 30 derniers jours
 *@method GET
 * @url /admin/drivers/get_rapport_thirty_days
 */
 driversroutes.get('/get_rapport_thirty_days',drivercontroller.get_rapport_driver_30_jrs);

 /**
 * Route pour retourner le rapport sur la performance de 5 top chaffeurs de tous les temps
 *@method GET
 * @url /admin/drivers/get_top_five_drivers_of_all_time
 */
 driversroutes.get('/get_top_five_drivers_of_all_time',drivercontroller.get_10_top_drivers);

  /**
 * Route pour Desactiver plusieurs chauffeurs
 *@method POST
 * @url /admin/drivers/disable_drivers
 */
 driversroutes.post('/disable_drivers',drivercontroller.desactiveDrivers);

driversroutes.post("/deteledriver",drivercontroller.delete_drivers);
driversroutes.put("/:id_driver",drivercontroller.UpdateDriver);
driversroutes.put("/activation/:activerDriver",drivercontroller.activerDriver);

 /**
 * Route pour retourner le rapport sur le revenu des chauffeurs
 *@method GET
 * @url /admin/drivers/revenu_rapport
 */
 driversroutes.get('/revenu_rapport',drivercontroller.drivers_rapport_revenu);

 /**
 * Route pour retourner le rapport sur le notes et avis
 *@method GET
 * @url /admin/drivers/note_et_avis_drivers
 */
 driversroutes.get('/note_et_avis_drivers',drivercontroller.drivers_rapport_notes_avis);

 /**
 * Route pour retourner la liste des chauffeur selon une moyenne x 
 *@method GET
 * @url /admin/drivers/moyenne_all_drivers
 */
 driversroutes.get('/moyenne_all_drivers',drivercontroller.drivers_notes_avis);

  /**
 * Route pour retourner le rapport sur les raisons de desactivations
 *@method GET
 * @url /admin/drivers/rapport_r_desactivation
 */
 driversroutes.get('/rapport_r_desactivation',drivercontroller.rapport_driver_desa);

module.exports=driversroutes
