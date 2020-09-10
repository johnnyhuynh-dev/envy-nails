import React, { useState, useEffect } from "react";
import ImageDemo from "./ImageDemo";
import Loader from "./Loader";
import price from "./price.json";
import "./ServicePage.css";
import { motion } from "framer-motion";
import animationVariant from "./animationVariant";
import Modal from "./Modal";
import ImageViewer from "./ImageViewer";

export default function ServicePage({ images, loading, serviceName }) {
  const [current, setCurrent] = useState({
    currentIndex: null,
    isToggled: false,
  });

  function showModal(index) {
    setCurrent({ currentIndex: index, isToggled: true });
  }

  function clickOutside(e) {
    if (e.target.className === "outer-modal") {
      setCurrent({ ...current, isToggled: false });
    }
  }

  function clickCloseButton() {
    setCurrent({ ...current, isToggled: false });
  }
  function nextPhoto() {
    setCurrent((prevState) => {
      if (prevState.currentIndex === images.length - 1) {
        return { ...current, currentIndex: 0 };
      } else {
        return { ...current, currentIndex: prevState.currentIndex + 1 };
      }
    });
  }

  function prevPhoto() {
    setCurrent((prevState) => {
      if (prevState.currentIndex === 0) {
        return { ...current, currentIndex: images.length - 1 };
      } else {
        return { ...current, currentIndex: prevState.currentIndex - 1 };
      }
    });
  }

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
            <div key={image.id}>
              <ImageDemo
                key={image.id}
                serviceName={price.nails[index].service}
                price={price.nails[index].price.Polish}
              >
                <img
                  src={image.url}
                  alt="service demo"
                  height={200}
                  onClick={() => {
                    showModal(index);
                  }}
                />
              </ImageDemo>

              {current.isToggled && (
                <Modal>
                  <ImageViewer
                    url={images[current.currentIndex].url}
                    clickOutside={clickOutside}
                    clickCloseButton={clickCloseButton}
                    clickNext={nextPhoto}
                    clickPrev={prevPhoto}
                    key={images[current.currentIndex].id}
                  />
                </Modal>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
