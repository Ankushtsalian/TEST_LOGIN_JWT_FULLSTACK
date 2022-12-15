import React from "react";
import Sidebar from "./Sidebar";
import menuItems from "../Assets/menuItems";
import "../styles/dashboard.css";

const Dashboard = ({ isClosed }) => {
  return (
    <div>
      <aside>
        <Sidebar isClosed={isClosed} />
      </aside>
      {/* <div className="main">
        <pre>{JSON.stringify(menuItems, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default Dashboard;
