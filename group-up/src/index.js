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

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
