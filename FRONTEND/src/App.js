import "./App.css";
import "../src/styles/login_register.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [formInput, setFormInput] = useState({
    loginUsername: "",
    loginPassword: "",
    registerUsername: "",
    registerPassword: "",
    registerResetPassword: "",
  });

  // const { registerPassword, registerResetPassword } = formInput;
  // console.log(formInput);
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
            element={<Login handleInput={handleInput} formInput={formInput} />}
          />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
