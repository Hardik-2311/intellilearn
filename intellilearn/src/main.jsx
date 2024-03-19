import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Theme>
        <App />
      </Theme>
    </React.StrictMode>
  </BrowserRouter>
);
