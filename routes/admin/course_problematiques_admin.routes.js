const express = require('express');
const course_problematique_controller=require('../../controllers/admin/course_problematiques_admin_controller')
const courseproblematiques_routes=express.Router()

courseproblematiques_routes.get('/allliste', course_problematique_controller.findAll)
courseproblematiques_routes.post('/delete', course_problematique_controller.deleteCourseproblematique)
courseproblematiques_routes.put('/update/:ID_COURSE_PROBLEMATIQUE', course_problematique_controller.updateelement)
courseproblematiques_routes.get('/findone/:ID_COURSE_PROBLEMATIQUE', course_problematique_controller.findOne)
courseproblematiques_routes.post('/create', course_problematique_controller.createcourseproblematique)

module.exports = courseproblematiques_routes

// /admin/courseproblematique/allliste
// /admin/courseproblematique/delete
// /admin/courseproblematique/update/
// /admin/courseproblematique/findone/

// /admin/courseproblematique/create

