const express = require('express')
const router = express.Router()
const AdsController = require('../controllers/AdsController')
const Auth = require('../middlewares/Auth')

router.get('/categories', AdsController.getCategories)

router.get('/ad/add', Auth.private, AdsController.addAction)
router.get('/ad/list', AdsController.getList)
router.get('/ad/item', AdsController.getItem)
router.post('/ad/:id', Auth.private, AdsController.editAction)


module.exports = router