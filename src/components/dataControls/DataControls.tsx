import React, { useState } from "react";
import AlgorithmSelector from "./AlgorithmSelector";
import DataGenerator from "./DataGenerator";
import DataInput from "./DataInput";
import { AlgorithmName } from "./AlgorithmSelector";
import SpeedControl from "./SpeedControl";

interface DataControlsProps {
  onAlgorithmSelect: (algo: AlgorithmName | null) => void;
  onSpeedChange: (speed: number) => void;
  onDataInput: (data: string | null) => void;
}

const DataControls: React.FC<DataControlsProps> = ({
  onAlgorithmSelect,
  onSpeedChange,
  onDataInput,
}) => {
  const [useGeneratedData, setUseGeneratedData] = useState(true);

  const handleToggle = () => setUseGeneratedData((prev) => !prev);

  const handleDataChange = (data: string | null) => {
    if (!data) return; // Avoid empty or null data
    onDataInput(data); // Pass data up to HomePage
  };

  return (
    <div className="mt-20 p-2">
      <h2 className="text-2xl font-bold">Algorithm Settings</h2>

      <AlgorithmSelector onAlgorithmSelect={onAlgorithmSelect} />

      <p className="text-white text-xl mt-4 mb-2 text-center">
        Use Sample Data
      </p>
      <div className="mt-4 flex items-center justify-center">
        <button
          onClick={handleToggle}
          className={`relative inline-flex items-center h-6 rounded-full w-14 transition-colors duration-300 ease-in-out ${
            useGeneratedData ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`inline-block w-6 h-6 bg-white rounded-full transform transition-transform duration-300 ease-in-out ${
              useGeneratedData ? "translate-x-8" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      <div className="mt-4">
        {useGeneratedData ? (
          <DataGenerator onDataChange={handleDataChange} />
        ) : (
          <DataInput onDataChange={handleDataChange} />
        )}
      </div>

      <div className="mt-7 px-3">
        <SpeedControl onSpeedChange={onSpeedChange} />
      </div>
    </div>
  );
};

export default DataControls;
