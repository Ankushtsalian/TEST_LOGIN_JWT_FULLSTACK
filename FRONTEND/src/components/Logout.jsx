import React from "react";
import { useEffect, useState } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

const Logout = () => {
  const token = localStorage.getItem("Token");
  const [logToken, setLogToken] = useState(token);

  const navigate = useNavigate();
  const handleLogout = () => {
    setLogToken(localStorage.removeItem("Token"));
  };

  useEffect(() => {
    if (!logToken) {
      localStorage.removeItem("Token");
      navigate("/login");
    }
    return () => {
      console.log("LOGOUT");
    };
  }, [logToken]);

  return (
    <div>
      <button onClick={handleLogout}> Logout</button>
    </div>
  );
};

export default Logout;
