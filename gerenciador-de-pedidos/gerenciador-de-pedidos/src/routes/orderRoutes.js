const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");



router.post("/order", orderController.createOrder);


router.get("/:orderId", orderController.getOrderById);

router.get("/order/list", orderController.listOrders);


router.delete("/:orderId", orderController.deleteOrder);


module.exports = router;
