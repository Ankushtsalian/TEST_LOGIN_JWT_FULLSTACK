import axios from "axios";
import React, { useState } from "react";
const url = "http://localhost:5000/api/v1/products";
const FileInput = () => {
  const [fileFormData, setFileFormData] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { name, price, image } = fileFormData;
  let imageValue;

  const handleInput = async (event) => {
    const imageFile = event.target.files[0];
    let formData = new FormData();
    formData = { ...formData, ["image"]: imageFile };
    // formData.append("image", imageFile);
    try {
      const {
        data: {
          image: { src },
        },
      } = await axios.post(`${url}/uploads`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      imageValue = src;
      setFileFormData((data) => ({ ...data, image: imageValue }));
    } catch (error) {
      imageValue = null;
      console.log(error);
    }
  };

  const handleForm = (event) => {
    console.log(fileFormData);
  };
  return (
    <div className="file-form-container">
      <form className="login-form">
        <div className="textbox">
          <input
            className="input"
            type="text"
            required
            name="name"
            onChange={handleInput}
          />
          <label>Name</label>
        </div>
        <div className="textbox">
          <input
            className="input"
            type="text"
            required
            name="price"
            onChange={handleInput}
          />
          <label>price</label>
        </div>
        <div className="textbox">
          <input
            className="input"
            type="file"
            required
            name="image"
            onChange={handleInput}
          />
          <label>Image</label>
        </div>

        <button
          className="control"
          type="button"
          //   disabled={!loginUsername || !loginPassword}
          onClick={handleForm}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FileInput;
