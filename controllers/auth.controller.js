const { User } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = class AuthControllers {
  async reqisterUser(req, res) {
    const { username, firstName, lastName, email, pin } = req.body;
    const pinStr = pin.toString();
    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({
        status: "Error",
        message: "Email has already registered",
      });
    }

    if (pinStr.length !== 6) {
      return res.status(400).json({
        status: "Error",
        message: "Pin must be exactly 6 characters long",
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

      return res.status(200).json({
        status: "Success",
        message: "Account Successfully registered",
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        message: error.message,
      });
    }
  }

  async loginUser(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res.status(400).json({
          status: "Error",
          message: "Email is not Found",
        });
      } else if (req.body.pin != user.pin) {
        return res.status(400).json({
          status: "Error",
          message: "Wrong pin",
        });
      }

      const payload = {
        id: user.id,
        username: user.username,
      };

      const token = jwt.sign(payload, "JwtToken");

      return res
        .cookie("token", token, {
          maxAge: 24 * 60 * 60 * 1000,
          path: "/",
        })
        .status(200)
        .json({
          status: "Success",
          token: token,
          message: "Welcome back " + user.firstName,
        });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        message: error.message,
      });
    }
  }

  async logoutUser(req, res) {
    try {
      const token = req.cookies.token;
      if (!token) return res.sendStatus(204);
      return res.clearCookie("token").status(200).json({
        status: "Success",
        message: "Token successfuly deleted",
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        message: error.message,
      });
    }
  }
};
