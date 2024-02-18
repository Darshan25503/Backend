const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController");

const router = express.Router();

//routing
//USER
//POST || Register User
router.post("/register", registerController);

//POST || Login User

router.post("/login", loginController);

module.exports = router;
