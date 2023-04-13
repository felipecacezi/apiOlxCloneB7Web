const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

const Auth = require('../middlewares/Auth')

router.get('/states', Auth.private, UserController.getStates)

router.get('/user/me', Auth.private, UserController.info)
router.put('/user/me', Auth.private, UserController.editAction)

module.exports = router