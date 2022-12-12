import { useEffect, useState } from "react";

import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import Password from "./Password";
import axios from "axios";

const Login = ({ handleInput, formInput }) => {
  const { loginUsername, loginPassword } = formInput;
  const [tokenLog, setTokenLog] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/login", {
        username: loginUsername,
        password: loginPassword,
      });
      // console.log(response.data.msg.decoded);
      setTokenLog(() => response.data.msg.token);
      // if (token) navigate("/protected");

      alert(
        `Login Successfull with username : ${response.data.msg.decoded.username}`
      );
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  useEffect(() => {
    if (tokenLog) {
      localStorage.setItem("Token", tokenLog);
      navigate("/protected");
    }
    return () => {
      console.log("LOGIN");
    };
  }, [tokenLog]);
  // useEffect(() => {
  //   if (tokenLog) {
  //     navigate("/protected");
  //   }
  //   return () => {
  //     console.log("done");
  //   };
  // }, [tokenLog]);
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
          {/* <Link to="/protected"> */}{" "}
          <button
            className="control"
            type="button"
            disabled={!loginUsername || !loginPassword}
            onClick={handleLogin}
          >
            LOGIN
          </button>
          {/* </Link> */}
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
