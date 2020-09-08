import React, { useState } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Loader from "./Loader";
import "./HomePage.css";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="home-container">
      {loading && <Loader />}
      <Carousel showTime={2} loading={loading} setLoading={setLoading} />
      <Footer />
    </div>
  );
}
