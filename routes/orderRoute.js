const express = require("express");
const {
  placeOrderController,
  fetchSingleOrderController,
  fetchAllOrdersOfCompany,
  fetchAllOrdersController,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/place-order", placeOrderController);
//Fetch single product

router.get("/fetchOrder/:id", fetchSingleOrderController);

//fetch all products of a single
router.get("/fetchcompanyorders/:cid", fetchAllOrdersOfCompany);

//fetch all orders
router.get("/fetchallorders", fetchAllOrdersController);

module.exports = router;
