import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[50px] bg-[#55D6C2] text-white flex items-center justify-center px-4 shadow-md">
      <small className="text-sm text-center w-full">
        &copy; {new Date().getFullYear()} Helpdesk System. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
