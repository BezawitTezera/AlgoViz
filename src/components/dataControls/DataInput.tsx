import React, { useState } from "react";

interface DataInputProps {
  onDataChange: (data: string | null) => void;
}

const DataInput: React.FC<DataInputProps> = ({ onDataChange }) => {
  const [isData, setData] = useState("");
  const [error, setError] = useState("");

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData(value);

    // Validate that input contains only numbers separated by commas
    const isValid = /^(\d+)(,\d+)*$/.test(value);
    setError(isValid ? "" : "Please enter numbers separated by commas.");

    // If valid, send data to parent; otherwise, send null
    onDataChange(isValid ? value : null);
  };

  return (
    <div>
      <h2 className="text-start">Input data here:</h2>
      <input
        type="text"
        value={isData}
        onChange={handleData}
        className="bg-white rounded-md mt-2 mb-2 w-60"
      />
      <p className="text-gray-500 text-start text-sm">
        Write the input by separating numbers with commas (e.g., 1,2,3)
      </p>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default DataInput;
