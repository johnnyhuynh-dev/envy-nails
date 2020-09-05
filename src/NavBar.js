import React, { useState } from "react";
import "./NavBar.css";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isToggled, setIsToggled] = useState(false);

  function toggleNavbar() {
    setIsToggled(!isToggled);
  }

  function clickOutside(e) {
    if (e.target.className === "outer-nav-items") {
      setIsToggled(!isToggled);
    }
  }

  // the whole Navbar container
  const navBarVariant = {
    hidden: {
      scale: 0.5,
      x: -1000,
      y: -1000,
      opacity: 0.1,
    },
    visible: {
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
    },
    transition: {
      type: "tween",
    },
    exit: {
      scale: 0.5,
      x: -1000,
      y: -1000,
    },
  };
  // Navbar items
  const navItemVariant = {
    hidden: {
      x: -1000,
      scale: 0.5,
    },

    visible: {
      x: 0,
      scale: 1,
    },
    hover: {
      opacity: 0.8,
      x: 10,
    },
    exit: {
      x: -1000,
      scale: 0.1,
    },
  };

  return (
    <div className="navbar">
      <motion.div
        onClick={toggleNavbar}
        className="nav-icon"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* first stripe */}
        <motion.div
          className="first-stripe"
          animate={
            isToggled
              ? {
                  rotate: -40,
                  y: 10,
                  width: 25,
                }
              : { rotate: 0, y: 0, width: 30 }
          }
        ></motion.div>

        {/* second stripe */}

        <motion.div
          className="second-stripe"
          animate={
            isToggled
              ? { rotate: 40, y: 3, width: 25 }
              : { rotate: 0, y: 0, width: 30 }
          }
        ></motion.div>

        {/* third stripe */}

        <motion.div
          className="third-stripe"
          style={
            isToggled ? { visibility: "hidden" } : { visibility: "visible" }
          }
        ></motion.div>
      </motion.div>

      <AnimatePresence>
        {isToggled && (
          <div className="outer-nav-items" onClick={clickOutside}>
            <motion.div
              className="nav-items"
              variants={navBarVariant}
              initial="hidden"
              animate="visible"
              transition="transition"
              exit="exit"
            >
              <motion.div variants={navItemVariant} whileHover="hover">
                Nails
              </motion.div>
              <motion.div variants={navItemVariant} whileHover="hover">
                Eyelash Extension
              </motion.div>
              <motion.div variants={navItemVariant} whileHover="hover">
                Waxing
              </motion.div>
              <motion.div variants={navItemVariant} whileHover="hover">
                About
              </motion.div>
              <motion.div variants={navItemVariant} whileHover="hover">
                Contact
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
