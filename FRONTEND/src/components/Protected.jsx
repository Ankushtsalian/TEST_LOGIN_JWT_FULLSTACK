import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    }; // eslint-disable-next-line
  }, [logToken]);

  return <div>{logToken && <div className="dashboard">{children}</div>}</div>;
};

export default Protected;
