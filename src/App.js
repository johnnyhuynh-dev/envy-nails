import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ProgressBar from "./ProgressBar";
import UploadForm from "./firebase/UploadForm";
import Slider from "./Slider";
import Loader from "./Loader";
import useFetchDocuments from "./useFetchDocuments";
import TopLogo from "./TopLogo";
import EyelashExtension from "./EyelashExtension";
import Pricing from "./Pricing";

function App() {
  const { docs: images, loading } = useFetchDocuments("eyelash");

  return (
    <div>
      <NavBar />
      <TopLogo />
      <Pricing />
      {/* <EyelashExtension /> */}
      {/* <UploadForm /> */}
      {/* <div className="slider-container">
        {loading ? <Loader /> : <Slider images={images} showTime={3} />}
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
