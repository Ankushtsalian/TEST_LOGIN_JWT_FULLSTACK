import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Password from "./Password";

const Register = ({ formInput, handleInput }) => {
  const { registerUsername, registerPassword, registerResetPassword } =
    formInput;

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/register",
        {
          username: registerUsername,
          password: registerPassword,
        }
      );
      alert(response.data.msg.username);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  // useEffect(() => {
  //   localStorage.setItem("Token", token);
  //   return () => {
  //     console.log("done");
  //   };
  // }, [token]);

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
