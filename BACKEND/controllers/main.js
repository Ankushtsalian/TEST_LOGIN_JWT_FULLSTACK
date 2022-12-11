// login;
// register;
// dashboard;

const login = async (req, res) => {
  const { username, password } = req.body;
  res.status("200").json({ msg: { username, password } });
};
const register = async (req, res) => {
  res.send("hello register");
};
const dashboard = async (req, res) => {
  res.send("hello dashboard");
};

module.exports = { login, register, dashboard };
