import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Containers/Login";
import Register from "./Containers/Register";

export default () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" exact component={Register} />
  </Switch>
);
