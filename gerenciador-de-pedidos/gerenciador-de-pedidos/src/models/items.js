const mongoose = require("mongoose");

// Schema da coleção Item
const itemSchema = new mongoose.Schema({
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
