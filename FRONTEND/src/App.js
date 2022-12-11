import "./App.css";
import "../src/styles/login_register.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
