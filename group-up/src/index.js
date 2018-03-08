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


import loggedIn from './layouts/logged_in.jsx';
import EmptyLayout from './layouts/blank.jsx';
import Routes from "./Routes";
import Login from "./Containers/Login";

import Register from "./Containers/Register";



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render((

   <Router>
   <div>
      <Route  path="/register" component={loggedIn}>
        <Route path="/register" component={Register} />
      </Route>
        <Route path="/home" component={EmptyLayout}>
          <Route path="/home" component={Login} />
        </Route>


      <Provider store={store}>
         <Route component={App} />
      </Provider>
   </div>
   </Router>
),document.getElementById('root'))
registerServiceWorker();
