import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Containers/Login";
import Register from "./Containers/Register";

export default ({ location }) => (
  <Switch>
    <Route location={location} path="/" exact component={Login} />
    <Route location={location} path="/register" exact component={Register} />
  </Switch>
);
