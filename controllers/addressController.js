const addressModel = require("../models/addressModel");
exports.setAddressController = async (req, res) => {
  try {
    const {
      name,
      phoneNo,
      email,
      city,
      taluka,
      district,
      state,
      country,
      pincode,
      HouseNo,
      street,
      landmark,
    } = req.body;

    const address = await new addressModel({
      name: name,
      phoneNo: phoneNo,
      email: email,
      city: city,
      taluka: taluka,
      district: district,
      state: state,
      country: country,
      pincode: pincode,
      HouseNo: HouseNo,
      street: street,
      landmark: landmark,
    }).save();

    res.status(200).json({
      success: true,
      message: "Address registered successfully",
      address,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error in setting address",
      error,
    });
  }
};
