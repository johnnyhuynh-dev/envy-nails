import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import bookNow from "./assets/booking.png";
import useFetchDocuments from "./useFetchDocuments";
import animationVariant from "./animationVariant";

export default function Contact() {
  const { REACT_APP_GOOGLE_API } = process.env;
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${REACT_APP_GOOGLE_API}
  &q=place_id:ChIJZ7qDIup0bqoRJucXbOIFxDU&language=en`;

  const { docs: images } = useFetchDocuments("eyelash");
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
        {images && <img src={images[1].url} height={200} alt="separator"></img>}
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
        <a href="tel: 0432-235-635">
          <img src={bookNow} alt="click to book now" />
          <div className="phone-number">
            <motion.i
              animate={{ y: [1.5, -1.5, 1, -1, 0], x: [-1.5, 1.5, 1, -1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
              className="fas fa-mobile-alt"
            ></motion.i>
            <span>0432 235 635</span>
          </div>
        </a>
      </div>

      <div className="trading-hours">
        <h4>Trading Hours</h4>
        <div className="trading-hours-table">
          <div>Monday</div>
          <div>09:00 - 17:00</div>
          <div>Tuesday</div>
          <div>09:00 - 17:00</div>
          <div>Wednesday</div>
          <div>09:00 - 17:00</div>
          <div>Thursday</div>
          <div>09:00 - 17:30</div>
          <div>Friday</div>
          <div>09:00 - 17:00</div>
          <div>Saturday</div>
          <div>09:00 - 17:30</div>
          <div>Sunday</div>
          <div>09:00 - 17:00</div>
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
