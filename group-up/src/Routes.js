import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Containers/Login";
import Register from "./Containers/Register";
import ListingsPage from "./Containers/ListingsPage";
import RequestForm from "./Containers/RequestForm";

export default ({ location }) => (
  <Switch>
    <Route location={location} path="/" exact component={Login} />

    <Route location={location} path="/Login" exact component={Login} />
    <Route
      location={location}
      path="/listings"
      exact
      component={ListingsPage}
    />

    <Route location={location} path="/register" exact component={Register} />
    <Route location={location} path="/request" exact component={RequestForm} />
  </Switch>
);
