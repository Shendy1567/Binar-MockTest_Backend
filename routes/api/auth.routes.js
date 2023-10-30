const AuthControllers = require("../../controllers/auth.controller");
const AuthControl = new AuthControllers();
const AuthRouter = require("express").Router();

AuthRouter.post("/register", AuthControl.reqisterPlayer);

module.exports = AuthRouter;
