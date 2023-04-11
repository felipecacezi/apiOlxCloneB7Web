const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

router.get('/user/signin', AuthController.signIn)
router.get('/user/signup', AuthController.signUp)

module.exports = router