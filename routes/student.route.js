const express = require ('express')
const router = express.Router()
const studentController = require('../controllers/student.controllers')

router.post('./', studentController.store)

module.exports = router