import React from "react";
import "./ImageViewer.css";
import { motion } from "framer-motion";
import rightArrow from "./assets/next-arrow-icon.png";
import leftArrow from "./assets/previous-arrow-icon.png";
import closeButton from "./assets/close-button.png";

export default function ImageViewer({
  url,
  clickOutside,
  clickCloseButton,
  clickNext,
  clickPrev,
  withArrow,
}) {
  return (
    <div className="outer-modal" onClick={clickOutside}>
      <div className="inner-modal">
        <img
          className="close-button"
          src={closeButton}
          alt="close button"
          onClick={clickCloseButton}
        />
        <img
          className="left-arrow-button"
          src={leftArrow}
          alt="move to previous"
          onClick={clickPrev}
        />
        <motion.img
          // key={key}
          className="img-full-size"
          src={url}
          alt="full size on top of the modal"
          height="300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        />
        <img
          className="right-arrow-button"
          src={rightArrow}
          alt="move to next"
          onClick={clickNext}
        />
      </div>
    </div>
  );
}
