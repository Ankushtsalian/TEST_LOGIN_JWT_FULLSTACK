import React, { useState } from "react";

const Password = ({ placeholder }) => {
  const [toggleButton, setToggleButton] = useState(false);
  const togglePassword = () => {
    setToggleButton(!toggleButton);
  };
  return (
    <div className="password">
      <input
        autocomplete="off"
        spellCheck="false"
        className="control"
        type={toggleButton ? "text" : "password"}
        placeholder={placeholder}
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
