const { hashPassword } = require("../helpers/authHelper");
const deliveryAgentModel = require("../models/deliveryAgentModel");

exports.registerDeliveryAgentController = async (req, res) => {
  try {
    const { name, email, password, phone, cityCenter } = req.body;
    const mobile = await deliveryAgentModel.findOne({ phone });

    if (mobile) {
      return res.status(409).json({
        success: false,
        message: "Delivery Agent Already Exists Please Login",
      });
    }
    const hashedPassword = await hashPassword(password);
    const deliveryAgent = await new deliveryAgentModel({
      name: name,
      password: hashedPassword,
      phone: phone,
      email: email,
      cityCenter: cityCenter,
    });
    res.status(201).json({
      success: true,
      message: "Delivery Agent Registered Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server error in Registration",
    });
  }
};
