const express = require('express');
const Order = require('../models/orderModel');

const router = express.Router();

// Create a new order
router.post('/create-order', async (req, res) => {
    const { userId, products, totalAmount } = req.body;
    try {
        const estimatedDelivery = new Date();
        estimatedDelivery.setDate(estimatedDelivery.getDate() + 7); // 7 days from now

        const newOrder = new Order({ userId, products, totalAmount, estimatedDelivery });
        await newOrder.save();
        res.status(201).json({ message: 'Order created successfully', estimatedDelivery });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
});

module.exports = router;

