const express = require('express');
const promotion_target_types_controler=require('../../controllers/admin/promotion_target_types.controller')
const promotion_target_types_routes=express.Router()

promotion_target_types_routes.get('/all', promotion_target_types_controler.findAll)
promotion_target_types_routes.put('/update/:ID_TARGET_TYPE', promotion_target_types_controler.updatepromotiontypetarget)
promotion_target_types_routes.get('/findone/:ID_TARGET_TYPE', promotion_target_types_controler.findOnepromotiontargettype)

module.exports = promotion_target_types_routes