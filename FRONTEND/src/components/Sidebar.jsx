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
      <pre>{JSON.stringify(menuItems, null, 2)}</pre>
    </div>
  );
};

export default Sidebar;
