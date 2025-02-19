const express = require('express');
const histoAppelcontroller=require('../../controllers/admin/historique_appel.admin.controller')
const histoAppelroutes=express.Router()


histoAppelroutes.get('/',histoAppelcontroller.findHistorique)

histoAppelroutes.post('/',histoAppelcontroller.sendHistoriCall)


module.exports = histoAppelroutes
