import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar, Landing } from "../components";

const Routes = () => (
  <Router>
    <NavBar />
    <Switch>
      {/*<Route exact path="/users/">
        <About />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    */}
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </Router>
)

export default Routes;
