import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = ({ isClosed }) => {
  return (
    <main>
      <Sidebar isClosed={isClosed} />
    </main>
  );
};

export default Dashboard;
