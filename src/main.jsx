import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { UI } from "./components/UI.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <UI />
    <Canvas shadows>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Canvas>
  </>
);
