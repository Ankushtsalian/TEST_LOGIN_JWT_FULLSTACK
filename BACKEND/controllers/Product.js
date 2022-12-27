const Product = require("../model/Product");
const path = require("path");
const CustomAPIError = require("../errors/custom-error");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    console.log(product);
    res.status(200).json({ product });
  } catch (error) {
    throw new CustomAPIError(error, 400);
  }
};

const getAllProducts = async (req, res) => {
  const products = await Product.find().select("name price image");
  console.log(products);
  res.status(200).json({ products });
};
const uploadProductImage = async (req, res) => {
  let productImage = req.files.image;
  try {
    // const date = new Date().getTime();
    // console.log("Date", date);
    const imagePath = path.join(
      __dirname,
      "../Assets/uploads/" + `${productImage.name}`
    );
    // console.log("imagePath", imagePath);
    // console.log("productImage", productImage);
    // console.log("productImage.name", productImage.name);
    await productImage.mv(imagePath);
    res.status(200).json({ image: { src: `/uploads/${productImage.name}` } });
    // res.status(200).json({ image: { src: `${imagePath}` } });
  } catch (error) {
    throw new CustomAPIError(error, 400);
  }
};

module.exports = { createProduct, getAllProducts, uploadProductImage };
