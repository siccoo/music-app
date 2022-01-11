import React from "react";
import Home from "./pages/home/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => (
  <Router>
    <Switch>
      {/* Render all page and component routes here */}
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
