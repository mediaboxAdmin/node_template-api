const express = require('express');

const coursestatutdemandedriver_controller=require('../../controllers/admin/course_demande_statut_admin.controller')
const coursestatutdemandedriver_routes=express.Router()

coursestatutdemandedriver_routes.get('/allliste', coursestatutdemandedriver_controller.findAllcoursestatutdemandedriver)
coursestatutdemandedriver_routes.post('/delete', coursestatutdemandedriver_controller.deleteItemsstatutcoursedemandedriver)
coursestatutdemandedriver_routes.put('/update/:ID_DEMANDE_STATUT', coursestatutdemandedriver_controller.coursedemandestatutUpdate)
coursestatutdemandedriver_routes.get('/findone/:ID_DEMANDE_STATUT', coursestatutdemandedriver_controller.findOnecoursedriverdemandestatut)

module.exports = coursestatutdemandedriver_routes

