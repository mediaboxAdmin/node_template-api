const express = require('express');


const statutreservation_controler=require('../../controllers/admin/statut_reservation_admin.controller')
const statutreservation_routes=express.Router()

statutreservation_routes.get('/allstatutreservation', statutreservation_controler.findstatut_reservation)
statutreservation_routes.post('/deletestatutreservation', statutreservation_controler.deleteItemsstatutreservation)
statutreservation_routes.put('/update/:ID_STATUT_RESERVATION', statutreservation_controler.statutreservationUpdate)
statutreservation_routes.get('/findonereservationstaut/:ID_STATUT_RESERVATION', statutreservation_controler.findOnestatutreservation)

module.exports = statutreservation_routes

