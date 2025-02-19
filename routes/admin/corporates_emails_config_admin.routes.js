const express = require('express')
const corporates_emails_config_admin_routes_controlleur =require('../../controllers/admin/corporates_emails_config.controller')
const corporates_emails_config_admin_routes = express.Router()

/**
 * Une route pour ajouter une adresse email corpo
 *@method POST
 * @url /admin/corpos_email/
 */
 corporates_emails_config_admin_routes.post('/',corporates_emails_config_admin_routes_controlleur.createEmailCorpo)

 /**
 * Une route pour lister toutes les adresses email
 *@method GET
 * @url /admin/corpos_email/
 */
 corporates_emails_config_admin_routes.get('/',corporates_emails_config_admin_routes_controlleur.findAll)
 

  /**
 * Une route pour recuperer un email corpo
 *@method GET
 * @url /admin/corpos_email/
 */
 corporates_emails_config_admin_routes.get('/:ID_EMAIL_CONFIG',corporates_emails_config_admin_routes_controlleur.findEmailCorpoById)

/**
 * Une route pour supprimer les emails corpo
 *@method POST
 * @url /admin/corpos_email/delete
 */
 corporates_emails_config_admin_routes.post('/delete',corporates_emails_config_admin_routes_controlleur.deleteItems)

  /**
 * Une route pour modifier un email corpo
 *@method PUT
 * @url /admin/corpos_email/
 */
 corporates_emails_config_admin_routes.put("/:ID_EMAIL_CONFIG",corporates_emails_config_admin_routes_controlleur.editEmailCorpo)



module.exports = corporates_emails_config_admin_routes