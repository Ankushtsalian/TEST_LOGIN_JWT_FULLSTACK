import { Link } from "react-router-dom";
import Password from "./Password";

const Register = () => {
  return (
    <div className="register-card">
      <div>
        <h2>Register</h2>
        <h3>Enter your credentials</h3>
        <form className="register-form">
          <input
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Username"
          />
          <Password password="true" />
          <Password reset-password="true" />

          <button className="control" type="button">
            Register
          </button>
        </form>
      </div>
      <div className="Redirect">
        <Link to="/">
          &#x2190; <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
