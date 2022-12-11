import { Link } from "react-router-dom";
import Password from "./Password";
import Register from "./Register";

const Login = () => {
  return (
    <div className="login-card">
      <div>
        <h2>Login</h2>
        <h3>Enter your credentials</h3>
        <form className="login-form">
          <input
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Username"
          />

          <Password placeholder="Password" />

          <button className="control" type="button">
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
