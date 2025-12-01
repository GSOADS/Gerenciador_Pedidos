const mongoose = require("mongoose");

// Schema da coleção Item
const itemSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  productId: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Criando o model
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
