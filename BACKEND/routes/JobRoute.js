const express = require("express");
const { getAllUsers } = require("../controllers/main");
const router = express.Router();

router.route("/").get(getAllUsers);
// router.route("/register").post(register);
// router.route("/dashboard").get(dashboard);
// router.route("/:id").delete(deleteUser);

module.exports = router;
