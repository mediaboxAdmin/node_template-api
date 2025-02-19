const express = require('express')

const course_admin_controller = require('../../controllers/admin/corporates_admin.controller')

const course_routes_controller = require('../../controllers/admin/course_admin.controller')
const course_routes = express.Router()


/**
* Une route pour faire la  liste des courses
*@method GET
* @url /admin/findAll
*/
course_routes.get('/findAll', course_routes_controller.findAll)

/**
* Une route pour retourner l'historique de demande de drivers sur une course
*@method GET
* @url /admin/courses/historyModify
*/
course_routes.get('/historyModify', course_routes_controller.findHistoryModify)

//  findOnlyCorporate

/**
 * Hafidhati <hafidhati@mediabox.bi>
 * 27/02/2024
 * Une route pour faire la  liste des corporates
 *@method GET
 * @url /admin/courses/findOnlyCorp
 */
course_routes.get('/findOnlyCorp', course_routes_controller.findOnlyCorporate)
/**
* Une route pour faire la  selection des courses types
*@method GET
* @url /admin/findtypecourse
*/
course_routes.get('/findtypecourse', course_routes_controller.findTypeCourse)

course_routes.get('/findAllMessage/:ID_COURSE', course_routes_controller.findAllMessage)

/**
* Une route pour faire la  selection des courses types
*@method GET
* @url /admin/findtypecourse
*/
course_routes.get('/Countcourses/:ID_STATUT', course_routes_controller.countCourse)

/**
* Une route pour faire la  selection des corporates
*@method GET
* @url /admin/findcorporate
*/
course_routes.get('/findcorporate', course_routes_controller.findcorporate)

/**
* Une route pour faire la  selection des clients
*@method GET
* @url /admin/courses/findrider
*/
course_routes.get('/findrider', course_routes_controller.findrider)

/**
* Une route pour faire la  selection des clients
*@method GET
* @url /admin/courses/find_clients
*/
course_routes.get('/find_clients', course_routes_controller.findClient)

/** 
* Une route pour faire la  selection des  client  beneficiaires selon le corporate selectionner
*@method GET
* @url /admin/findriderbeneficaire/:ID_CORP_CORPORATE
*/
course_routes.get('/findriderbeneficaire/:ID_CORP_CORPORATE', course_routes_controller.findriderbeneficaire)

/**
* Une route pour faire la  selection des  clients demandeur d'une corporate
*@method GET
* @url /admin/findriderdemandeur/:ID_CORP_CORPORATE
*/
course_routes.get('/findriderdemandeur/:ID_CORP_CORPORATE', course_routes_controller.findriderdemandeur)
/**
* Une route pour faire la  selection des chauffeurs
*@method GET
* @url /admin/finddriver
*/
course_routes.get('/finddriver', course_routes_controller.finddriver)
/**
* Une route pour faire la  selection des vehicules
*@method GET
* @url /admin/findvehicule
*/
course_routes.get('/findvehicule/:ID_DRIVER', course_routes_controller.findvehicule)
/**
* Une route pour modifier la course
*@method PUT
* @url /admin/updateCourse/:Id_course
*/
course_routes.put('/updateCourse/:ID_COURSE', course_routes_controller.updateCourse)


/**
* Une route pour modifier le prix
*@method PUT
* @url /admin/updatePrice/:Id_course
*/
course_routes.put('/updatePrice/:ID_COURSE', course_routes_controller.updatePrice)


/**
* Une route pour modifier le status
*@method PUT
adminRouter.use('/courses', course_routes)
* @url /admin/courses/updateTraiter/:Id_course   
*/
course_routes.put('/updateTraiter/:ID_COURSE', course_routes_controller.updateTraiter)
/**
* Une route pour terminer la course
*@method PUT
* @url /admin/terminer/:Id_course
*/
course_routes.put('/terminer/:ID_COURSE', course_routes_controller.terminerCourse)
/**
* Une route pour confirmer la course
*@method PUT
* @url /admin/confirmCourse/:Id_course
*/
course_routes.put('/confirmCourse/:ID_COURSE', course_routes_controller.confirmcourse)
/**
* Une route pour annuler  la course
*@method PUT
* @url /admin/annuler/:ID_COURSE
*/
course_routes.put('/annuler/:ID_COURSE', course_routes_controller.annulerCourse)

/**
* Une route qui amener l'historique de la course
*@method GET
* @url /admin/detailCourse/:ID_COURSE
*/
course_routes.get('/detailCourse/:ID_COURSE', course_routes_controller.historiqueStatut)


/**
* Une route pour faire la total
*@method GET
* @url /admin/findSumMontant
* 
*  */
course_routes.get('/findSumMontant', course_routes_controller.findSumMount)
course_routes.get('/getCousrsePerHour', course_routes_controller.getCousrsePerHour)

/**
* Une route pour faire la detail des courses
*@method GET
* @url /admin/corporates/findAll
*/
course_routes.get('/:id', course_routes_controller.getOneDetail)


/**
* Une route pour faire la detail de la facturation
*@method GET
* @url /admin/courses/getOneFacturation/:ID_COURSE
*/
course_routes.get('/getOneFacturation/:ID_COURSE', course_routes_controller.getOneFacturation)
/**
* Une route pour verifier que le corporate est fixee ou pas
*@method GET
* @url /admin/checkfixed/:ID_CORPORATE
*/
course_routes.get('/checkfixed/:ID_CORPORATE', course_routes_controller.checkfixed)

/**
* Une route pour retourner l'historique de demande de drivers sur une course
*@method GET
* @url /admin/courses/get_details_dmd_driver/:ID_COURSE
*/
course_routes.get('/get_details_dmd_driver/:ID_COURSE', course_routes_controller.historiqueDemandeDriver)

/**
 * Une route pour supprimer  les course 
 *@method POST
 * @url /admin/course/delete
 */
course_routes.post('/delete', course_routes_controller.deletecourse)

course_routes.get("/get/motif_modifications_trajets", course_routes_controller.getMotifModification)

  /**
 * Route pour retourner les trajets par beneficiaire
 *@method GET
 * @url /admin/courses/beneficiaire/routes
 */
 course_routes.get('/beneficiaire/routes',course_routes_controller.findCrsPerBeneficiaire);




module.exports = course_routes