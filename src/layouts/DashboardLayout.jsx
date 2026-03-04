import React,{useState} from 'react'
import Sidebar from "../Components/Common/Sidebar";
import Navbar from "../Components/Common/Navbar";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      <main className="flex relative ">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <Sidebar isOpen={isSidebarOpen} />
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout