const express = require('express');
const dashboardcontroller=require('../../controllers/admin/dashbord.controllers')

const dashboardroutes=express.Router()
dashboardroutes.get('/coursetermine',dashboardcontroller.course_termine)
dashboardroutes.get('/totalcoursetermine',dashboardcontroller.totalmonntant)
dashboardroutes.get('/commision',dashboardcontroller.commission)
dashboardroutes.get('/drivercounter',dashboardcontroller.Driverenligne)
dashboardroutes.get('/totalcoursedemande',dashboardcontroller.coursedemande)
dashboardroutes.get('/total',dashboardcontroller.Totalcoursedemande)
dashboardroutes.get('/totalparheure',dashboardcontroller.totalcourseparheure)
dashboardroutes.get('/totalcoursepardates', dashboardcontroller.totalcoursepardates)
dashboardroutes.get('/totalcourseannuler',dashboardcontroller.coursannullertotal)
dashboardroutes.get('/coursetype',dashboardcontroller.courseType)
dashboardroutes.get('/listecoursetermineparheure',dashboardcontroller.findAllcoursetermine)
dashboardroutes.get('/listecourseannulerparheure',dashboardcontroller.findAllcoursannuler)
dashboardroutes.get('/rapportCoursepartenaire',dashboardcontroller.rapportparcorporate)
dashboardroutes.get('/fivecorporate',dashboardcontroller.getfivecorporate)
dashboardroutes.put('/desactivationDrivershorsligne',dashboardcontroller.DeactiveDrivershorsligne)
dashboardroutes.get('/driverslignehorlignedesactive',dashboardcontroller.Driverslinehorlinedescative)
dashboardroutes.get('/rapportactiviteDrivers',dashboardcontroller.rapportactiviteschauffeurs)
dashboardroutes.get('/rapportmodecourse',dashboardcontroller.rapportnombrecourseparmode)

 /**
 * Route pour retourner la duree des trajets d'un corpo
 *@method GET
 * @url /admin/dashbord/duree_trajets
 */
 dashboardroutes.get('/duree_trajets',dashboardcontroller.corpo_duree_crs);

  /**
 * Route permet de faire les rapport sur les ctrajets d'un corpo x pour une periode donnee
 *@method GET
 * @url /admin/dashbord/rapport_corpo
 */
 dashboardroutes.get('/rapport_corpo',dashboardcontroller.rapport_corpo_per_period);

 /**
 * Route permet de faire le rapport sur les courses finies des client d'un corpo
 *@method GET
 * @url /admin/dashbord/corpo_chart_per_rider_nbr_crs
 */
 dashboardroutes.get('/corpo_chart_per_rider_nbr_crs',dashboardcontroller.client_corpo_rapport_nbr_crs);

/**
 * Route permet de faire le rapport sur les montants des courses finies des client d'un corpo
 *@method GET
 * @url /admin/dashbord/corpo_cli_chart_per_montant
 */
 dashboardroutes.get('/corpo_cli_chart_per_montant',dashboardcontroller.client_corpo_rapport_montant_crs);

/**
 * Route permet de faire le rapport sur les montants des courses finies des client d'un corpo
 *@method GET
 * @url /admin/dashbord/corpo_end_crs_nbr
 */
 dashboardroutes.get('/corpo_end_crs_nbr',dashboardcontroller.corpo_nbr_crs_termine);

/**
 * Route permet de faire la sme des montant des courses du corpo
 *@method GET
 * @url /admin/dashbord/cout_for_routes
 */
 dashboardroutes.get('/cout_for_routes',dashboardcontroller.coutForCourses);

/**
 * Route permet de faire la sme des montant des courses du corpo
 *@method GET
 * @url /admin/dashbord/rapport_corpo_per_min
 */
 dashboardroutes.get('/rapport_corpo_per_min',dashboardcontroller.rapport_corpoMinCrs_per_period);

 /**
 * Route permet de faire la sme des montant des courses du corpo
 *@method GET
 * @url /admin/dashbord/rapport_corpo_creneau_horaire
 */
 dashboardroutes.get('/rapport_corpo_creneau_horaire',dashboardcontroller.rapport_corpo_creneau_horaire);

  /**
 * Permet de faire les rapport par mode sur les trajets d'un corpo x pour une periode donnee
 *@method GET
 * @url /admin/dashbord/rapport_corpo_per_mode
 */
 dashboardroutes.get('/rapport_corpo_per_mode',dashboardcontroller.rapport_corpo_mode_crs);

 /**
 * Route pour retourner les chauffeurs groupes par le nombre des trajets
 *@method GET
 * @url /admin/dashbord/drivers_by_nbr_trajets
 */
 dashboardroutes.get('/drivers_by_nbr_trajets',dashboardcontroller.allDriverOrderByTrajets);

  /**
 * Route pour retourner les rapports par type d'incident
 *@method GET
 * @url /admin/dashbord/chart_per_incident_typ
 */
 dashboardroutes.get('/chart_per_incident_typ',dashboardcontroller.type_incidents_rapport);

 /**
 * Route pour retourner les rapports par departement
 *@method GET
 * @url /admin/dashbord/chart_per_dprtmt
 */
 dashboardroutes.get('/chart_per_dprtmt',dashboardcontroller.get_rapport_per_dprtmt);

 /**
 * Route pour retourner les rapports par departement montant
 *@method GET
 * @url /admin/dashbord/chart_per_dprtmt_montant
 */
 dashboardroutes.get('/chart_per_dprtmt_montant',dashboardcontroller.get_rapport_per_dprtmtMontant);

  /**
 * Route permet de faire le rapport sur les courses finies des demandeur d'un corpo
 *@method GET
 * @url /admin/dashbord/corpo_chart_per_dmdeur_nbr_crs
 */
 dashboardroutes.get('/corpo_chart_per_dmdeur_nbr_crs',dashboardcontroller.dmdeur_corpo_rapport_nbr_crs);

 /**
 * Route permet de faire le rapport sur les montants des courses finies des demandeurs d'un corpo
 *@method GET
 * @url /admin/dashbord/corpo_dmdeur_chart_per_montant
 */
 dashboardroutes.get('/corpo_dmdeur_chart_per_montant',dashboardcontroller.dmdeur_corpo_rapport_montant_crs);

 /**
 * Route Permet de faire les rapport sur les KM des trajets d'un corpo x pour une periode donnee
 *@method GET
 * @url /admin/dashbord/rapport_corpo_per_km
 */
 dashboardroutes.get('/rapport_corpo_per_km',dashboardcontroller.rapport_corpoKmCrs_per_period);



module.exports=dashboardroutes
// adminRouter.use('/dashbord/desactivationDrivershorsligne', requireAuth, dashboardroutes)
