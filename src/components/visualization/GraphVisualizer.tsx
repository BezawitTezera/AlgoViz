import React from "react";

interface GraphVisualizerProps {
  inputData: string | null;
  speed: number;
}

const GraphVisualizer: React.FC<GraphVisualizerProps> = ({
  inputData,
  speed,
}) => {
  return (
    <div>
      <h2>Graph Visualizer</h2>
      <p>Input Data: {inputData}</p>
      <p>Speed: {speed}ms</p>
    </div>
  );
};

export default GraphVisualizer;
