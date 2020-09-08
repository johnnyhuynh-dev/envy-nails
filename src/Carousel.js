import React, { useState, useRef, useEffect } from "react";
import photo1 from "./assets/slideshow/1.jpg";
import photo2 from "./assets/slideshow/2.jpg";
import photo3 from "./assets/slideshow/3.jpg";
import photo4 from "./assets/slideshow/4.jpg";
import photo5 from "./assets/slideshow/5.jpg";
import photo6 from "./assets/slideshow/6.jpg";
import { motion } from "framer-motion";
import "./Carousel.css";

export default function Carousel({ showTime }) {
  const images = [
    "photo6",
    "photo1",
    "photo2",
    "photo3",
    "photo4",
    "photo5",
    "photo6",
    "photo1",
  ];
  const [index, setIndex] = useState(1);
  const [slidingEffect, setSlidingEffect] = useState(true);
  const [containerWidth, setContainerWidth] = useState(null);
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

  // calculate the width of the carousel container
  useEffect(() => {
    const width = getComputedStyle(carouselRef.current).getPropertyValue(
      "width"
    );
    setContainerWidth(+width.replace("px", ""));
  }, [containerWidth]);

  // set interval for auto sliding
  useEffect(() => {
    const carouselInterval = setInterval(() => nextPhoto(), showTime * 1000);
    return () => clearInterval(carouselInterval);
  });

  // after the animation of first/last photo finishes, jump to its pseudo photo but with no effect
  function resetPosition() {
    if (lastPhoto || firstPhoto) {
      setSlidingEffect(false);
      lastPhoto ? setIndex(1) : setIndex(images.length - 2);
    } else {
      setSlidingEffect(true);
    }
  }

  return (
    <motion.div
      className="carousel-container"
      ref={carouselRef}
      initial={{ x: "100vw", opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 1,
        type: "tween",
      }}
    >
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
          src={photo6}
          width={containerWidth}
          alt="slideshow"
          onLoad={() => console.log("loaded")}
        />
        <img src={photo1} width={containerWidth} alt="slideshow" />
        <img src={photo2} width={containerWidth} alt="slideshow" />
        <img src={photo3} width={containerWidth} alt="slideshow" />
        <img src={photo4} width={containerWidth} alt="slideshow" />
        <img src={photo5} width={containerWidth} alt="slideshow" />
        <img src={photo6} width={containerWidth} alt="slideshow" />
        <img src={photo1} width={containerWidth} alt="slideshow" />
      </motion.div>
    </motion.div>
  );
}
