const Product = require("../model/Product");
const CustomAPIError = require("../errors/custom-error");

const createProduct = async (req, res) => {
  //   console.log(req.body);

  try {
    const product = await Product.create(req.body);
    console.log(product);
    res.status(200).json({ product });
  } catch (error) {
    throw new CustomAPIError(error, 400);
  }

  //   throw new CustomAPIError("Please provide email and password", 400);
};

const getAllProducts = (req, res) => {
  res.send("Hello");
};
const uploadProductImage = (req, res) => {
  res.send("Hello");
};

module.exports = { createProduct, getAllProducts, uploadProductImage };
