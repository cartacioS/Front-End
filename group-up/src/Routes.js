import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Containers/Login";
import Register from "./Containers/Register";
import ListingsPage from "./Containers/ListingsPage"
export default ({ location }) => (
  <Switch>
    <Route location={location} path="/" exact component={Login} />
    <Route location={location} path="/ListingsPage" exact component={ListingsPage} />
    <Route location={location} path="/register" exact component={Register} />
  </Switch>
);
