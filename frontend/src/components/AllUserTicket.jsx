import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AllUserTicket = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample ticket data matching the table structure
  const ticketData = [
    {
      ticketNo: "TKT001",
      subject: "Network Connectivity Issue",
      status: "On Hold",
      supportBy: "John Doe",
      date: "130821",
      rate: "4.5",
    },
    {
      ticketNo: "TKT002",
      subject: "Software Installation",
      status: "In Progress",
      supportBy: "Jane Smith",
      date: "130821",
      rate: "3.0",
    },
    {
      ticketNo: "TKT003",
      subject: "Email Configuration",
      status: "Resolved",
      supportBy: "Mike Johnson",
      date: "130821",
      rate: "5.0",
    },
    {
      ticketNo: "TKT004",
      subject: "Printer Not Working",
      status: "Pending",
      supportBy: "Sarah Williams",
      date: "130821",
      rate: "-",
    },
    {
      ticketNo: "TKT005",
      subject: "Password Reset",
      status: "Closed",
      supportBy: "David Brown",
      date: "130821",
      rate: "4.0",
    },
  ];

  // Pagination logic
  const totalEntries = ticketData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  return (
    <div className="p-4 mt-5 sm:p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6">
        List of Ticket
      </h1>

      <div className="flex items-center py-5 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Show:</span>
          <select
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
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
                Ticket No.
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Subject
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Support by
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Rate
              </th>
            </tr>
          </thead>
          <tbody>
            {ticketData.map((ticket, index) => (
              <tr key={index} className="bg-[#C4C4C45E]">
                <td className="px-4 py-3 text-sm">{ticket.ticketNo}</td>
                <td className="px-4 py-3 text-sm">{ticket.subject}</td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-5 py-2 rounded text-xs ${
                      ticket.status === "On Hold"
                        ? "bg-[#05386B] text-white"
                        : ticket.status === "In Progress"
                        ? "bg-[#5CDB95]"
                        : ticket.status === "Resolved"
                        ? "bg-green-100"
                        : ticket.status === "Closed"
                        ? "bg-[#C4C4C45E]"
                        : "bg-gray-100"
                    }`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{ticket.supportBy}</td>
                <td className="px-4 py-3 text-sm">{ticket.date}</td>
                <td className="px-4 py-3 text-sm">{ticket.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
        <div className="text-sm text-gray-600">
          Showing {ticketData.length > 0 ? 1 : 0} to {ticketData.length} of{" "}
          {ticketData.length} entries
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

export default AllUserTicket;
