import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import animationVariant from "./animationVariant";
import bookNow from "./assets/booking.png";
import smartphone from "./assets/smartphone.png";
import bookingFB from "./assets/facebook-booking-icon.png";
import shopSeparator from "./assets/shop-separator.jpg";

export default function Contact() {
  const { REACT_APP_GOOGLE_API } = process.env;
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${REACT_APP_GOOGLE_API}
  &q=place_id:ChIJf1wOoZt1bqoRdtOA51XMoJY&language=en`;

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ damping: 10, duration: 1 }}
    >
      <motion.div
        className="separator-image"
        variants={animationVariant}
        initial="initial"
        animate="animate"
        delay={0.8}
      >
        <img src={shopSeparator} height={200} alt="separator"></img>
      </motion.div>
      <h2 className="service-title">CONTACT</h2>
      <h3>Envy Nails and Lashes Hobart</h3>

      <div className="address">
        <i>
          <div>Shop 3, 113 - 115 Main Road</div>
          <div>Moonah, TAS 7009</div>
        </i>
      </div>

      <div className="booking">
        <img src={bookNow} alt="click to book now" />
        <div className="phone-and-facebook">
          <a href="tel: 0432-235-635">
            <div className="phone-number">
              <motion.img
                src={smartphone}
                animate={{ y: [1.5, -1.5, 1, -1, 0], x: [-1.5, 1.5, 1, -1, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              ></motion.img>
              <span>0432 235 635</span>
            </div>
          </a>
          <span>or via our FaceBook page:</span>
          <a href="https://www.facebook.com/Envynailsandlasheshobart/">
            <motion.img
              width={45}
              src={bookingFB}
              animate={{ y: [1.5, -1.5, 1, -1, 0], x: [-1.5, 1.5, 1, -1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            ></motion.img>
          </a>
        </div>
      </div>

      <div className="trading-hours">
        <h4>Trading Hours</h4>
        <div className="trading-hours-table">
          <div>Monday</div>
          <div>9am - 5:30pm</div>
          <div>Tuesday</div>
          <div>9am - 5:30pm</div>
          <div>Wednesday</div>
          <div>9am - 5:30pm</div>
          <div>Thursday</div>
          <div>9am - 5:30pm</div>
          <div>Friday</div>
          <div>9am - 5:30pm</div>
          <div>Saturday</div>
          <div>9am - 5pm</div>
          <div>Sunday</div>
          <div>10am - 4pm</div>
        </div>
      </div>

      <div className="map-container">
        <h4>Get Direction</h4>
        <iframe
          className="google-map"
          title="google map"
          height="400"
          frameBorder="0"
          src={mapSrc}
        ></iframe>
      </div>
    </motion.div>
  );
}
