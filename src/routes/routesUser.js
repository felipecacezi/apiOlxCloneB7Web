const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/states', UserController.getStates)

router.get('/user/me', UserController.info)
router.put('/user/me', UserController.editAction)

module.exports = router