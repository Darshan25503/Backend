const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.ObjectId,
    ref: "user",
    required: true,
  },
  companyId: {
    type: mongoose.ObjectId,
    ref: "company",
    required: true,
  },
  sourceId: {
    type: mongoose.ObjectId,
    ref: "address",
    required: true,
  },
  destinationId: {
    type: mongoose.ObjectId,
    ref: "address",
    required: true,
  },
  status: {
    type: String,
    default: "Placed",
    required: true,
  },
  orderedAt: {
    type: Date,
    required: true,
  },
  deliveredAt: {
    type: Date,
  },
  reached: [
    {
      time: {
        type: Date,
      },
      centerId: {
        type: mongoose.ObjectId,
        ref: "cityCenter",
      },
    },
  ],

  price: {
    type: Number,
    required: true,
  },

  items: [
    {
      weight: {
        type: Number,
        required: true,
      },
    },
  ],

  totalWeight: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("order", orderSchema);
