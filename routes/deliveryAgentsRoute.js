const express = require("express");
const {
  registerDeliveryAgentController,
} = require("../controllers/deliveryAgentsController");

const router = express.Router();

//register delivery agents POST

router.post("/register", registerDeliveryAgentController);

module.exports = router;
