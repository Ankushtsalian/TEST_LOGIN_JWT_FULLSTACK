import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Password from "./Password";
import axios from "axios";

const Login = ({ handleInput, formInput, setFormInput }) => {
  const { loginUsername, loginPassword } = formInput;

  const [token, setToken] = useState({ tokenLog: "", tokenDecoded: {} });

  const navigate = useNavigate();

  const { tokenLog, tokenDecoded } = token;
  // console.log(tokenDecoded);
  useEffect(() => {
    localStorage.removeItem("Token");
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/login", {
        username: loginUsername,
        password: loginPassword,
      });

      setToken((responseToken) => ({
        ...responseToken,
        tokenLog: response.data.msg.token,
        tokenDecoded: response.data.msg.decoded,
      }));
      setFormInput((formValue) => ({
        ...formValue,

        loginUsername: "",
        loginPassword: "",
        registerUsername: "",
        registerPassword: "",
        registerResetPassword: "",
      }));
      // if (token) navigate("/protected");

      setTimeout(() => {
        alert(
          `Login Successfull with username : ${response.data.msg.decoded.username}`
        );
      }, 250);
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
    <main className="container ">
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
      <form class="form1">
        <div class="textbox">
          <input className="input" type="text" required />
          <label>Name</label>
          <span class="material-symbols-outlined"> account_circle </span>
        </div>
        <div class="textbox">
          <input className="input" type="text" required />
          <label>Email</label>
          <span class="material-symbols-outlined"> email </span>
        </div>
        <div class="textbox">
          <input className="input" type="password" required />
          <label>Password</label>
          <span class="material-symbols-outlined"> key </span>
        </div>
        <p>
          Signed up already?
          <a href="#">Login here</a>
        </p>

        {/* <button className="button" type="submit">
          Join The Elitists
          <span class="material-symbols-outlined"> arrow_forward </span>
        </button> */}
      </form>
    </main>
  );
};

export default Login;
