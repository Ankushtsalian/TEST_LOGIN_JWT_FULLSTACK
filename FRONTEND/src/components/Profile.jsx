import React from "react";
import { useState } from "react";
import img from "../Assets/profile.png";

const Profile = () => {
  const [uploaded, setUploaded] = useState(false);
  return (
    <div className="profile-container">
      <input type="file" className={`${!uploaded ? "file" : "show"}`} />
      <div onClick={() => setUploaded(!uploaded)}>
        <img className="profile-img" src={img} />
      </div>
    </div>
  );
};

export default Profile;
