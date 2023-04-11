const express = require('express')
const router = express.Router()
const AdsController = require('../controllers/AdsController')

router.get('/categories', AdsController.getCategories)

router.get('/ad/add', AdsController.addAction)
router.get('/ad/list', AdsController.getList)
router.get('/ad/item', AdsController.getItem)
router.post('/ad/:id', AdsController.editAction)


module.exports = router