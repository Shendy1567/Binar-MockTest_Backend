const authRoutes = require("./auth.routes");
// const listRoutes = require("./list.routes");

const api = require("express").Router();

api.use("/auth", authRoutes);
// api.use("/list", listRoutes);

module.exports = api;
