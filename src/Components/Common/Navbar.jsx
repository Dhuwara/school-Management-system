import React from 'react'

const Navbar = () => {
  return (
    <div className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
            aria-hidden="true"
          >
            <path d="M4 5h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 19h16"></path>
          </svg>
        </button>
        <h1 className="text-2xl font-semibold text-[#4F46E5]">Student Portal</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-[#0F172A]">Student User</p>
          <p className="text-xs text-[#64748B] capitalize">student</p>
        </div>
        <button
          data-testid="logout-button"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-[#64748B] hover:text-[#EF4444]"
          title="Logout"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-log-out"
            aria-hidden="true"
          >
            <path d="m16 17 5-5-5-5"></path>
            <path d="M21 12H9"></path>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar