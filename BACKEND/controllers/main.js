const jwt = require("jsonwebtoken");
const registerSchema = require("../model/register");
const CustomAPIError = require("../errors/custom-error");

const register = async (req, res) => {
  const { username, password } = req.body;
  const findUser = await registerSchema.find({ username });
  if (findUser.length !== 0) {
    throw new CustomAPIError("User Exist", 401);
  }

  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  await registerSchema.create({ username, password, token });

  res.status(200).json({ msg: { username, token } });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const { authorization } = req.headers;
  const findUser = await registerSchema.find({ username });
  console.log(findUser);
  if (findUser.length === 0) {
    throw new CustomAPIError("User not Exist", 401);
  }
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  res.status("200").json({ msg: { decoded } });
};
const dashboard = async (req, res) => {
  res.send("hello dashboard");
};

module.exports = { login, register, dashboard };
