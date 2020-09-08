import React, { useState } from "react";
import "./NavBar.css";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

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
      opacity: 0,
      x: "-100vw",
      y: "-100vw",
    },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
      },
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      x: "-100vw",
      y: "-100vw",
      transition: {
        duration: 0.3,
      },
    },
  };
  // Navbar items
  const navItemVariant = {
    hover: {
      opacity: 0.8,
      x: 10,
    },
    hidden: {
      opacity: 0.6,
    },
    visible: {
      x: [0, 3, -3, 0],
      y: [0, 3, -3, 0],
      opacity: 1,
      transition: {
        duration: 1,
      },
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
          animate={isToggled ? { opacity: 0 } : { opacity: 1 }}
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
              exit="exit"
            >
              <motion.div
                variants={navItemVariant}
                whileHover="hover"
                onClick={() => setIsToggled(false)}
              >
                <NavLink exact to="/">
                  Home
                </NavLink>
              </motion.div>
              <motion.div
                variants={navItemVariant}
                whileHover="hover"
                onClick={() => setIsToggled(false)}
              >
                <NavLink to="/nails">Nails</NavLink>
              </motion.div>
              <motion.div
                variants={navItemVariant}
                whileHover="hover"
                onClick={() => setIsToggled(false)}
              >
                <NavLink to="/eyelash">Eyelash Extension</NavLink>
              </motion.div>
              <motion.div
                variants={navItemVariant}
                whileHover="hover"
                onClick={() => setIsToggled(false)}
              >
                <NavLink to="/waxing">Waxing</NavLink>
              </motion.div>
              <motion.div
                variants={navItemVariant}
                whileHover="hover"
                onClick={() => setIsToggled(false)}
              >
                <NavLink to="/pricing">Pricing</NavLink>
              </motion.div>
              <motion.div
                variants={navItemVariant}
                whileHover="hover"
                onClick={() => setIsToggled(false)}
              >
                <NavLink to="/contact">Contact</NavLink>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
