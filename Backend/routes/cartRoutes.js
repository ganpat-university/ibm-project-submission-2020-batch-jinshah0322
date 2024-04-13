const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/add-to-cart', cartController.addToCart);
router.get('/:userId', cartController.getCart);

module.exports = router;