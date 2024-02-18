const express = require("express");
const { setAddressController } = require("../controllers/addressController");

const router = express.Router();

router.post("/set-address", setAddressController);

module.exports = router;
