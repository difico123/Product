const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController.js')

router.get('/', productController.show);

module.exports = router;