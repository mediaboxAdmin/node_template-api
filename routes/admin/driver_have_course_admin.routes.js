const express = require('express')

const driver_have_course_controller = require('../../controllers/admin/driver_have_courses_admin_controller')
const driver_have_courses_routes = express.Router()


/**
* Une route pour faire la  liste des drivers have a courses
*@method GET
* @url /admin/driver_have_course/findAll
*/
driver_have_courses_routes.get('/findAll', driver_have_course_controller.findAll)
module.exports = driver_have_courses_routes