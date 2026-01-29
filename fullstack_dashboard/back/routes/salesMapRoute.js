const router = require('express').Router()
const salesMapController = require('../controllers/salesMapController')

router.get('/sales_map', salesMapController.getSalesMap)
module.exports = router