const express = require('express')
const spotsController = require('../controllers/spots')
const router = express.Router()

router.get('/', spotsController.getAllSpots)
router.get('/:id', spotsController.getSpotById)
router.post('/', spotsController.createSpot)
// router.put('/:id', spotsController.updateSpotById)
// router.delete('/:name', spotsController.deleteSpotByName)


module.exports = router