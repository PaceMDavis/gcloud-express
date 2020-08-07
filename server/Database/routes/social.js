const express = require('express')
const socialController = require('../controllers/social')
const router = express.Router()

router.get('/', socialController.getAllSocial)

module.exports = router