import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdSupportAgent, MdBuildCircle } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";

const DashboardContent = () => {
  const cards = [
    { title: "Total Tickets", value: 12, color: "bg-blue-500" },
    { title: "Total Solved", value: 8, color: "bg-green-400" },
    { title: "Total Awaiting Approval", value: 2, color: "bg-red-400" },
    { title: "Total in Progress", value: 2, color: "bg-yellow-300" },
  ];

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`text-center ${card.color} text-black rounded-xl sm:rounded-2xl p-4 sm:p-5 py-12 sm:py-16 md:py-20 shadow-[3px_3px_0px_#888] sm:shadow-[4px_4px_0px_#888] hover:shadow-[6px_6px_0px_#888] transition-all duration-200`}>
            <p className="text-sm sm:text-md font-semibold">{card.title}</p>
            <h1 className="text-3xl sm:text-4xl font-bold mt-1 sm:mt-2">
              {card.value}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
