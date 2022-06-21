import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import TravelBooking from "./pages/TravelBooking";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Packages" component={Packages}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/TravelBooking" component={TravelBooking}></Route>
      
      </Switch>
    </>
  );
};

export default App;
