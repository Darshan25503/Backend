const express = require("express");
const {
  companyListingController,
  fetchUsersController,
} = require("../controllers/searchCompanyController");

const router = express.Router();

//company Listing
router.post("/company-listing", companyListingController);

//fetch all users
router.get("/fetch-users", fetchUsersController);

module.exports = router;
