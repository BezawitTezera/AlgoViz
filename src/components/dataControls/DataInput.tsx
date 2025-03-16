import React, { useState } from "react";

const DataInput = () => {
  const [isData, setData] = useState("");
  const [error, setError] = useState("");

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData(value);

    // Validate that input contains only numbers separated by commas
    const isValid = /^(\d+)(,\d+)*$/.test(value); // Regular expression to match numbers separated by commas
    setError(isValid ? "" : "Please enter numbers separated by commas.");
  };

  return (
    <div>
      <h2 className="text-start">Input data here:</h2>
      <input
        type="text"
        value={isData}
        onChange={handleData}
        className="bg-white rounded-md mt-2 mb-2 w-60" // Adjusted width to make it smaller
      />
      <p className="text-gray-500 text-start text-sm">
        Write the input by separating numbers with commas (e.g., 1,2,3)
      </p>
      {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
      {/* Display error message */}
    </div>
  );
};

export default DataInput;
