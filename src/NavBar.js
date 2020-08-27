import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [isToggled, setIsToggled] = useState(false);

  function toggleNavbar() {
    setIsToggled(!isToggled);
  }

  const navItemsClassName = `nav-items ${isToggled ? "active" : ""}`;

  return (
    <div className="navbar">
      <div onClick={toggleNavbar} className="nav-icon">
        <div className="first-stripe"></div>
        <div className="second-stripe"></div>
        <div className="third-stripe"></div>
      </div>
      <div className={navItemsClassName}>
        <div>Nails</div>
        <div>Eyelash Extension</div>
        <div>Waxing</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
