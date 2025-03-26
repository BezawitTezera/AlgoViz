import React from "react";

interface ArrayVisualizerProps {
  inputData: string | null;
  speed: number;
}

const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({
  inputData,
  speed,
}) => {
  return (
    <div>
      <h2>Array Visualizer</h2>
      <p>Input Data: {inputData}</p>
      <p>Speed: {speed}ms</p>
    </div>
  );
};

export default ArrayVisualizer;
