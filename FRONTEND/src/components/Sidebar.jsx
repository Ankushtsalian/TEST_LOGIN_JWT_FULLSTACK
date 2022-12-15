import React from "react";
import menuItems from "../Assets/menuItems";

const Sidebar = ({ isClosed }) => {
  return (
    <div
      className={`${isClosed ? "sidebar sidebarShow" : "sidebar  sidebarClose"}
    `}
    >
      <ul>
        {menuItems.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
