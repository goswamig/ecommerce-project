const express = require('express');
const Cart = require('../models/cartModel');

const router = express.Router();

// Add product to cart
router.post('/add-to-cart', async (req, res) => {
    const { userId, productId } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, products: [{ productId }] });
        } else {
            const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
            if (productIndex > -1) {
                cart.products[productIndex].quantity += 1;
            } else {
                cart.products.push({ productId });
            }
        }
        await cart.save();
        res.status(200).json({ message: 'Product added to cart' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding to cart', error });
    }
});

module.exports = router;

