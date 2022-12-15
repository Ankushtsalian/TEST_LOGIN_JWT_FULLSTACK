import React from "react";
import menuItems from "../Assets/menuItems";
import "../styles/sidebar.css";
import NavMenu from "./NavMenu";
const Sidebar = ({ isClosed }) => {
  const handleSubmenu = () => {};
  return (
    <div
      className={`${isClosed ? "sidebar sidebarShow" : "sidebar  sidebarClose"}
    `}
    >
      <ul>
        {menuItems.map((item, i) => (
          <>
            <NavMenu item={item} handleSubmenu={handleSubmenu} i={i} />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
