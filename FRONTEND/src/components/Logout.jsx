import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    }; // eslint-disable-next-line
  }, [logToken]);

  return (
    <div>
      <button onClick={handleLogout}> Logout</button>
    </div>
  );
};

export default Logout;
