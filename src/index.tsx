import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import { Routes } from "./routes";
import { AuthProvider } from "./hooks/auth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
);
