const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const AuthValidator = require('../validators/AuthValidator')

router.get('/user/signin', AuthController.signIn)
router.post('/user/signup', AuthValidator.signup ,AuthController.signUp)

module.exports = router