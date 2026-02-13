import React from 'react'
import Sidebar from "../Components/Common/Sidebar";
import Navbar from "../Components/Common/Navbar";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex ">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout