import React from "react";
import "animate.css";
import { createRoot } from "react-dom/client";
import HeroesApp from "./HeroesApp";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>
);
