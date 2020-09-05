import React from "react";
import "./ImageDemo.css";
import { motion } from "framer-motion";

export default function ImageDemo({ src, price, serviceName }) {
  const servicePhotoVariant = {
    initial: {
      x: -1000,
      opacity: 0,
    },
    animate: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 16,
        delay: custom,
        opacity: {
          duration: 1,
        },
      },
    }),
  };
  return (
    <motion.div
      className="demo-photo"
      variants={servicePhotoVariant}
      initial="initial"
      animate="animate"
      transition="transition"
      custom={1.2}
    >
      <div className="service-info">
        <div className="service-name">{serviceName}</div>
        <div className="price">$ {price}</div>
      </div>
      <img src={src} alt="service demo" height={200} />
    </motion.div>
  );
}
