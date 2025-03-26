import React, { useState } from "react";
import DataControls from "../components/dataControls/DataControls";
import VisualizationArea from "../components/visualization/VisualizationArea";
import { AlgorithmName } from "../components/dataControls/AlgorithmSelector";

const HomePage = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<AlgorithmName | null>(null);
  const [speed, setSpeed] = useState(50);
  const [visualize, setVisualize] = useState(false);
  const [inputData, setInputData] = useState<string | null>(null);

  // Handle visualize button
  const handleVisualize = () => {
    if (selectedAlgorithm && inputData) {
      setVisualize(true);
    }
  };

  // Reset for a new visualization
  const handleReset = () => {
    setVisualize(false); // Hide visualization
    setInputData(null); // Reset input data
    setSelectedAlgorithm(null); // Reset selected algorithm
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 min-h-screen bg-blue-200 p-4 overflow-y-auto">
        <DataControls
          onAlgorithmSelect={setSelectedAlgorithm}
          onSpeedChange={setSpeed}
          onDataInput={setInputData}
        />
        <div className="mt-4 flex justify-center">
          <button
            className="bg-white shadow-xl border border-gray-300 px-5 py-3 rounded-lg 
                    hover:bg-gray-100 active:scale-95 transition-all duration-300 text-xl"
            onClick={handleVisualize}
            disabled={!selectedAlgorithm || !inputData}
          >
            Visualize
          </button>
          {visualize && (
            <button
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg 
                      hover:bg-red-600 active:scale-95 transition-all duration-300 text-xl"
              onClick={handleReset}
            >
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 p-6">
        {visualize ? (
          <VisualizationArea
            algo={selectedAlgorithm}
            speed={speed}
            inputData={inputData}
          />
        ) : (
          <div className="text-center text-lg text-gray-600">
            Select an algorithm and input valid data to visualize.
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
