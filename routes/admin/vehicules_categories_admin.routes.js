const express = require('express')
const vehicules_categories_routes_controlleur = require('../../controllers/admin/vehicules_categories_admin.controller')
const vehicules_cat_routes = express.Router()



 /**
 * Une route pour lister les categories des vehicules
 *@method GET
 * @url /admin/vehicules_categorie/
 */
 vehicules_cat_routes.get('/',vehicules_categories_routes_controlleur.findAll)

  /**
 * Une route pour lister les modeles des vehicules par cat
 *@method GET
 * @url /admin/vehicules_categorie/find_by_cat/4
 */
 vehicules_cat_routes.get('/find_by_cat/:ID_VEHICULE_CATEGORY',vehicules_categories_routes_controlleur.findModelByCat)

  /**
 * Une route pour creer la categorie de vehicule
 *@method POST
 * @url /admin/vehicules_categorie/
 */
 vehicules_cat_routes.post('/',vehicules_categories_routes_controlleur.createVehiculeCategorie)

  /**
 * Une route pour lister les modeles de vehicules
 *@method GET
 * @url /admin/vehicules_categorie/modele/4
 */
 vehicules_cat_routes.get('/modele/:NBRE_PLACE',vehicules_categories_routes_controlleur.findAllModeleVehicule)

  /**
 * Une route pour lister une permanence
 *@method GET
 * @url /admin/vehicules_categorie/1
 */
 vehicules_cat_routes.get('/:ID_VEHICULE_CATEGORY',vehicules_categories_routes_controlleur.findCatVehiculeById),

 /**
 * Une route pour supprimer les permanences
 *@method POST
 * @url /admin/vehicules_categorie/delete
 */
 vehicules_cat_routes.post('/delete',vehicules_categories_routes_controlleur.deleteItems),

   /**
 * Une route pour modifier une categorie
 *@method PUT
 * @url /admin/vehicules_categorie/1
 */
 vehicules_cat_routes.put('/:ID_VEHICULE_CATEGORY',vehicules_categories_routes_controlleur.editCategorie),



module.exports = vehicules_cat_routes