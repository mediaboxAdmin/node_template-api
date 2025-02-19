const express = require('express')
const admin_emails_config_admin_routes_controlleur =require('../../controllers/admin/admin_emails_config.controller')
const admin_emails_config_admin_routes = express.Router()

/**
 * Une route pour ajouter une adresse email admin
 *@method POST
 * @url /admin/admin_emails/
 */
 admin_emails_config_admin_routes.post('/',admin_emails_config_admin_routes_controlleur.createEmailAdmin)

 /**
 * Une route pour lister toutes les adresses email
 *@method GET
 * @url /admin/admin_emails/
 */
 admin_emails_config_admin_routes.get('/',admin_emails_config_admin_routes_controlleur.findAll)
 

  /**
 * Une route pour recuperer un email admin
 *@method GET
 * @url /admin/admin_emails/
 */
 admin_emails_config_admin_routes.get('/:ID_EMAIL_CONFIG',admin_emails_config_admin_routes_controlleur.findEmailAdminById)

/**
 * Une route pour supprimer les emails admin
 *@method POST
 * @url /admin/admin_emails/delete
 */
 admin_emails_config_admin_routes.post('/delete',admin_emails_config_admin_routes_controlleur.deleteItems)

  /**
 * Une route pour modifier un email admin
 *@method PUT
 * @url /admin/admin_emails/
 */
 admin_emails_config_admin_routes.put("/:ID_EMAIL_CONFIG",admin_emails_config_admin_routes_controlleur.editEmailAdmin)



module.exports = admin_emails_config_admin_routes