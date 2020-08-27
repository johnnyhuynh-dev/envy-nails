import React, { useState, useEffect, useRef } from "react";
import "./ProgressBar.css";

export default function ProgressBar({ slidingTime }) {
  const [startWidth, setStartWidth] = useState(0);
  const outerRef = useRef();
  //   Interval to increase the width of the inner bar and cleaning up whenever it reaches the width of the outer bar

  useEffect(() => {
    // get the width value out of the outer bar
    const outerWidthString = getComputedStyle(
      outerRef.current
    ).getPropertyValue("width");
    const finalWidth = +outerWidthString.replace("px", "");
    // the smaller amount the inner bar moves in each render, the smoother the transition
    const pixelAmountPerFiveMs = finalWidth / (slidingTime * 200);

    if (startWidth >= finalWidth) {
      return;
    }

    const widthInterval = setInterval(() => {
      setStartWidth((startWidth) => startWidth + pixelAmountPerFiveMs);
    }, 5);
    return () => clearInterval(widthInterval);
  }, [startWidth]);

  return (
    <div className="progress-bar">
      <div className="outer-bar" ref={outerRef}>
        <div className="inner-bar" style={{ width: startWidth }}></div>
      </div>
    </div>
  );
}
