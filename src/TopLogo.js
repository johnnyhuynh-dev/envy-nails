import React from "react";
import smallLogo from "./assets/small-logo.jpg";
import "./TopLogo.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TopLogo() {
  return (
    <motion.div
      className="top-logo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link to="/">
        <img src={smallLogo} alt="top-logo" />
      </Link>
    </motion.div>
  );
}
