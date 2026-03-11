
const express = require('express')
const router = express.Router()
const studentController = require('../controllers/student.controllers')

router.get('/', studentController.index)
router.get('/:id', studentController.detail)
router.post('/', studentController.store)
router.put('/:id', studentController.update)
router.delete('/:id', studentController.destroy)

module.exports = router