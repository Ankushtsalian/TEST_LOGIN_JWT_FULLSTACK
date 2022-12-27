const Product = require("../model/Product");
const path = require("path");
const CustomAPIError = require("../errors/custom-error");
const cloudinary = require("cloudinary").v2;

const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const product = await Product.create(req.body);
    res.status(200).json({ product });
  } catch (error) {
    throw new CustomAPIError(error, 400);
  }
};

const getAllProducts = async (req, res) => {
  const products = await Product.find().select("name price image");
  res.status(200).json({ products });
};
const uploadProductImage = async (req, res) => {
  let productImage = req.files.image;

  if (!req.files) throw new CustomAPIError("No file uploaded", 400);
  if (!productImage.mimetype.startsWith("image"))
    throw new CustomAPIError("Please Upload image", 400);

  const maxSize = 1024 * 1024;

  if (!productImage.size > maxSize)
    throw new CustomAPIError("Please Upload image smaller than 1kb", 400);

  try {
    const imagePath = path.join(
      __dirname,
      "../Assets/uploads/" + `${productImage.name}`
    );

    await productImage.mv(imagePath);
    res.status(200).json({ image: { src: `/uploads/${productImage.name}` } });
  } catch (error) {
    throw new CustomAPIError(error, 400);
  }
};

const deleteProduct = async (req, res) => {
  await Product.deleteOne({ _id: req.params.id });
  res.status(200).send();
};

const uploadProductImageToCloud = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "Product-upload",
    }
  );
  res.status(200).json({ image: { src: result.secure_url } });
};
module.exports = {
  createProduct,
  getAllProducts,
  uploadProductImageToCloud,
  deleteProduct,
};
