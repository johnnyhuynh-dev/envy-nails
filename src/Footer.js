import React from "react";
import "./Footer.css";
import logo from "./assets/envy-logo3.jpg";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="footer">
      <div className="logo">
        <img src={logo} height={100} alt="envy logo" />
      </div>
      <div className="address">
        <div>Shop 3, 113 - 115 Main Road</div>
        <div>Moonah, TAS 7009</div>
      </div>
      <a className="phone-number" href="tel:0432-235-635">
        <motion.i
          animate={{ scale: [1.1, 0.9, 1] }}
          transition={{ duration: 0.5, yoyo: 2 }}
          className="fas fa-mobile-alt"
        ></motion.i>
        <span>0432 235 635</span>
      </a>
      <div className="social-media">
        <a
          href="https://www.facebook.com/envylashesHobart"
          className="social-icons"
        >
          <motion.i
            animate={{ scale: [1.1, 0.9, 1] }}
            transition={{ duration: 0.5, yoyo: 2 }}
            className="fab fa-facebook-f"
          ></motion.i>
        </a>
        <a href="https://www.instagram.com" className="social-icons">
          <motion.i
            animate={{ scale: [1.1, 0.9, 1] }}
            transition={{ duration: 0.5, yoyo: 2 }}
            className="fab fa-instagram"
          ></motion.i>
        </a>
      </div>
    </section>
  );
}
