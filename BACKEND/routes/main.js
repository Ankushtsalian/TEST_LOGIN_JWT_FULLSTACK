const express = require("express");
const {
  login,
  register,
  dashboard,
  deleteUser,
} = require("../controllers/main");
const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(dashboard);
router.route("/:id").delete(deleteUser);

module.exports = router;
