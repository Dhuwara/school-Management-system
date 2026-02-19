import React from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../config/menuConfig";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useAuth();

  const filteredMenu = menuItems.filter((item) => {
    return item.roles.includes(user.role);
  });
  return (
    <aside
      className="
              fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-slate-200 p-4 flex flex-col gap-2 z-40 transition-transform duration-300
              -translate-x-full lg:translate-x-0
            "
    >
      {filteredMenu.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A]"
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
              className="lucide lucide-user"
              aria-hidden="true"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>{item.label}</span>
          </Link>
        );
      })}
     
    </aside>
  );
};

export default Sidebar;
