const express = require("express");
const userRouter = require("./router/user.js");

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);

module.exports = app;
