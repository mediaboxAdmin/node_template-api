const express = require('express');

const rapportfinanciercontroller=require('../../controllers/admin/rapport_financier.controllers')
const rapportfinancieroutes=express.Router()


rapportfinancieroutes.get('/commission',rapportfinanciercontroller.commissionparheure)
rapportfinancieroutes.get('/rapport_mensuels',rapportfinanciercontroller.rapport_mensuels)


module.exports=rapportfinancieroutes

// /admin/rapportfinancier/montanttotalparheure