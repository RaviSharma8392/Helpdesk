import React from "react";
import { FaUser, FaStar } from "react-icons/fa";

// Reusable component for support staff cards
const SupportCard = ({ name }) => (
  <div className="flex items-center bg-gray-200 p-4 rounded-md gap-4 w-full max-w-sm shadow-sm">
    <div className="bg-gray-400 p-3 rounded-md">
      <FaUser className="text-3xl text-white" />
    </div>
    <div className="flex-1">
      <h4 className="text-lg font-semibold">{name}</h4>
      <button className="bg-[#55D6C2] text-white px-4 py-1 mt-2 rounded hover:bg-[#40b8a7] transition">
        View details
      </button>
    </div>
  </div>
);

const Performance = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen p-6 font-[Sanchez] bg-white">
      {/* Left Section - Individual Performance */}
      <div className="md:w-2/3 space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">Performance</h2>

        {/* Support Person Info */}
        <div className="flex items-center gap-6">
          <div className="bg-gray-300 rounded-md p-6">
            <FaUser className="text-4xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Technical Support Name</h3>
            <div className="bg-gray-100 rounded-md p-4 mt-2 shadow-sm">
              <p>Contact No: 0123456789</p>
              <p>Department: ABC</p>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-gray-100 p-6 rounded-md w-full max-w-lg shadow-sm">
          <div className="flex justify-between text-lg font-medium mb-2">
            <span>Total Tickets Handled</span>
            <span>5</span>
          </div>
          <p className="mb-1">Tickets Solved: 2</p>
          <p className="mb-1"> In Progress: 2</p>
          <p className="mb-2"> Pending: 1</p>
          <div className="flex items-center gap-1 mt-2">
            <span className="font-medium">Rating:</span>
            {[...Array(5)].map((_, idx) => (
              <FaStar key={idx} className="text-yellow-500" />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Other Support Staff */}
      <div className="md:w-1/3 mt-12 md:mt-0 md:pl-8 space-y-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Other Support Staff
        </h3>
        {[
          "Technical Support 1",
          "Technical Support 2",
          "Technical Support 3",
        ].map((name) => (
          <SupportCard key={name} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Performance;
