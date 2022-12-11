import { useState } from "react";
import { Link } from "react-router-dom";
import Password from "./Password";

const Register = ({ formInput, setFormInput, handleInput }) => {
  const [dis, setDis] = useState(true);
  const disable = () => {
    setDis(!dis);
  };

  const { registerPassword, registerResetPassword } = formInput;
  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   console.log(e.target.value);
  //   setFormInput((formValue) => ({ ...formValue, [name]: value }));
  // };
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
            placeholder="Reset-password"
            name="registerResetPassword"
            handleInput={handleInput}
          />

          <button
            className="control"
            type="button"
            disabled={dis}
            onClick={() => alert("hello")}
          >
            Register
          </button>
          <button className="control" type="button" onClick={disable}>
            Register1
          </button>
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
