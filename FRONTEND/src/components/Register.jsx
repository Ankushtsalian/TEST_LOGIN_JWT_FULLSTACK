import { useState } from "react";
import { Link } from "react-router-dom";
import Password from "./Password";

const Register = ({ formInput, handleInput }) => {
  const [dis, setDis] = useState(true);
  const { registerUsername, registerPassword, registerResetPassword } =
    formInput;

  return (
    <div className="register-card">
      <div>
        <h2>Register</h2>
        <h3>Enter your credentials</h3>
        <form className="register-form">
          <input
            spellCheck="false"
            className="control"
            name="registerUsername"
            type="text"
            placeholder="Username"
            onChange={handleInput}
          />

          <Password
            placeholder="Password"
            name="registerPassword"
            handleInput={handleInput}
          />
          <Password
            placeholder="Re-Enter-password"
            name="registerResetPassword"
            handleInput={handleInput}
          />

          <button
            className="control"
            type="button"
            disabled={
              !registerUsername || !registerPassword || !registerResetPassword
            }
            onClick={handleRegister}
          >
            Register
          </button>
          {/* <button className="control" type="button" onClick={disable}>
            Register1
          </button> */}
        </form>
      </div>
      <div className="Redirect">
        <Link to="/login">
          &#x2190; <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
