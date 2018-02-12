import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Containers/Login";

export default () => (
  <Switch>
    <Route path="/" exact component={Login} />
  </Switch>
);
