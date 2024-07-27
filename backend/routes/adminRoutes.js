const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// Add a new product
router.post('/add-product', async (req, res) => {
    const { name, category, price, description } = req.body;
    try {
        const newProduct = new Product({ name, category, price, description });
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }
});

module.exports = router;

