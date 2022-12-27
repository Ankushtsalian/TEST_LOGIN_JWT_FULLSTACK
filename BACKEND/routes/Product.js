const express = require("express");
const {
  createProduct,
  getAllProducts,
  uploadProductImage,
  deleteProduct,
  uploadProductImageToCloud,
} = require("../controllers/Product");
// const { getAllUsers } = require("../controllers/main");
const router = express.Router();

router.route("/").post(createProduct).get(getAllProducts);
router.route("/uploads").post(uploadProductImageToCloud);

router.route("/:id/query").delete(deleteProduct);
module.exports = router;
