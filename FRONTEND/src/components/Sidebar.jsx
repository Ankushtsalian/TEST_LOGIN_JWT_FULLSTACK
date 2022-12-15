import React from "react";
import menuItems from "../Assets/menuItems";

const Sidebar = ({ isClosed }) => {
  return (
    <div
      className={`${!isClosed ? "" : "sidebarClose"}
    `}
    >
      {menuItems.map((item, i) => (
        <li key={i}>{item.name}</li>
      ))}{" "}
    </div>
  );
};

export default Sidebar;
