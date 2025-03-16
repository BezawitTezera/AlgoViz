import React, { useState } from "react";
import DataGenerator from "./DataGenerator";
import DataInput from "./DataInput";
import AlgorithmSelector from "./AlgorithmSelector";

const DataControls: React.FC = () => {
  const [useGeneratedData, setUseGeneratedData] = useState(true);

  const handlingToggle = () => {
    setUseGeneratedData(!useGeneratedData);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Algorithm Settings</h2>
      <AlgorithmSelector />
      <p className="text-white text-xl mt-4 mb-2">Use Sample Data</p>

      {/* Toggle Button with Sliding Effect */}
      <button
        onClick={handlingToggle}
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

      <div className="mt-4">
        {useGeneratedData ? <DataGenerator /> : <DataInput />}
      </div>
    </div>
  );
};

export default DataControls;
