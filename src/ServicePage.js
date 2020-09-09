import React from "react";
import ImageDemo from "./ImageDemo";
import Loader from "./Loader";
import price from "./price.json";
import "./ServicePage.css";
import { motion } from "framer-motion";
import animationVariant from "./animationVariant";

export default function ServicePage({ images, loading, serviceName }) {
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
            <>
              <ImageDemo
                key={image.id}
                src={image.url}
                serviceName={price.nails[index].service}
                price={price.nails[index].price.Polish}
              />
            </>
          ))
        )}
      </div>
    </div>
  );
}
