const express = require('express');
const songController = require('../controller/songController');
const router = express.Router();




router.get('/', songController.list)
router.get('/:id', songController.list)







module.exports = router