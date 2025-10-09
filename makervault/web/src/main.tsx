import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // you can comment this out if you're unsure
import App from "./ui/App";

const el = document.getElementById("root");
if (!el) throw new Error("#root not found");
createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
