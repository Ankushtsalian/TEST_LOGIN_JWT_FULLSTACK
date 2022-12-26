const express = require("express");
const {
  createProduct,
  getAllProducts,
  uploadProductImage,
} = require("../controllers/Product");
// const { getAllUsers } = require("../controllers/main");
const router = express.Router();

router.route("/").post(createProduct).get(getAllProducts);
router.route("/uploads").post(uploadProductImage);

module.exports = router;
