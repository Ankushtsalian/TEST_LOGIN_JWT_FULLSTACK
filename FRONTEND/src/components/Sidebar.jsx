import { useRef, useState } from "react";
import "../styles/sidebar.css";

const Item = [
  {
    name: "Home",
    icon: "home",
  },
  {
    name: "Settings",
    icon: "settings",
    items: ["Display", "Editor", "Theme", "Interface"],
  },
  {
    name: "Create",
    icon: "add_box",
    items: ["Article", "Document", "Report"],
  },
  {
    name: "Account",
    icon: "lock",
    items: ["Dashboard", "Logout"],
  },
  {
    name: "Products",
    icon: "inventory_2",
  },
  {
    name: "Favourites",
    icon: "favorite",
  },
  {
    name: "Search",
    icon: "search",
  },
  {
    name: "Users",
    icon: "person",
  },
];

// const { name, icon, items } = Item;

const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const NavHeader = () => (
  <header className="sidebar-header">
    <button type="button">
      <Icon icon="menu" />
    </button>
    <span>Admin</span>
  </header>
);

const NavButton = ({ onClick, name, icon, isActive, hasSubNav }) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className={isActive ? "active" : ""}
  >
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
    {hasSubNav && <Icon icon={`expand_${isActive ? "less" : "more"}`} />}
  </button>
);

const SubMenu = ({ item, activeItem, handleClick }) => {
  const navRef = useRef(null);

  const isSubNavOpen = (items) => {};
  // items.some((i) => i === activeItem) || item === activeItem;

  return (
    <div
      className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}
      style={{
        height: !isSubNavOpen(item.name, item.items)
          ? 0
          : navRef.current?.clientHeight,
      }}
    >
      <div ref={navRef} className="sub-nav-inner">
        {item?.items.map((subItem) => (
          <NavButton
            onClick={handleClick}
            name={subItem}
            isActive={activeItem === subItem}
          />
        ))}
      </div>
    </div>
  );
};

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item) => {
    console.log("activeItem", activeItem);
    setActiveItem(item !== activeItem ? item : "");
  };

  return (
    <aside className="sidebar">
      <NavHeader />
      {Item.map((item, i) => (
        <div key={i}>
          {!item.items && (
            <NavButton
              onClick={() => handleClick(Item)}
              name={item.name}
              icon={item.icon}
              isActive={activeItem === item.name}
              hasSubNav={!!item.items}
            />
          )}
          {item.items && (
            <>
              <NavButton
                onClick={handleClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
              />
              <SubMenu
                activeItem={activeItem}
                handleClick={handleClick}
                item={item}
              />
            </>
          )}
        </div>
      ))}
    </aside>
  );
};
