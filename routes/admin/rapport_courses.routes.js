const express = require('express');

const rapport_courses_controller=require('../../controllers/admin/rapport_courses.controllers')
const rapport_courses_routes=express.Router()

rapport_courses_routes.get('/rapportcourse',rapport_courses_controller.rapportcourses)
rapport_courses_routes.get('/fetchcoursedemande',rapport_courses_controller.findAllcoursedemande)

module.exports=rapport_courses_routes

// /admin/rapportcourse/rapportcourse
// /admin/rapportcourse/fetchcoursedemande