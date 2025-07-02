import React from "react";
import {
  FaUserEdit,
  FaKey,
  FaEnvelope,
  FaUserTag,
  FaUserShield,
} from "react-icons/fa";

const Setting = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#55D6C2] mb-2">
        Helpdesk
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">User Profile</h2>

      <div className="bg-white rounded-lg shadow-md p-5 sm:p-8">
        <h3 className="text-lg sm:text-xl font-medium mb-4 flex items-center gap-2">
          <FaUserEdit className="text-[#55D6C2]" /> Edit Account
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Username */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
            />
          </div>

          {/* Current Password */}
          <div className="space-y-1">
            <label className=" text-sm font-medium flex items-center gap-1">
              <FaKey className="text-sm" /> Current Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
            />
          </div>

          {/* New Password */}
          <div className="space-y-1">
            <label className=" text-sm font-medium flex items-center gap-1">
              <FaKey className="text-sm" /> New Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className=" text-sm font-medium flex items-center gap-1">
              <FaEnvelope className="text-sm" /> Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
            />
          </div>

          {/* Real Name */}
          <div className="space-y-1">
            <label className=" text-sm font-medium flex items-center gap-1">
              <FaUserTag className="text-sm" /> Real Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
            />
          </div>

          {/* Access Level */}
          <div className="space-y-1">
            <label className=" text-sm font-medium flex items-center gap-1">
              <FaUserShield className="text-sm" /> Access Level
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]">
              <option>Select Access Level</option>
              <option>Admin</option>
              <option>User</option>
              <option>Guest</option>
            </select>
          </div>

          {/* Project Access Level */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">
              Project Access Level
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]">
              <option>Select Project Access</option>
              <option>Full Access</option>
              <option>Limited Access</option>
              <option>Read Only</option>
            </select>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200">
          <button className="bg-[#55D6C2] hover:bg-[#4ac2af] text-white font-medium py-2 px-6 rounded-md shadow-sm transition-colors duration-200">
            Update User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
