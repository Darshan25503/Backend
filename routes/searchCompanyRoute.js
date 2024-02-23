const express = require("express");
const {
  companyListingController,
  fetchUsersController,
  fetchCompanyController,
} = require("../controllers/searchCompanyController");

const router = express.Router();

//company Listing
router.post("/company-listing", companyListingController);

//fetch all users
router.get("/fetch-users", fetchUsersController);

//fetch all companies
router.get("/fetch-comapny", fetchCompanyController);

module.exports = router;
