import React, { useState, useRef, useEffect } from "react";
import photo1 from "./assets/slideshow/1.jpg";
import photo2 from "./assets/slideshow/2.jpg";
import photo3 from "./assets/slideshow/3.jpg";
import photo4 from "./assets/slideshow/4.jpg";
import photo5 from "./assets/slideshow/5.jpg";
import photo6 from "./assets/slideshow/6.jpg";
import photo7 from "./assets/slideshow/7.jpg";
import photo8 from "./assets/slideshow/8.jpg";
import photo9 from "./assets/slideshow/9.jpg";
import photo10 from "./assets/slideshow/10.jpg";

import { motion } from "framer-motion";
import "./Carousel.css";

export default function Carousel({ showTime, loading, setLoading }) {
  const images = [
    "photo10",
    "photo1",
    "photo2",
    "photo3",
    "photo4",
    "photo5",
    "photo6",
    "photo7",
    "photo8",
    "photo9",
    "photo10",
    "photo1",
  ];
  const [index, setIndex] = useState(1);
  const [slidingEffect, setSlidingEffect] = useState(true);
  const [containerWidth, setContainerWidth] = useState(null);
  const [startWidth, setStartWidth] = useState(0);
  const carouselRef = useRef(null);

  // auto reset the position when reach the last photo (the pseudo first photo) or the first photo (the pseudo last photo)
  const lastPhoto = index === images.length - 1;
  const firstPhoto = index === 0;

  // move one photo forward
  function nextPhoto() {
    if (index >= images.length - 1) {
      setIndex(images.length - 2);
    }
    setIndex((index) => index + 1);
  }

  // move one photo backward
  function prevPhoto() {
    if (index <= 0) {
      setIndex(1);
    }
    setIndex((index) => index - 1);
  }

  // after the animation of first/last photo finishes, jump to its pseudo photo but with no effect
  function resetPosition() {
    if (lastPhoto || firstPhoto) {
      setSlidingEffect(false);
      lastPhoto ? setIndex(1) : setIndex(images.length - 2);
    } else {
      setSlidingEffect(true);
    }
  }

  // calculate the width of the carousel container, update progress bar and check for when to move to next image
  useEffect(() => {
    const width = getComputedStyle(carouselRef.current).getPropertyValue(
      "width"
    );
    setContainerWidth(+width.replace("px", ""));

    // for progress bar
    const pixelAmountPerFiveMs = containerWidth / (showTime * 200);

    // don't start update the progress if image is still being loaded
    if (loading) return;
    const widthInterval = setInterval(() => {
      setStartWidth((startWidth) => startWidth + pixelAmountPerFiveMs);
    }, 5);

    // check for when to move to the next image
    if (startWidth > containerWidth) {
      nextPhoto();
      setStartWidth(0);
    }
    return () => clearInterval(widthInterval);
  }, [containerWidth, startWidth, loading]);

  return (
    <div
      className="carousel-container"
      ref={carouselRef}
      style={loading ? { opacity: 0 } : { opacity: 1 }}
    >
      <div className="progress-bar">
        <div className="outer-bar">
          <div className="inner-bar" style={{ width: startWidth }}></div>
        </div>
      </div>

      <motion.div
        className="carousel-slider"
        animate={{
          x: -(containerWidth * index),
        }}
        transition={
          slidingEffect
            ? { duration: 1, ease: [0.76, 0, 0.24, 1] }
            : { duration: 0 }
        }
        onAnimationComplete={resetPosition}
      >
        <img
          src={photo10}
          width={containerWidth}
          alt="slideshow"
          style={loading ? { opacity: 0 } : { opacity: 1 }}
        />
        <motion.img
          src={photo1}
          width={containerWidth}
          alt="slideshow"
          onLoad={() => {
            setLoading(false);
          }}
          style={loading ? { opacity: 0 } : { opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
        />
        <img src={photo2} width={containerWidth} alt="slideshow" />
        <img src={photo3} width={containerWidth} alt="slideshow" />
        <img src={photo4} width={containerWidth} alt="slideshow" />
        <img src={photo5} width={containerWidth} alt="slideshow" />
        <img src={photo6} width={containerWidth} alt="slideshow" />
        <img src={photo7} width={containerWidth} alt="slideshow" />
        <img src={photo8} width={containerWidth} alt="slideshow" />
        <img src={photo9} width={containerWidth} alt="slideshow" />
        <img src={photo10} width={containerWidth} alt="slideshow" />
        <img src={photo1} width={containerWidth} alt="slideshow" />
      </motion.div>
    </div>
  );
}
