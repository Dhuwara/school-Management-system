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
        const Icon = item.icon;

        return (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A]"
          >
            {Icon && <Icon className="w-5 h-5" />}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
