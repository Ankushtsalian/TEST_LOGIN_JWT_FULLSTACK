import React from "react";
import Sidebar from "./Sidebar";
import menuItems from "../Assets/menuItems";
import "../styles/dashboard.css";
import FileInput from "./FileInput";

const Dashboard = ({ isClosed }) => {
  return (
    <div className="main-container">
      <aside>
        <Sidebar isClosed={isClosed} />
      </aside>
      <div className="main">
        {/* <pre>{JSON.stringify(menuItems, null, 2)}</pre> */}
        <FileInput />
      </div>
    </div>
  );
};

export default Dashboard;
