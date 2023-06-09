import "./index.css";
import App from "./App";
import { UserProvider, } from "./contexts/User";
import { LoadingProvider } from "./contexts/IsLoading";
import TimeAgo from "javascript-time-ago";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <LoadingProvider>
      <App/>
      </LoadingProvider>
    </UserProvider>
  </BrowserRouter>
);
