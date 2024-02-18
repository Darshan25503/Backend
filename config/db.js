const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected sucessfully!! ");
  } catch (error) {
    console.log(`error in DB ${error}`);
  }
};
module.exports = connectDB;
