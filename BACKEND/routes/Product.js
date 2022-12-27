const express = require("express");
const {
  createProduct,
  getAllProducts,
  uploadProductImage,
  deleteProduct,
} = require("../controllers/Product");
// const { getAllUsers } = require("../controllers/main");
const router = express.Router();

router.route("/").post(createProduct).get(getAllProducts).delete(deleteProduct);
router.route("/uploads").post(uploadProductImage);

module.exports = router;
