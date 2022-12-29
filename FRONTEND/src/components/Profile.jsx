import axios from "axios";
import React from "react";
import { useState } from "react";
import img from "../Assets/profile.png";
const url = "http://localhost:5000/api/v1/products";
// let imageValue;

const Profile = () => {
  const [uploaded, setUploaded] = useState(false);
  let [imageValue, setimageValue] = useState(localStorage.getItem("profile"));

  const handleFileInput = async (event) => {
    const imageFile = event.target.files[0];
    console.log(event.target.files);
    let formData = new FormData();
    formData = { ...formData, ["image"]: imageFile };
    try {
      // setIsLoading(true);
      console.log(localStorage.getItem("Token"));
      const {
        data: {
          image: { src },
          public_id,
        },
      } = await axios.post(`${url}/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      });
      setimageValue(src);
      setUploaded(!uploaded);
      localStorage.setItem("profile", src);
      alert("Profile uploaded");
    } catch (error) {
      imageValue = null;
      console.log(error);
    }
    // setIsLoading(false);
  };
  return (
    <div className="profile-container">
      <input
        type="file"
        className={`${!uploaded ? "file" : "show"}`}
        onChange={handleFileInput}
      />
      <div onClick={() => setUploaded(!uploaded)}>
        <img className="profile-img" src={imageValue} />
      </div>
    </div>
  );
};

export default Profile;
