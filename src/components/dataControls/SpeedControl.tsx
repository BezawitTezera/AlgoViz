import { useState, useEffect } from "react";
import React from "react";

interface SpeedControlProps {
  onSpeedChange: (speed: number) => void;
}
const SpeedControl: React.FC<SpeedControlProps> = ({ onSpeedChange }) => {
  const [speed, setSpeed] = useState(50);

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSpeed(value);
    onSpeedChange(value);
  };
  return (
    <div className="mt-4">
      <h2 className="text-white text-xl mt-4 mb-2">Speed Control</h2>
      <input
        type="range"
        min="0"
        max="100"
        step={10}
        value={speed}
        onChange={handleSpeedChange}
        className="w-full h-3 bg-gradient-to-r from-white to-blue-800 rounded-lg appearance-none cursor-pointer accent-blue-800"
      />
      <p className="text-md text-center text-blue-950">speed: {speed}</p>

      <div>
        {" "}
        <button></button>
      </div>
    </div>
  );
};

export default SpeedControl;
