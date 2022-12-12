import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Password from "./Password";
import axios from "axios";

const Login = ({ handleInput, formInput, setFormInput }) => {
  const { loginUsername, loginPassword } = formInput;
  const [tokenLog, setTokenLog] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("Token");
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/login", {
        username: loginUsername,
        password: loginPassword,
      });
      // console.log(response.data.msg.decoded);
      setTokenLog(() => response.data.msg.token);
      setFormInput((formValue) => ({
        ...formValue,

        loginUsername: "",
        loginPassword: "",
        registerUsername: "",
        registerPassword: "",
        registerResetPassword: "",
      }));
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
    }; // eslint-disable-next-line
  }, [tokenLog]);

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
        <div>New User, Please Register</div>
        <Link to="/">
          &#x2190; <span>Create your account</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
