import React from "react";
import { Link } from "react-router-dom";

const LandingNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-4 border-[#FCD34D] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              alt="AJMII Logo"
              className="h-12 w-12 object-contain rounded-lg"
              src="https://customer-assets.emergentagent.com/job_school-hub-ajm/artifacts/xr5umcwl_logo.jpg"
            />
            <div>
              <span className="text-2xl font-bold text-[#0F172A]">
                AJM International Institution
              </span>
              <p className="text-xs text-[#64748B]">(AJM Silicon Valley)</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button className="text-[#0F172A] hover:text-[#F59E0B] font-medium transition-colors">
              Home
            </button>
            <button className="text-[#0F172A] hover:text-[#F59E0B] font-medium transition-colors">
              About
            </button>
            <button className="text-[#0F172A] hover:text-[#F59E0B] font-medium transition-colors">
              Features
            </button>
            <button className="text-[#0F172A] hover:text-[#F59E0B] font-medium transition-colors">
              Contact
            </button>
            {/* <a
              data-testid="nav-login-button"
              className="bg-[#DC2626] text-white hover:bg-[#B91C1C] px-6 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
              href="/login"
              data-discover="true"
            >
              Login
            </a> */}
            <Link
              to="/login"
              className="bg-[#DC2626] text-white hover:bg-[#B91C1C] px-6 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >Login</Link>
          </div>
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-menu"
              aria-hidden="true"
            >
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
