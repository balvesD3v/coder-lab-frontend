import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import { Routes } from "./routes";
import { AuthProvider } from "./hooks/auth";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
      <ToastContainer theme="colored" stacked />
    </AuthProvider>
  </React.StrictMode>
);
