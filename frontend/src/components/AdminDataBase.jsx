import React, { useState } from "react";
import { FaSearch, FaCog, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DatabaseTable = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data
  const staffData = [
    { id: "ABC123", name: "Abu", department: "IT", specialty: "Software" },
    {
      id: "ABC124",
      name: "Ahmad",
      department: "Software",
      specialty: "Networking",
    },
    {
      id: "ABC125",
      name: "Ali",
      department: "Technical",
      specialty: "Hardware",
    },
  ];

  // Filter data based on search query
  const filteredData = staffData.filter((staff) =>
    Object.values(staff).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination logic
  const totalEntries = filteredData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  return (
    <div className="p-4 mt-5 sm:p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6">
        Database
      </h1>
      <div className="hidden sm:flex gap-5">
        <span className="text-sm  text-center  h-[45px] w-[358px] bg-[#55D6C2]  font-[Sanchez] text-[30px]  font-[400] border">
          User{" "}
        </span>
        <span className="text-sm  text-center  h-[45px] w-[358px] bg-[#55D6C2]  font-[Sanchez] text-[30px]  font-[400] border">
          Operation Team
        </span>
        <span className="text-sm  text-center h-[45px] w-[358px] bg-[#55D6C2]  font-[Sanchez] text-[30px]  font-[400] border">
          Technical Support
        </span>
      </div>

      {/* Table Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <div className="flex items-center pt-5 gap-2">
          <div className="relative ">
            <input
              type="text"
              placeholder="Find ticket"
              className="pl-8  font-[Sanchez] text-[18px]  font-[400] bg-[#C4C4C4A1]  pr-4 py-2 border border-gray-300 rounded-md text-sm "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>
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
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 ">
                Staff ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 ">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 ">
                Department
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 ">
                Speciality
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 ">
                Setting
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((staff, index) => (
              <tr key={index} className=" bg-[#C4C4C45E]">
                <td className="px-4 py-3 text-sm ">{staff.id}</td>
                <td className="px-4 py-3 text-sm ">{staff.name}</td>
                <td className="px-4 py-3 text-sm">{staff.department}</td>
                <td className="px-4 py-3 text-sm ">{staff.specialty}</td>
                <td className="px-4 py-3 text-sm ">
                  <button className="text-[#55D6C2] hover:text-[#4ac2af]">
                    <svg
                      width="29"
                      height="30"
                      viewBox="0 0 29 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.40798 8C9.6936 8 9.96751 8.10536 10.1695 8.29289C10.3714 8.48043 10.4849 8.73478 10.4849 9V21C10.4849 21.2652 10.3714 21.5196 10.1695 21.7071C9.96751 21.8946 9.6936 22 9.40798 22C9.12236 22 8.84844 21.8946 8.64648 21.7071C8.44452 21.5196 8.33105 21.2652 8.33105 21V9C8.33105 8.73478 8.44452 8.48043 8.64648 8.29289C8.84844 8.10536 9.12236 8 9.40798 8ZM14.7926 8C15.0782 8 15.3521 8.10536 15.5541 8.29289C15.7561 8.48043 15.8695 8.73478 15.8695 9V21C15.8695 21.2652 15.7561 21.5196 15.5541 21.7071C15.3521 21.8946 15.0782 22 14.7926 22C14.507 22 14.2331 21.8946 14.0311 21.7071C13.8291 21.5196 13.7157 21.2652 13.7157 21V9C13.7157 8.73478 13.8291 8.48043 14.0311 8.29289C14.2331 8.10536 14.507 8 14.7926 8ZM21.2541 9C21.2541 8.73478 21.1407 8.48043 20.9387 8.29289C20.7367 8.10536 20.4628 8 20.1772 8C19.8916 8 19.6177 8.10536 19.4157 8.29289C19.2137 8.48043 19.1003 8.73478 19.1003 9V21C19.1003 21.2652 19.2137 21.5196 19.4157 21.7071C19.6177 21.8946 19.8916 22 20.1772 22C20.4628 22 20.7367 21.8946 20.9387 21.7071C21.1407 21.5196 21.2541 21.2652 21.2541 21V9Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28.75 6C28.75 6.53043 28.5231 7.03914 28.1192 7.41421C27.7152 7.78929 27.1674 8 26.5962 8H25.5192V26C25.5192 27.0609 25.0654 28.0783 24.2575 28.8284C23.4497 29.5786 22.354 30 21.2115 30H8.28846C7.14599 30 6.05031 29.5786 5.24246 28.8284C4.43461 28.0783 3.98077 27.0609 3.98077 26V8H2.90385C2.33261 8 1.78477 7.78929 1.38085 7.41421C0.976922 7.03914 0.75 6.53043 0.75 6V4C0.75 3.46957 0.976922 2.96086 1.38085 2.58579C1.78477 2.21071 2.33261 2 2.90385 2H10.4423C10.4423 1.46957 10.6692 0.960859 11.0732 0.585786C11.4771 0.210714 12.0249 0 12.5962 0L16.9038 0C17.4751 0 18.0229 0.210714 18.4268 0.585786C18.8308 0.960859 19.0577 1.46957 19.0577 2H26.5962C27.1674 2 27.7152 2.21071 28.1192 2.58579C28.5231 2.96086 28.75 3.46957 28.75 4V6ZM6.38877 8L6.13462 8.118V26C6.13462 26.5304 6.36154 27.0391 6.76546 27.4142C7.16939 27.7893 7.71723 28 8.28846 28H21.2115C21.7828 28 22.3306 27.7893 22.7345 27.4142C23.1385 27.0391 23.3654 26.5304 23.3654 26V8.118L23.1112 8H6.38877ZM2.90385 6V4H26.5962V6H2.90385Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
        <div className="text-sm text-gray-600">
          Showing {filteredData.length > 0 ? 1 : 0} to {filteredData.length} of{" "}
          {filteredData.length} entries
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

export default DatabaseTable;
