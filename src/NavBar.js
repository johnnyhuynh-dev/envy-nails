import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-icon">
        <div className="first-stripe"></div>
        <div className="second-stripe"></div>
        <div className="third-stripe"></div>
      </div>
      <div className="nav-items">
        <div>Nails</div>
        <div>Eyelash Extension</div>
        <div>Waxing</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
