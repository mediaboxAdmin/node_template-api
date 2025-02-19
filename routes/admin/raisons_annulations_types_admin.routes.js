const express = require('express');
const raison_annulationtypecontroller = require('../../controllers/admin/raisons_annulation_types_admin.controller')
const raisonannulationtyperoutes = express.Router()

raisonannulationtyperoutes.get('/allraison_annulationtype', raison_annulationtypecontroller.findAllraisons_annulation_types)
raisonannulationtyperoutes.post('/addraison_annulationtype', raison_annulationtypecontroller.raisons_annulation_typesAdd)
raisonannulationtyperoutes.post('/deleteraison_annulationtype', raison_annulationtypecontroller.deleteItemsraisons_annulation_types)
raisonannulationtyperoutes.get('/oneraison_annulationtype/:ID_TYPE_RAISON_ANNULATION', raison_annulationtypecontroller.findOneraisons_annulation_types)
raisonannulationtyperoutes.put('/updateraison_annulationtype/:ID_TYPE_RAISON_ANNULATION', raison_annulationtypecontroller.raisons_annulation_typesUpdate)

module.exports = raisonannulationtyperoutes

