const express = require('express');
const payscontroller= require('../../controllers/admin/countries_admin.controller')


const paysroutes=express.Router();

paysroutes.get('/',payscontroller.findAll)

module.exports = paysroutes
