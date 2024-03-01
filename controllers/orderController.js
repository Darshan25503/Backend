const Order = require("../models/orderModel");
const CityCenter = require("../models/CityCenterModel");
const Company = require("../models/companyModel");
const addressModel = require("../models/addressModel");

//palce order controller
exports.placeOrderController = async (req, res) => {
  try {
    const { userId, companyId, sourceId, destinationId, status, items } =
      req.body;

    // Calculate totalWeight from items
    const totalWeight = items.reduce((acc, item) => acc + item.weight, 0);
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company Not found",
      });
    }

    // Get city center ID from source pincode
    const totalPrice = totalWeight * company.price;
    // Create the order object
    const order = new Order({
      userId,
      companyId,
      sourceId,
      destinationId,
      status: status || "Placed",
      orderedAt: new Date(),
      price: totalPrice,
      items,
      totalWeight,
    });

    // Save the order to the database
    await order.save();

    res.status(201).json({
      success: true,
      message: "Order initialized successfully",
      order,
    });
  } catch (error) {
    console.error("Error initializing order:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// fetching single order

exports.fetchSingleOrderController = async (req, res) => {
  try {
    const { id } = req.params;
    const O = await Order.findById(id);
    if (!O) {
      return res.status(404).json({
        success: false,
        message: "No order found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Order Found",
      O,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error in fetching category",
    });
  }
};

//Fetching all orders of a company

exports.fetchAllOrdersOfCompany = async (req, res) => {
  try {
    const { cid } = req.params;
    const allCompanyOrders = await Order.find({ companyId: cid });

    res.status(200).json({
      success: true,
      message: "Orders Found",
      allCompanyOrders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error in fetching orders of a company",
    });
  }
};

//fetch all orders controller

exports.fetchAllOrdersController = async (req, res) => {
  try {
    const AllOrders = await Order.find();
    res.status(200).json({
      success: true,
      message: "Orders Fetched",
      AllOrders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error in fetching orders",
    });
  }
};

//fetching all orders of a citycenter of a particular company

exports.fetchOrderDestinationController = async (req, res) => {
  try {
    const { did } = req.params;
    const destinationOrders = await Order.find({ destinationId: did });
    res.status(200).json({
      success: true,
      message: "Orders Fetched",
      destinationOrders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error in fetching orders",
    });
  }
};

//city center order contorller

exports.cityCenterOrderController = async (req, res) => {
  try {
    const { ccid } = req.params;
    const orders = await Order.find({ "reached.centerId": ccid });
    res.status(200).json({
      success: true,
      message: "Orders Fetched Successfully",
      orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error in fetching orders",
    });
  }
};
