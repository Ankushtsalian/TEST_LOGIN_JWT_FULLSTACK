const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide  name"],
    },
    price: {
      type: Number,
      required: [true, "please provide Price"],
    },
    image: {
      type: String,
      required: [true, "please provide image"],
    },
    public_id: {
      type: String,
      required: [true, "please provide  public_id"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
