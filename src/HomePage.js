import React from "react";
import useFetchDocuments from "./useFetchDocuments";
import Loader from "./Loader";
import Slider from "./Slider";
import "./HomePage.css";

export default function HomePage() {
  const { docs: images, loading } = useFetchDocuments("eyelash");
  return (
    <div className="slider-container">
      {loading ? <Loader /> : <Slider images={images} showTime={3} />}
    </div>
  );
}
