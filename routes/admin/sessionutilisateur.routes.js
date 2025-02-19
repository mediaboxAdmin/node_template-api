const express = require('express')

const sessionutilisateur_controller=require('../../controllers/admin/session_utilisateur_admin.controller')
const sessionutilisateur_routes=express.Router()

sessionutilisateur_routes.get('/allsessionutilisateur',sessionutilisateur_controller.findAllsessionutilisateurs)
sessionutilisateur_routes.put('/changestatututilisateur/:ID_UTILISATEUR_TOKEN',sessionutilisateur_controller.change_status)
sessionutilisateur_routes.get('/allutilisateur',sessionutilisateur_controller.utilisateurall)
sessionutilisateur_routes.post('/deletesessionutilisateur',sessionutilisateur_controller.deleteItems)


module.exports = sessionutilisateur_routes

