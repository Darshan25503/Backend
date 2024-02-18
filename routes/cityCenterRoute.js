const express = require("express");
const {
  cityCenterRegisterController,
} = require("../controllers/cityCenterAuthController");

const router = express.Router();

router.post("/register", cityCenterRegisterController);

module.exports = router;
