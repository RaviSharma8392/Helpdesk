import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const TechnicalSupportLayout = () => {
  return (
    <div className="">
      <Header />

      <div className="flex">
        <Sidebar />
        <main className="ml-[250px] mt-[60px] w-full px-4 py-4">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default TechnicalSupportLayout;
