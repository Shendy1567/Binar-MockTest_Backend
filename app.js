const express = require("express");
const app = express();
const apiRoutes = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = 4000;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: process.env.CORS_ORIGINS }));
app.use(express.json());

app.use("/", apiRoutes);

app.listen(port, () => {
  console.log("Server is running on port", port);
});
