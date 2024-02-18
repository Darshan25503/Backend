const mongoose = require("mongoose");

const CityCenterSchema = new mongoose.Schema({
  company: {
    type: mongoose.ObjectId,
    ref: "company",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  deliveryAgentsID: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("cityCenter", CityCenterSchema);
