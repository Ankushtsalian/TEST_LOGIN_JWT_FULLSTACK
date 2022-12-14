import React from "react";
import Logout from "./Logout";
import "../styles/navbar.css";

import chevron from "../Assets/chevron.svg";
const Navbar = () => {
  return (
    <nav class="navbar">
      <button onclick="toggleMenu()" class="burger"></button>
      <button class="button">Home</button>
      <div class="dropdowns">
        <div class="dropdown">
          <button class="button">
            Services
            <img src={chevron} />
          </button>
          <div class="dropdown-menu">
            <button>UX/UI Design</button>
            <button>Web Applications</button>
            <button>SEO Advice</button>
          </div>
        </div>
        <div class="dropdown">
          <button class="button">
            Products
            <img src={chevron} />
          </button>
          <div class="dropdown-menu">
            <button>Learn CSS Ebook</button>
            <button>Security Course</button>
            <button>Masterclass Bundle</button>
          </div>
        </div>
        <div class="dropdown">
          <button class="button">
            Support
            <img src={chevron} />
          </button>
          <div class="dropdown-menu">
            <button>Live Chat</button>
            <button>Send Email</button>
            <button>Request Help</button>
          </div>
        </div>
      </div>
      <Logout />
    </nav>
  );
};

export default Navbar;
