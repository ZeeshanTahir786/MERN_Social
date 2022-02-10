const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));
// Import Router
const post = require("./routes/post");
const user = require("./routes/user");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
// Using Router

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/v1/", post);
app.use("/api/v1/", user);

module.exports = app;
