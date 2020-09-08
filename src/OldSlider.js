// import React, { useState, useEffect } from "react";
// import "./Slider.css";
// import { motion, AnimatePresence } from "framer-motion";
// import ProgressBar from "./ProgressBar";

// export default function Slider({ images, showTime }) {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [progressLoading, setProgressLoading] = useState(true);

//   // these two functions for integration of next and previous buttons later on
//   const moveToNextImage = () => {
//     // setDirection(1);
//     if (index === images.length - 1) {
//       setIndex(0);
//     } else {
//       setIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   // const moveToPreviousImage = () => {
//   //   setDirection(-1);
//   //   if (index === 0) {
//   //     setIndex(images.length - 1);
//   //   } else {
//   //     setIndex((prevIndex) => prevIndex - 1);
//   //   }
//   // };

//   // auto loading the image
//   useEffect(() => {
//     if (progressLoading) {
//       return;
//     } else {
//       setTimeout(() => {
//         setProgressLoading(true);
//       }, 1000);
//       moveToNextImage();
//     }
//   }, [progressLoading]);

//   // create image variant for animation
//   const imageVariant = {
//     enter: (direction) => ({
//       opacity: 0,
//       x: direction > 0 ? 1000 : -1000,
//     }),
//     center: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 40,
//         duration: 0.5,
//         ease: "easeIn",
//         opacity: {
//           duration: 1,
//         },
//       },
//     },
//     exit: (direction) => ({
//       opacity: 1,
//       x: direction > 0 ? -1000 : 1000,
//       transition: {
//         duration: 0.5,
//         ease: "easeIn",
//       },
//     }),
//   };

//   return (
//     <div className="slider">
//       {/* set a key to re-render progress bar every time it finishes  */}

//       {progressLoading && (
//         <ProgressBar
//           showTime={showTime}
//           setProgressLoading={setProgressLoading}
//           key={images[index].id}
//         />
//       )}

//       <div className="center">
//         <AnimatePresence custom={direction} exitBeforeEnter>
//           {images && (
//             <motion.img
//               key={images[index].id}
//               src={images[index].url}
//               alt="center"
//               variants={imageVariant}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               custom={direction}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//       {/* <button onClick={moveToNextImage}>Next</button> */}
//       {/* <button onClick={moveToPreviousImage}>Prev</button> */}
//     </div>
//   );
// }
