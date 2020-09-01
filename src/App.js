import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ProgressBar from "./ProgressBar";
import UploadForm from "./firebase/UploadForm";

function App() {
  return (
    <div>
      {/* <NavBar />
      <Footer />
      <ProgressBar slidingTime={3} /> */}
      <UploadForm />
    </div>
  );
}

export default App;
