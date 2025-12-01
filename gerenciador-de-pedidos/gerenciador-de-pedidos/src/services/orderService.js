const Order = require("../models/order");
const Item = require("../models/items");

async function createOrder(orderData, itemsData) {
  // Cria o pedido
  const order = new Order(orderData);
  await order.save();

  // Cria os itens vinculados ao pedido
  const items = itemsData.map(item => ({
    ...item,
    orderId: order.orderId
  }));

  await Item.insertMany(items);

  return { order, items };
}

module.exports = { createOrder };
