import React from "react";
import ModelViewer from "./ModelViewer";

// For a quick test, put a model file in web/public/ as 'sample.stl' or 'sample.step'
export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>MakerVault ✅</h1>
      <p>3D preview test below (expects /sample.stl in /public):</p>
      <div style={{ width: 480, height: 360, border: "1px solid #ddd", borderRadius: 12, overflow: "hidden" }}>
        <ModelViewer url="/sample.stl" ext="stl" />
      </div>
    </div>
  );
}
