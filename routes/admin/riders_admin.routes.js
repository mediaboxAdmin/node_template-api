const express = require('express');
const riderscontroller= require('../../controllers/admin/riders_admin.controller')
const riders_routers= express.Router()

riders_routers.get('/',riderscontroller.findAll);
riders_routers.get('/Count',riderscontroller.CountAllRider);

riders_routers.get('/activer',riderscontroller.CountAllRiderIsActive);
riders_routers.get('/desactiver',riderscontroller.CountAllRiderUNActive);
riders_routers.get('/CountAllRiderNew',riderscontroller.CountAllRiderNew);

riders_routers.get('/nombre/:id',riderscontroller.getcousrsenumber);
riders_routers.get('/nombredeFois/:id',riderscontroller.getCourseFois);
riders_routers.get('/nombrekm/:id',riderscontroller.SumDistance);
riders_routers.get('/montatotaldepenser/:id',riderscontroller.SumMontantdepense);
riders_routers.post("/detelerider",riderscontroller.deleterider);


riders_routers.get("/:id",riderscontroller.getOneRriver);
riders_routers.put("/active/:activeRider",riderscontroller.activerRider);

//Route pour creer un client
//Url admin/riders/createRider
riders_routers.post("/createRider",riderscontroller.createClient);

//Route pour recuperer un client et son corporate
//Url admin/riders/oneRiderIsCorporate/ID_RIDER
riders_routers.get(`/oneRiderIsCorporate/:ID_RIDER`,riderscontroller.getOneCorpCorpcrteByRider);

//Route pour modifier un rider
//Url admin/riders/editRider/ID_RIDER
riders_routers.put(`/editRider/:ID_RIDER`,riderscontroller.editRider);

//Route pour trouver les notes 
//Url admin/riders/getNotes/ID_RIDER
riders_routers.get(`/getNotes/:ID_RIDER`,riderscontroller.findAllNote);

//Route pour trouver les notes 
//Url admin/riders/getMoyenneNote/ID_RIDER
riders_routers.get(`/getMoyenneNote/:ID_RIDER`,riderscontroller.getMoyeneNote);

//Route pour le nombre des courses 
//Url admin/riders/nbrData/ID_RIDER
riders_routers.get(`/nbrData/:ID_RIDER`,riderscontroller.get_details_course);

 /**
 * Route pour retourner le rapport sur le notes et avis
 *@method GET
 * @url /admin/riders/note_et_avis/riders
 */
 riders_routers.get('/note_et_avis/riders',riderscontroller.riders_rapport_notes_avis);

  /**
 * Route pour retourner la liste des clients selon une moyenne x 
 *@method GET
 * @url /admin/riders/moyenne_notes/all_riders
 */
 riders_routers.get('/moyenne_notes/all_riders',riderscontroller.riders_notes_avis);

 /**
 * Route pour retourner le rapport sur les client grand public
 *@method GET
 * @url /admin/riders/rapport_client/grand_pub
 */
 riders_routers.get('/rapport_client/grand_pub',riderscontroller.rapport_grand_public_cli);

 /**
 * Route pour retourner le rapport sur les clients par sexe
 *@method GET
 * @url /admin/riders/rapport_client/sexe
 */
 riders_routers.get('/rapport_client/sexe',riderscontroller.rapport_per_sexe);

  /**
 * Route pour retourner le rapport sur les clients par categorie
 *@method GET
 * @url /admin/riders/rapport_client/categorie
 */
 riders_routers.get('/rapport_client/categorie',riderscontroller.rapport_per_cat);

  /**
 * Route pour retourner le rapport sur les clients par categorie
 *@method GET
 * @url /admin/riders/top_clients/crs_terminees
 */
 riders_routers.get('/top_clients/crs_terminees',riderscontroller.get_10_top_clients);

module.exports=riders_routers