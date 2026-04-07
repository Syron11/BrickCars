import React from "react";
import "@google/model-viewer";

const ModelView = ({ modelPath }) => {
  return (
    <div className="w-full h-full relative">
      <model-viewer
        src={modelPath}
        alt="3D Модель Grid Legends"
        // АВТОМАТИКА
        auto-rotate
        rotation-interval="0" 

        // ВИЗУАЛ
        interaction-prompt="none"
        shadow-intensity="1.5"
        environment-image="neutral"
        exposure="1.2"
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          outline: "none",
          "--poster-color": "transparent",

          pointerEvents: "none",
        }}
      ></model-viewer>
    </div>
  );
};

export default ModelView;
