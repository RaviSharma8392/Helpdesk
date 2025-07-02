import React from "react";
import { FaArrowRightFromBracket, FaBell, FaUser } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-[#55D6C2] fixed top-0 left-0 right-0 z-50 w-full h-16 sm:h-20 md:h-[90px] px-4 xs:px-5 sm:px-8 md:px-10 py-2 sm:py-3 flex items-center justify-between shadow-md">
      {/* Logo / Title */}
      <h1 className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl text-white font-bold italic font-['Roboto']">
        Helpdesk
      </h1>

      {/* Navigation Icons */}
      <nav>
        <ul className="flex gap-4 xs:gap-5 sm:gap-6 items-center text-white">
          <li>
            <button
              aria-label="Notifications"
              className="hover:text-gray-200 transition-colors">
              <FaBell className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px]" />
            </button>
          </li>
          <li>
            <NavLink
              to="profile"
              aria-label="Profile"
              className="hover:text-gray-200 transition-colors">
              <FaUser className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px]" />
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              aria-label="Logout"
              className="hover:text-gray-200 transition-colors">
              <FaArrowRightFromBracket className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px]" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
