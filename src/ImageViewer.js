import React from "react";
import "./ImageViewer.css";
import rightArrow from "./assets/next-arrow-icon.png";
import leftArrow from "./assets/previous-arrow-icon.png";

export default function ImageViewer({
  url,
  clickOutside,
  clickNext,
  clickPrev,
}) {
  return (
    <div className="outer-modal" onClick={clickOutside}>
      <div className="inner-modal">
        <img
          className="left-arrow-button"
          src={leftArrow}
          alt="move to previous"
          onClick={clickPrev}
        />
        <img
          className="img-full-size"
          src={url}
          alt="full size on top of the modal"
          height="300"
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
