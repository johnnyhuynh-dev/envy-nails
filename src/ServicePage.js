import React from "react";
import ImageDemo from "./ImageDemo";
import Loader from "./Loader";
import Footer from "./Footer";
import price from "./price.json";
import "./ServicePage.css";
import { motion } from "framer-motion";

export default function ServicePage({ images, loading, serviceName }) {
  const animationVariant = {
    initial: {
      x: -1000,
      opacity: 0,
    },
    animate: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        opacity: {
          duration: 1,
        },
        delay: custom,
        type: "tween",
      },
    }),
  };
  return (
    <div className="service-page">
      <motion.div
        className="separator-image"
        variants={animationVariant}
        initial="initial"
        animate="animate"
        custom={0.8}
      >
        {images && <img src={images[1].url} height={200} alt="separator"></img>}
      </motion.div>

      <motion.h2
        className="service-title"
        variants={animationVariant}
        initial="initial"
        animate="animate"
        custom={1}
      >
        {serviceName}
      </motion.h2>

      <div className="photos-container">
        {loading ? (
          <Loader />
        ) : (
          images.map((image, index) => (
            <ImageDemo
              key={image.id}
              src={image.url}
              serviceName={price.nails[index].service}
              price={price.nails[index].price.Polish}
            />
          ))
        )}
      </div>
      {!loading && <Footer />}
    </div>
  );
}
