const express = require("express");
const {
  companyRegisterController,
  companyLoginController,
} = require("../controllers/companyAuthController");
const { body } = require("express-validator");
const router = express.Router();

//Routing
//POST || Register Company

router.post("/register", companyRegisterController);

//POST || Company Login

router.post("/login", companyLoginController);

module.exports = router;
