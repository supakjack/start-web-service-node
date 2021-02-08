const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo.controller')

router.get('/', todoController.select)
router.post('/', todoController.insert)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.delete)

module.exports = router
