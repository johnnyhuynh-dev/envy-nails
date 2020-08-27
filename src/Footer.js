import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="address">
        <div>Shop 3 / 113 - 115 Main Rd</div>
        <div>Moonah, TAS 7009</div>
      </div>
      <a className="phone-number" href="tel:0432-235-635">
        <i className="fas fa-mobile-alt"></i>
        <span>0432 235 635</span>
      </a>
      <div className="social-media">
        <a
          href="https://www.facebook.com/envylashesHobart"
          className="social-icons"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com" className="social-icons">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </section>
  );
}
