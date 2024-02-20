const express = require("express");
const {
  placeOrderController,
  fetchSingleOrderController,
  fetchAllOrdersOfCompany,
  fetchAllOrdersController,
  fetchOrderDestinationController,
} = require("../controllers/orderController");

const router = express.Router();

//Place order
router.post("/place-order", placeOrderController);

//Fetch single product
router.get("/fetchOrder/:id", fetchSingleOrderController);

//fetch all products of a single
router.get("/fetchcompanyorders/:cid", fetchAllOrdersOfCompany);

//fetch all orders
router.get("/fetchallorders", fetchAllOrdersController);

//fetch orders by destination
router.get("/fetchorderdest/:did", fetchOrderDestinationController);

module.exports = router;
