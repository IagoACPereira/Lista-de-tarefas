const express = require('express')
const Controller = require('../controllers/index.js')

const router = express.Router()

router.get('/', Controller.inicio)

module.exports = router