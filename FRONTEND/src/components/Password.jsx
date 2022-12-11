import React, { useState } from "react";

const Password = ({ placeholder, handleInput, name }) => {
  const [toggleButton, setToggleButton] = useState(false);
  const togglePassword = () => {
    setToggleButton(!toggleButton);
  };
  return (
    <div className="password">
      <input
        autoComplete="off"
        spellCheck="false"
        className="control"
        name={name}
        type={toggleButton ? "text" : "password"}
        placeholder={placeholder}
        onChange={handleInput}
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
