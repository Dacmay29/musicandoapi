const express = require('express');
const genreController = require('../controller/genreController');
const router = express.Router();


router.get('/', genreController.list)


module.exports = router