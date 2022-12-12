const jwt = require("jsonwebtoken");
const registerSchema = require("../model/register");
const CustomAPIError = require("../errors/custom-error");

/**---------------------------REGISTER-------------------------------------- */

const register = async (req, res) => {
  const { username, password } = req.body;
  const findUser = await registerSchema.find({ username, password });
  if (findUser.length !== 0) {
    throw new CustomAPIError("User Exist", 401);
  }

  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  await registerSchema.create({ username, password, token });

  res.status(200).json({ msg: { username } });
};

/**---------------------------REGISTER-------------------------------------- */

/**---------------------------LOGIN-------------------------------------- */

const login = async (req, res) => {
  const { username, password } = req.body;
  // const { authorization } = req.headers;
  const findUser = await registerSchema.find({ username, password });
  if (findUser.length === 0) throw new CustomAPIError("Unathorized User", 404);

  const [{ token }] = findUser;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded.username === username)
    return res.status("200").json({ msg: { decoded, token } });
  throw new CustomAPIError("Unathorized User", 404);
};

/**---------------------------LOGIN-------------------------------------- */

/**---------------------------DASHBOARD-------------------------------------- */
const dashboard = async (req, res) => {
  res.send("hello dashboard");
};
/**---------------------------DASHBOARD-------------------------------------- */

module.exports = { login, register, dashboard };
