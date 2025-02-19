const express = require('express');
const vehiculecontroller= require('../../controllers/admin/vehicule_admin.controller')


const vehiroutes=express.Router();

vehiroutes.get('/allvehicule',vehiculecontroller.findAllvehicule)
vehiroutes.post('/vehiculAdd',vehiculecontroller.vehiculeAdd)
vehiroutes.post('/deletevehicule',vehiculecontroller.deleteItemsvehicule)
vehiroutes.get('/onevehicule/:ID_VEHICULE',vehiculecontroller.findOnevehicule)
vehiroutes.put('/vehiculeupdate/:ID_VEHICULE',vehiculecontroller.vehiculeUpdate)
vehiroutes.get('/alldrivers',vehiculecontroller.listedrivers)
vehiroutes.put('/desaffecter/:ID_VEHICULE',vehiculecontroller.Desaffectation)
vehiroutes.put('/affecter/:ID_VEHICULE',vehiculecontroller.Affecter)
vehiroutes.get('/marquevehicule',vehiculecontroller.findAllmarque)
vehiroutes.get('/modelevehicule/:ID_MARQUE',vehiculecontroller.findAllmodele)
vehiroutes.put('/addTauxCommission', vehiculecontroller.addTauxCommission)

 /**
 * Une route pour le nombre de vehicule dont les documents sont expirés
 *@method GET
 * @url /admin/vehicule/count_expired_doc
 */
 vehiroutes.get('/count_expired_doc',vehiculecontroller.countVehiculeExpirationDoc)


module.exports = vehiroutes
