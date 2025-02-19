const express = require('express')
const utilisateur_routes_controller =require('../../controllers/admin/utilisateurs_admin.controller')
const utilisateur_routes = express.Router()

/**
 * Une route pour insert un utilisateur
 *@method POST
 * @url /admin/utilisateurs/
 */
 utilisateur_routes.post('/',utilisateur_routes_controller.createUtilisateur)


 /**
 * Une route pour lister tous  les utilisateur
 *@method GET
 * @url /admin/utilisateurs/
 */
 utilisateur_routes.get('/',utilisateur_routes_controller.findAll)

  /**
 * Une route pour editer un utilisateur
 *@method GET
 * @url /admin/utilisateurs/
 */
 utilisateur_routes.get('/:ID_UTILISATEUR',utilisateur_routes_controller.findUserById)

/**
 * Une route pour supprimer un utilisateur
 *@method POST
 * @url /admin/utilisateurs/
 */
 utilisateur_routes.post('/delete',utilisateur_routes_controller.deleteItems)

   /**
 * Une route pour changer mot de passe d'un utilisateur
 *@method PUT
 * @url /admin/utilisateurs/changePwd
 */
 utilisateur_routes.put("/changePwd",utilisateur_routes_controller.changePWD)

  /**
 * Une route pour modifier un utlisateur
 *@method PUT
 * @url /admin/utilisateurs/
 */
 utilisateur_routes.put("/:ID_UTILISATEUR",utilisateur_routes_controller.updateUser)


   /**
 * Une route pour changer un statut d'un utilisateur
 *@method PUT
 * @url /admin/utilisateurs/change_statuts/:ID_UTILISATEUR
 */
 utilisateur_routes.put("/change_statuts/:ID_UTILISATEUR",utilisateur_routes_controller.change_status)


  /**
 * Une route pour lister les roles d'un utilisateur
 *@method GET
 * @url /admin/utilisateurs/find_roles_user/1
 */
 utilisateur_routes.get('/find_roles_user/:ID_UTILISATEUR',utilisateur_routes_controller.findAllRoleByIdUtil),

  /**
 * Une route pour lister tous  les activity logs
 *@method GET
 * @url /admin/utilisateurs/activity_logs/all
 */
 utilisateur_routes.get('/activity_logs/all',utilisateur_routes_controller.findAllActivityLogs)

   /**
 * Une route pour lister tous  les types activity logs
 *@method GET
 * @url /admin/utilisateurs/alltypesactivity_logs/all
 */
 utilisateur_routes.get('/alltypesactivity_logs/all',utilisateur_routes_controller.findTypesactivities)


module.exports = utilisateur_routes