const AuthControllers = require("../../controllers/auth.controller");
const AuthControl = new AuthControllers();
const AuthRouter = require("express").Router();

AuthRouter.post("/register", AuthControl.reqisterUser);
AuthRouter.post("/login", AuthControl.loginUser);

module.exports = AuthRouter;
