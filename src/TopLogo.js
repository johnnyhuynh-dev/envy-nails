import React from "react";
import largeLogo from "./assets/envy-logo3.jpg";
import "./TopLogo.css";
import { motion } from "framer-motion";

export default function TopLogo() {
  return (
    <motion.div
      className="top-logo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src={largeLogo} alt="top-logo" />
    </motion.div>
  );
}
