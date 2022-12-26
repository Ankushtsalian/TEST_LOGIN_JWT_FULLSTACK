import React from "react";

const FileInput = () => {
  return (
    <div className="file-form-container">
      <form className="login-form">
        <div className="textbox">
          <input
            className="input"
            type="text"
            required
            name="loginUsername"
            // onChange={handleInput}
          />
          <label>Name</label>
        </div>
        <div className="textbox">
          <input
            className="price"
            type="text"
            required
            name="loginUsername"
            // onChange={handleInput}
          />
          <label>price</label>
        </div>
        <div className="textbox">
          <input
            className="input"
            type="text"
            required
            name="loginUsername"
            // onChange={handleInput}
          />
          <label>Name</label>
        </div>

        <button
          className="control"
          type="button"
          //   disabled={!loginUsername || !loginPassword}
          //   onClick={handleLogin}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FileInput;
