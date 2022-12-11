const jwt = require("jsonwebtoken");
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInVzZXJuYW1lIjoiIDJVcGRhdGUgVFNFVCIsImlhdCI6MTY3MDc2MjczNiwiZXhwIjoxNjczMzU0NzM2fQ.vv3YyAJCE_mPSvKeRdWauYRLvhP4tJLL-8C7eOvEGOY";
const register = async (req, res) => {
  const { username, password, resetPassword } = req.body;

  const id = new Date().getDate();
  token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status("200").json({ msg: { username, token } });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  res.status("200").json({ msg: { username, token } });
};
const dashboard = async (req, res) => {
  res.send("hello dashboard");
};

module.exports = { login, register, dashboard };
