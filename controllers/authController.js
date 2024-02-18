const userModel = require("../models/userModel.js");
const { hashPassword, comparePassword } = require("../helpers/authHelper.js");
const JWT = require("jsonwebtoken");
const sendMail = require("../utils/sendEmail.js");
//Register Controller

exports.registerController = async (req, res) => {
  try {
    const { name, email, password, mobile, address } = req.body;

    //check existing user

    const existingUserm = await userModel.findOne({ mobile });
    const existingUsere = await userModel.findOne({ email });
    if (existingUserm || existingUsere) {
      return res.status(409).json({
        success: true,
        message: "User already registered please login",
      });
    } else {
      const hashedPassword = await hashPassword(password);
      const user = await new userModel({
        name: name,
        email: email,
        password: hashedPassword,
        mobile: mobile,
        address: address,
      }).save();
      res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        user,
      });
      sendMail(user.email, "Express-Junction", "", user.name);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error in user registartion",
    });
  }
};

// login controller

exports.loginController = async (req, res) => {
  try {
    const { mobile, password } = req.body;
    const existingUser = await userModel.findOne({ mobile });

    if (!existingUser) {
      return res.status(200).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    const match = await comparePassword(password, existingUser.password);
    if (!match) {
      return res.status(200).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    //JWT generation

    const token = await JWT.sign(
      { _id: existingUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      }
    );

    res.status(200).json({
      success: true,
      message: "User Login Successful",
      token,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error in user login" });
  }
};
