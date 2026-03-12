import React from "react";
import { Link } from "react-router-dom";

const LuxeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fdfaf5] border-b border-[#e5dfd3] z-[100] h-[70px] flex items-center justify-between px-6 lg:px-12 shadow-sm font-sans">
      <Link to="/luxe" className="flex items-baseline gap-2">
        <span className="text-[#9B7B26] text-xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 2L2 12h3v8h14v-8h3L12 2z" />
            <path d="M10 20v-6h4v6" />
          </svg>
        </span>
        <span className="text-[#1A1A1A] font-medium text-[22px] tracking-wide">
          HomeLane
        </span>
        <span className="font-script text-[#9B7B26] text-[34px] lowercase leading-none translate-y-2">
          luxe
        </span>
      </Link>

      <Link
        to="/"
        className="flex items-center gap-2 text-[#e71c24] hover:text-[#c41920] transition-colors text-[14px] font-medium group"
      >
        <span className="bg-[#e71c24] text-white p-1 rounded-sm group-hover:bg-[#c41920] transition-colors"></span>
        Back to HomeLane
      </Link>
    </nav>
  );
};

export default LuxeNavbar;
