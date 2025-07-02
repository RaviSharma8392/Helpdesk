import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const UserLogHistory = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data
  const logData = [
    {
      no: 1,
      signInTime: "130821 / 0800",
      staffId: "XL000001",
      department: "OT",
      activity: "Create Team",
      signOutTime: "130821 / 0815",
    },
    {
      no: 2,
      signInTime: "130821 / 0805",
      staffId: "XL000002",
      department: "IT",
      activity: "System Update",
      signOutTime: "130821 / 0810",
    },
    {
      no: 3,
      signInTime: "130821 / 0820",
      staffId: "XL000003",
      department: "Technical",
      activity: "Maintenance",
      signOutTime: "130821 / 0830",
    },
    { no: 4 },
    { no: 5 },
  ];

  // Pagination logic
  const totalEntries = logData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  return (
    <div className="p-4 mt-5 sm:p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6">
        User Log History
      </h1>

      {/* Entries per page selector */}
      <div className="flex items-center py-5 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Show:</span>
          <select
            className="px-3 py-1 border border-gray-300 rounded-md text-sm "
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="text-sm font-medium">Entries</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white border-t">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                No
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Date/Sign In Time
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Staff ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Department
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Activity
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Date/Sign Out Time
              </th>
            </tr>
          </thead>
          <tbody>
            {logData.map((log, index) => (
              <tr key={index} className="bg-[#C4C4C45E]">
                <td className="px-4 py-3 text-sm">{log.no}</td>
                <td className="px-4 py-3 text-sm">{log.signInTime}</td>
                <td className="px-4 py-3 text-sm">{log.staffId}</td>
                <td className="px-4 py-3 text-sm">{log.department}</td>
                <td className="px-4 py-3 text-sm">{log.activity}</td>
                <td className="px-4 py-3 text-sm">{log.signOutTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
        <div className="text-sm text-gray-600">
          Showing {logData.length > 0 ? 1 : 0} to {logData.length} of{" "}
          {logData.length} entries
        </div>

        <div className="flex gap-2">
          <button
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
            <FaChevronLeft className="text-sm" />
          </button>

          <button className="px-3 py-1 bg-[#55D6C2] text-white rounded-md">
            1
          </button>

          <button
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }>
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogHistory;
