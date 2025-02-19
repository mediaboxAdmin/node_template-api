const express = require('express');
const coursetypecontroller=require('../../controllers/admin/coursetype_admin.controller')
const coursetyperoutes=express.Router()


coursetyperoutes.get('/alltypecourse',coursetypecontroller.findAllcoursetype)
coursetyperoutes.post('/typecourseadd',coursetypecontroller.coursetypeAdd)
coursetyperoutes.post('/deletetypecourse',coursetypecontroller.deleteItemstypecourse)
coursetyperoutes.get('/onetypecourse/:ID_COURSE_TYPE',coursetypecontroller.findOnetypevehicule)
coursetyperoutes.put('/typecourseupdate/:ID_COURSE_TYPE',coursetypecontroller.coursetypeUpdate)

module.exports = coursetyperoutes
