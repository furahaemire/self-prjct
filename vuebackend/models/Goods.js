const mongoose = require('mongoose');

// Goods Schema
const GoodsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, default: 1 }, // Default quantity is 1
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Goods', GoodsSchema);
