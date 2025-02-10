import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./components/App/App";
import "./components/App/App.module.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Toaster />
    <App />
  </StrictMode>
);
