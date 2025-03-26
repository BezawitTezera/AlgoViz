import React from "react";

interface TreeVisualizerProps {
  inputData: string | null;
  speed: number;
}

const TreeVisualizer: React.FC<TreeVisualizerProps> = ({
  inputData,
  speed,
}) => {
  return (
    <div>
      <h2>Tree Visualizer</h2>
      <p>Input Data: {inputData}</p>
      <p>Speed: {speed}ms</p>
    </div>
  );
};

export default TreeVisualizer;
