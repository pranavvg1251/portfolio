import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConvexReactClient } from "convex/react";
import App from "./App";
import "./index.css";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/portfolio">
      <App />    
  </BrowserRouter>
);
