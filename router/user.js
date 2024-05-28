const express = require("express");
const { createUser } = require("../controller/user.js");

const router = express.Router();

router.route("/").post(createUser);

module.exports = router;
