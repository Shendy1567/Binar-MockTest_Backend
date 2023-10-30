const { User } = require("../models");

module.exports = class AuthControllers {
  async reqisterPlayer(req, res, next) {
    const { username, firstName, lastName, email, pin } = req.body;

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({
        status: "Error",
        message: "Email has already registered",
      });
    }
    try {
      await User.create({
        username,
        firstName,
        lastName,
        email,
        pin,
        role: "user",
      });
      res.status(200).json({
        status: "Success",
        message: "Account Successfully registered",
      });
    } catch (error) {
      res.status(500).json({
        status: "Error",
        message: error.message,
      });
    }
  }
};
