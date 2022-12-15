import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = ({ isClosed }) => {
  return (
    <aside>
      <Sidebar isClosed={isClosed} />
    </aside>
  );
};

export default Dashboard;
