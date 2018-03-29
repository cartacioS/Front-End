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
import navBarLoggedIn from "./Components/navBarLoggedIn";
import navBarBlank from "./Components/navBarBlank";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/requestpage" component={navBarLoggedIn} />
      <Route exact path="/listings" component={navBarLoggedIn} />
      <Route exact path="/register" component={navBarBlank} />
      <Route exact path="/request" component={navBarLoggedIn} />
      <Route exact path="/" component={navBarBlank} />

      <Provider store={store}>
        <Route component={App} />
      </Provider>
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
