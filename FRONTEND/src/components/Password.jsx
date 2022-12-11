import React, { useState } from "react";

const Password = ({ password }) => {
  const [toggleButton, setToggleButton] = useState(false);
  const togglePassword = () => {
    setToggleButton(!toggleButton);
  };
  return (
    <div className="password">
      <input
        spellCheck="false"
        className="control"
        id="password"
        type={toggleButton ? "text" : "password"}
        placeholder="Password"
      />
      <button
        className={toggleButton ? "toggle" : "toggle showing"}
        type="button"
        onClick={togglePassword}
      ></button>
    </div>
  );
};

export default Password;
