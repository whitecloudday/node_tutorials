const router = require('express').Router()
const topProductsController = require('../controllers/topProductsController')

router.get('/top_products', topProductsController.getTopProducts)

module.exports = router