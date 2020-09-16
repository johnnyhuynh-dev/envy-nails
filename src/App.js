import React, { useEffect, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TopLogo from "./TopLogo";
import Loader from "./Loader";
const HomePage = React.lazy(() => import("./HomePage"));
const Nails = React.lazy(() => import("./Nails"));
const EyelashExtension = React.lazy(() => import("./EyelashExtension"));
const Waxing = React.lazy(() => import("./Waxing"));
const Pricing = React.lazy(() => import("./Pricing"));
const Contact = React.lazy(() => import("./Contact"));
const Lifting = React.lazy(() => import("./Lifting"));

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
      <Suspense fallback={<Loader />}>
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
          <Route path="/lifting">
            <Lifting />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Suspense>
      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;
