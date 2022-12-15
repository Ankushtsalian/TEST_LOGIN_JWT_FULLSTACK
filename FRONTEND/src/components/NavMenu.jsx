import React from "react";

const NavMenu = ({ item, handleSubmenu, i }) => {
  return (
    <li key={i}>
      {item.name}
      {item.items && <button onClick={handleSubmenu}>more</button>}
      <ul>
        {item?.items?.map((i, idx) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </li>
  );
};

export default NavMenu;
