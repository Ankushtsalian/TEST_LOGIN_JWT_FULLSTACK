import React, { useState } from "react";
import SubMenu from "./SubMenu";

const NavMenu = ({ item, i }) => {
  const [subMenu, setSubmenu] = useState(false);

  const handleSubmenu = () => {
    setSubmenu(!subMenu);
  };
  return (
    <>
      {item.name}
      {item.items && <button onClick={handleSubmenu}>more</button>}

      <ul
        className={`${
          subMenu ? "subMenu subMenuShow" : "subMenu subMenuClose"
        }`}
      >
        <SubMenu item={item} handleSubmenu={handleSubmenu} subMenu={subMenu} />
      </ul>
    </>
  );
};

export default NavMenu;
