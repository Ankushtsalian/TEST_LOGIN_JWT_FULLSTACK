const Product = require("../model/Product");
const path = require("path");
const CustomAPIError = require("../errors/custom-error");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ product });
  } catch (error) {
    throw new CustomAPIError(error, 400);
  }
};

const getAllProducts = async (req, res) => {
  res.send("Hello");
};
const uploadProductImage = async (req, res) => {
  let productImage = req.files.image;

  try {
    const imagePath = path.join(
      __dirname,
      "../Assets/uploads" + `${productImage.name}`
    );
    await productImage.mv(imagePath);
    res.send(imagePath);
  } catch (error) {
    throw new CustomAPIError(error, 400);
  }
};

module.exports = { createProduct, getAllProducts, uploadProductImage };
