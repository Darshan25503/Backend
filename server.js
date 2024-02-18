const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config({ path: "./my.env" });
const authRoutes = require("./routes/authRoutes.js");
const companyRoutes = require("./routes/companyRoutes.js");
const cityCenterRoute = require("./routes/cityCenterRoute.js");
const searchCompanyRoute = require("./routes/searchCompanyRoute.js");
const orderRoute = require("./routes/orderRoute.js");
const addressRoute = require("./routes/addressRoute.js");

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/auth/company", companyRoutes);
app.use("/api/v1/auth/company/cityCenter", cityCenterRoute);
app.use("/api/v1/user/search", searchCompanyRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/api/v1/address", addressRoute);

//rest api
app.get("/", (req, res) => {
  res.json({
    message: "welcome to Global public API of Express-Junction",
  });
});

//connection message
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
