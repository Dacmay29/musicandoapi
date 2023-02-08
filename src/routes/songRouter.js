const express = require('express');
const songController = require('../controller/songController');
const router = express.Router();




router.get('/', songController.list)
router.post('/', songController.create)
router.get('/:id', songController.detail)
router.put('/:id', songController.edit)
router.delete('/:id', songController.delete)



module.exports = router