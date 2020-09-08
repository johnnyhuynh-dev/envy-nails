import React, { useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import UploadForm from "./firebase/UploadForm";
import TopLogo from "./TopLogo";
import EyelashExtension from "./EyelashExtension";
import Pricing from "./Pricing";
import HomePage from "./HomePage";
import Contact from "./Contact";
import Waxing from "./Waxing";
import Nails from "./Nails";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <NavBar />
      {!isHomePage && <TopLogo />}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/nails">
          <Nails />
        </Route>
        <Route path="/eyelash">
          <EyelashExtension />
        </Route>
        <Route path="/waxing">
          <Waxing />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      {!isHomePage && <Footer />}
      {/* <UploadForm /> */}
    </div>
  );
}

export default App;
