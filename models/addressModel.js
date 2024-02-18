const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  taluka: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    default: "India",
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  HouseNo: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("address", addressSchema);
