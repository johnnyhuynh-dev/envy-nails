import React from "react";
import "./Footer.css";
import logo from "./assets/large-logo.jpg";
import { motion } from "framer-motion";
import fbLogo from "./assets/facebook-icon-48.png";
import instaLogo from "./assets/icons8-instagram-64.png";
import follow from "./assets/follow.png";

export default function Footer() {
  return (
    <section className="footer">
      <div className="logo">
        <img src={logo} height={100} alt="envy logo" />
      </div>
      <img src={follow} alt="follow us icon" />
      <div className="social-media">
        <a
          href="https://www.facebook.com/envylashesHobart"
          className="social-icons"
        >
          <motion.img
            src={fbLogo}
            animate={{ scale: [1, 1.1, 0.9, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "circInOut",
            }}
          />
        </a>

        <a
          href="https://www.instagram.com/envynailslashes_hobart/"
          className="social-icons"
        >
          <motion.img
            src={instaLogo}
            animate={{ scale: [1, 1.1, 0.9, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "circOut",
            }}
          />
        </a>
      </div>
    </section>
  );
}
