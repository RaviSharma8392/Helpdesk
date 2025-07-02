import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 pt-[90px]">
        {" "}
        {/* Padding to prevent header overlap */}
        <Sidebar />
        <main className="ml-[250px] w-full px-4 pb-[60px]">
          {" "}
          {/* Padding bottom for footer */}
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AdminLayout;
