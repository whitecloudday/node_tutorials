const router = require('express').Router()
const volumeServicesController = require('../controllers/volumeServicesController')

router.get('/volume_services', volumeServicesController.getVolumeServices)

module.exports = router
