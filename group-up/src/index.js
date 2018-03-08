import React from "react";
import ReactDOM from "react-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import rootReducer from "./reducers/rootReducer";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";


import navBarLoggedIn from './Components/navBarLoggedIn.js';
import navBarBlank from './Components/navBarBlank.js';

import Login from "./Containers/Login";

import Register from "./Containers/Register";



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render((

   <Router>
   <div>
      <Route exact path="/listingspage" component={navBarLoggedIn}></Route>
      <Route exact path="/register" component={navBarBlank}></Route>
      <Route exact path="/"  component={navBarBlank}></Route>
      <Provider store={store}>
         <Route component={App} />
      </Provider>
   </div>
   </Router>
),document.getElementById('root'))
registerServiceWorker();
