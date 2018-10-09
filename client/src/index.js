import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App"
import { Provider } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import axios from "axios"

import registerServiceWorker from "./registerServiceWorker";
window.axios=axios
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();


