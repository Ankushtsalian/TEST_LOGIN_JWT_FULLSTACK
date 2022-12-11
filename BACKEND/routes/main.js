const express = require("express");
const { login, register, dashboard } = require("../controllers/main");
const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(dashboard);

module.exports = router;
