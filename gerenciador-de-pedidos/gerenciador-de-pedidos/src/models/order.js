const mongoose = require("mongoose");

// Schema da coleção Order
const orderSchema = new mongoose.Schema({
  orderId: {
    type: Number,
    required: true,
    unique: true
  },
  value: {
    type: Number,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

// Criando o model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

