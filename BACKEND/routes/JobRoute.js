const express = require("express");
const createJob = require("../controllers/Job");
const { getAllUsers } = require("../controllers/main");
const router = express.Router();

// router.route("/").get(getAllJobs);
router.route("/").post(createJob);
router.route("/users").get(getAllUsers);
// router.route("/register").post(register);
// router.route("/dashboard").get(dashboard);
// router.route("/:id").delete(deleteUser);

module.exports = router;
