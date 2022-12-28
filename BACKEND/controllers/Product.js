const Product = require("../model/Product");
const Image = require("../model/Image");
const path = require("path");
const CustomAPIError = require("../errors/custom-error");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
/**----------------------------------CREATE PRODUCT------------------------------------ */

const createProduct = async (req, res) => {
  const {
    name,
    price,
    imageDetail: { image, public_id },
  } = req.body;
  try {
    const product = await Product.create({
      name,
      price,
      image,
      public_id,
    });
    res.status(200).json({ product });
  } catch (error) {
    throw new CustomAPIError(error, 400);
  }
};
/**----------------------------------CREATE PRODUCT------------------------------------ */

/**----------------------------------GET ALL PRODUCT------------------------------------ */

const getAllProducts = async (req, res) => {
  const products = await Product.find().select("name price image  public_id");

  let dbImages = await Image.find().select("public_id");
  let productImageId = await Product.find().select("public_id");
  let map = {};

  let combined = [...dbImages, ...productImageId];

  productImageId = productImageId.map((image) => image.public_id);

  combined.forEach((image) => (map[image.public_id] = image.public_id));
  combinedProductId = Object.values(map);

  const FileterdimagesId = combinedProductId.filter(
    (image) => !productImageId.includes(image)
  );

  FileterdimagesId.forEach(async (publicId) => {
    await cloudinary.uploader.destroy(publicId);
    await Image.deleteOne({ public_id: publicId });
  });

  res.status(200).json({ products });
};
/**----------------------------------GET ALL PRODUCT------------------------------------ */

/**----------------------------------UPLOADED IMAGE TO SERVER------------------------------------ */
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
/**----------------------------------UPLOADED IMAGE TO SERVER------------------------------------ */

/**----------------------------------DELETE PRODUCT------------------------------------ */

const deleteProduct = async (req, res) => {
  const { publicId } = req.query;
  await Product.deleteOne({ _id: req.params.id });
  await Image.deleteOne({ public_id: publicId });
  await cloudinary.uploader.destroy(publicId);
  res.status(200).send();
};

/**----------------------------------DELETE PRODUCT----------------------------------- */

/**----------------------------------UPLOADED IMAGE TO CLOUD------------------------------------ */

const uploadProductImageToCloud = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "Product-upload",
    }
  );
  await Image.create({ public_id: result.public_id });
  fs.unlinkSync(req.files.image.tempFilePath);

  res.status(200).json({
    image: { src: result.secure_url },
    public_id: result.public_id,
  });
};
/**----------------------------------UPLOADED IMAGE TO CLOUD------------------------------------ */

module.exports = {
  createProduct,
  getAllProducts,
  uploadProductImageToCloud,
  deleteProduct,
};
