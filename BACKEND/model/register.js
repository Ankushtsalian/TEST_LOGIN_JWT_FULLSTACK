const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "must provide username"],
  },
  password: {
    type: String,
    required: [true, "must provide username"],
  },
  token: {
    type: String,
  },
});

module.exports = mongoose.model("register", registerSchema);
