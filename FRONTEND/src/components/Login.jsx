import { Link } from "react-router-dom";
import Password from "./Password";
import axios from "axios";

const Login = ({ handleInput, formInput }) => {
  const { loginUsername, loginPassword } = formInput;

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/login", {
        username: loginUsername,
        password: loginPassword,
      });
      console.log(response.data.msg);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="login-card">
      <div>
        <h2>Login</h2>
        <h3>Enter your credentials</h3>
        <form className="login-form">
          <input
            spellCheck="false"
            className="control"
            name="loginUsername"
            type="text"
            placeholder="Username"
            onChange={handleInput}
          />

          <Password
            placeholder="Password"
            name="loginPassword"
            handleInput={handleInput}
          />

          <button
            className="control"
            type="button"
            disabled={!loginUsername || !loginPassword}
            onClick={handleLogin}
          >
            LOGIN
          </button>
        </form>
      </div>
      <div className="Redirect">
        <Link to="/">
          &#x2190; <span>Register</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
