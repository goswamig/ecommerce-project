const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, quantity: { type: Number, default: 1 } }],
    totalAmount: { type: Number, required: true },
    estimatedDelivery: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);

