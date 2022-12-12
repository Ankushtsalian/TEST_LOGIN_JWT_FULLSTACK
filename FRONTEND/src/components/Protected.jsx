import React, { useEffect, useState } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const [logToken] = useState(localStorage.getItem("Token"));

  useEffect(() => {
    if (!logToken) {
      alert("Unathorized USER");
      navigate("/login");
    }
    return () => {
      console.log("Protected");
    };
  }, [logToken]);

  return <div>{logToken && <div className="dashboard">{children}</div>}</div>;
};

export default Protected;
