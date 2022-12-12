import "./App.css";
import "../src/styles/login_register.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Logout from "./components/Logout";
import Protected from "./components/Protected";

function App() {
  const [formInput, setFormInput] = useState({
    loginUsername: "",
    loginPassword: "",
    registerUsername: "",
    registerPassword: "",
    registerResetPassword: "",
  });

  useEffect(() => {
    localStorage.removeItem("Token");
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInput((formValue) => ({ ...formValue, [name]: value }));
  };
  return (
    <main>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Register
                handleInput={handleInput}
                formInput={formInput}
                setFormInput={setFormInput}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                handleInput={handleInput}
                formInput={formInput}
                setFormInput={setFormInput}
              />
            }
          />

          <Route
            path="/protected"
            element={
              <Protected>
                <Logout />
                <Dashboard />
              </Protected>
            }
          ></Route>

          <Route
            path="*"
            element={<h1>-------------------- NOT FOUND 404 --------------</h1>}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
