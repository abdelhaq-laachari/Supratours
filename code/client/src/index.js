import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes";
import "./index.css";
import { Provider } from 'react-redux'
import {store} from './app/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Routes />
  </Provider>
);
