const company = require("../models/companyModel");
const { hashPassword, comparePassword } = require("../helpers/authHelper.js");
const JWT = require("jsonwebtoken");

//register controller

exports.companyRegisterController = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      logo,
      regNo,
      address,
      mobile,
      price,
      pincodes,
      accountNo,
      IFSC,
    } = req.body;

    const existingUser = await company.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: true,
        message: "Company already registered please login",
      });
    } else {
      const hashedPassword = await hashPassword(password);
      const comp = await new company({
        name: name,
        password: hashedPassword,
        email: email,
        logo: logo,
        regNo: regNo,
        address: address,
        mobile: mobile,
        price: price,
        pincodes: pincodes,
        accountNo: accountNo,
        IFSC: IFSC,
      }).save();

      res.status(201).json({
        success: true,
        message: "Company Registered successfully",
        comp,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: true,
      message: "Internal server error in company registration",
    });
  }
};

//company login contorller

exports.companyLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingCompany = await company.findOne({ email });

    if (!existingCompany) {
      return res.status(200).message({
        success: false,
        message: "Invalid Username or Password",
      });
    }

    const match = await comparePassword(password, existingCompany.password);

    if (!match) {
      return res.status(200).json({
        success: false,
        message: "Invalid Username or Password",
      });
    }

    const token = JWT.sign(
      { id: existingCompany._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Company Login Successful",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error in company login",
    });
  }
};

//company rating

exports.companyRatingController = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const { rating, comment } = req.body;
    // Find the company by its ID
    const company = await Company.findById(companyId);

    if (reviews.length === 0) {
      return 0; // If there are no reviews yet, return 0
    }

    let totalRating = 0;
    reviews.forEach((review) => {
      totalRating += review.rating;
    });

    const avgRating = totalRating / reviews.length;
    // Add the new review
    company.reviews.push({ rating, comment });
    company.avgRating = avgRating;
    // Save the company
    await company.save();

    res.status(200).json({ message: "Rating added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error in updating rating",
    });
  }
};
