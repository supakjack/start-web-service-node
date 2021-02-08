const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index.controller')

router.get('/:name/:firstName', indexController.get)
router.post('/', indexController.post)
router.put('/', indexController.put)
router.delete('/', indexController.delete)

module.exports = router
