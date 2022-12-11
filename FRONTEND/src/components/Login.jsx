import { Link } from "react-router-dom";
import Password from "./Password";
import Register from "./Register";

const Login = ({ handleInput, formInput }) => {
  const { loginUsername, loginPassword } = formInput;
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
            onClick={() => alert("hello")}
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
