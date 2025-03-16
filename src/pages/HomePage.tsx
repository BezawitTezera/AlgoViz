import React from "react";
import DataControls from "../components/dataControls/DataControls";

const HomePage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 min-h-screen bg-blue-300 p-4 fixed left-0 mt-10">
        <DataControls />
      </div>

      {/* Main content area (to prevent overlap) */}
      <div className="flex-1 ml-1/4 p-6">
        <h1 className="text-3xl font-bold">Main Content Here</h1>
      </div>
    </div>
  );
};

export default HomePage;
