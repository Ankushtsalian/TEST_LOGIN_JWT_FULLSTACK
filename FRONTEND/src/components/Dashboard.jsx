import React, { useState } from "react";
import Sidebar from "./Sidebar";
import menuItems from "../Assets/menuItems";
import "../styles/dashboard.css";
import FileInput from "./FileInput";
import Loader from "./Loader";

const Dashboard = ({ isClosed }) => {
  return (
    <div className="main-container">
      <aside>
        <Sidebar isClosed={isClosed} />
      </aside>
      <div className="main">
        {/* <Loader /> */}
        {/* <pre>{JSON.stringify(menuItems, null, 2)}</pre> */}
        <FileInput />
      </div>
    </div>
  );
};

export default Dashboard;
