import React, { useState, useEffect } from "react";

// Type to represent the sample data categories
type sampleDataTypes = "Random" | "Sorted" | "Reversed";

// Sample data for each type
const sampleData: Record<sampleDataTypes, number[][]> = {
  Random: [[7, 2, 4, 5, 9]],
  Sorted: [[3, 4, 6, 9, 12]],
  Reversed: [[7, 4, 1, 0, -1]],
};

interface DataGeneratorProps {
  onDataChange: (data: string | null) => void;
}

const DataGenerator: React.FC<DataGeneratorProps> = ({ onDataChange }) => {
  const [selectedSample, setSelectedSample] =
    useState<sampleDataTypes>("Random");

  // Derive currentData from selectedSample
  const currentData = sampleData[selectedSample];

  // Format data as string for display
  const formatDataForDisplay = (data: number[][]) => data.flat().join(", ");

  // Handle change in selected sample type
  const handleSampleDataType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as sampleDataTypes; // Type assertion
    setSelectedSample(selected);
    onDataChange(formatDataForDisplay(sampleData[selected]));
  };

  // Send initial data when the component mounts
  useEffect(() => {
    onDataChange(formatDataForDisplay(sampleData[selectedSample]));
  }, []); // Empty dependency means it runs once on mount

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg text-start mb-4">Choose Sample Data Type</h2>

      <div className="mb-4">
        <select
          value={selectedSample}
          onChange={handleSampleDataType}
          className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Random">Random</option>
          <option value="Sorted">Sorted</option>
          <option value="Reversed">Reversed</option>
        </select>
      </div>

      <div className="mt-4 text-start">
        <h3 className="text-lg mb-2">Selected Data:</h3>
        <p className="text-gray-700">{formatDataForDisplay(currentData)}</p>
      </div>
    </div>
  );
};

export default DataGenerator;
