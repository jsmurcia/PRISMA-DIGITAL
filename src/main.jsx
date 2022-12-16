import React from "react";
import ReactDOM from "react-dom/client";
import { RoutesApp } from "./RoutesApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <RoutesApp />
    </React.StrictMode>
  </BrowserRouter>
);
