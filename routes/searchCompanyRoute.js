const express = require("express");
const {
  companyListingController,
} = require("../controllers/searchCompanyController");

const router = express.Router();

router.post("/company-listing", companyListingController);

module.exports = router;
