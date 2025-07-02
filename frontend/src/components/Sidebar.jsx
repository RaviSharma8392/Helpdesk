import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { GiDatabase } from "react-icons/gi";
import { IoMdSettings, IoMdClose, IoMdMenu } from "react-icons/io";
import { FaTicket, FaUser } from "react-icons/fa6";
import { BsTicketFill } from "react-icons/bs";
import { GrDocumentPerformance } from "react-icons/gr";
import { useAuth } from "../hooks/auth";

const Sidebar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false); // Mobile sidebar toggle

  const sidebarItems = {
    admin: [
      { label: "Dashboard", icon: <RiDashboardLine />, to: "/admin/dashboard" },
      { label: "Database", icon: <GiDatabase />, to: "/admin/database" },
      { label: "Settings", icon: <IoMdSettings />, to: "/admin/settings" },
      { label: "User Log History", icon: <FaUser />, to: "/admin/logs" },
    ],
    technicalSupport: [
      {
        label: "Dashboard",
        icon: <RiDashboardLine />,
        to: "/technicalsupport/dashboard",
      },
      {
        label: "My Ticket",
        icon: <BsTicketFill />,
        to: "/technicalsupport/ticket",
      },
      {
        label: "Performance",
        icon: <GrDocumentPerformance />,
        to: "/technicalsupport/performance",
      },
    ],
    operationTeam: [
      {
        label: "Dashboard",
        icon: <RiDashboardLine />,
        to: "/operation/dashboard",
      },
      {
        label: "Ticket Approval",
        icon: <FaTicket />,
        to: "/operation/ticket-approval",
      },
      {
        label: "My Ticket",
        icon: <BsTicketFill />,
        to: "/operation/ticket",
      },
      {
        label: "Performance",
        icon: <GrDocumentPerformance />,
        to: "/operation/performance",
      },
    ],
    user: [
      { label: "Dashboard", icon: <RiDashboardLine />, to: "/user/dashboard" },
      { label: "New Ticket", icon: <FaTicket />, to: "/user/new-ticket" },
      { label: "Ticket", icon: <FaTicket />, to: "/user/ticket" },
    ],
  };

  const menu = sidebarItems[user?.role] || [];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#55D6C2] text-white rounded-full shadow-md"
        aria-label="Toggle sidebar">
        {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-[60px] left-0 h-full bg-[#6A67674D] w-[250px] z-40 overflow-y-auto pt-8 px-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}>
        <ul className="flex flex-col gap-5">
          {menu.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 text-sm px-3 py-2 rounded transition-colors ${
                    isActive
                      ? "bg-[#55D6C2] text-white"
                      : "text-gray-800 hover:text-blue-600"
                  }`
                }
                onClick={() => setIsOpen(false)}>
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
