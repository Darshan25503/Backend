const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
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
  logo: {
    type: String,
    required: true,
  },
  regNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  pincodes: [
    {
      type: Number,
      required: true,
    },
  ],
  accountNo: {
    type: Number,
    required: true,
  },
  IFSC: {
    type: String,
    required: true,
  },
  reviews: [
    {
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
    },
  ],
  avgRating: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("company", companySchema);
