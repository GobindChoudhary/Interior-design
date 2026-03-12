import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hlLogo from "../assets/imgi_110_hllogosvg.svg";
import { allCities } from "../data/cityData";
import { useAuth } from "../context/AuthContext";
import { scrollToPrice } from "../utils/navigationUtils";

import { galleryItems, navLinks } from "../data/navbarData";

const Navbar = () => {
  const { user, logout, openAuthModal } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? "shadow-[0_2px_8px_rgba(0,0,0,0.1)]" : "shadow-[0_1px_0_#f0f0f0]"}`}
    >
      {/* ——— Main Nav ——— */}
      <nav className="max-w-[1400px] mx-auto px-6 flex items-center h-[70px] gap-6">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 mr-2">
          <img src={hlLogo} alt="HomeLane" className="h-9 w-auto" />
        </Link>

        {/* Desktop Links — centered */}
        <div className="hidden lg:flex items-center flex-1 justify-center h-full">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="group h-full flex items-center relative"
            >
              <a
                href={link.name === "Price Calculators" ? "#" : "#"}
                className={`flex items-center gap-1 px-4 h-full text-[14px] font-medium transition-colors whitespace-nowrap 
                  ${link.name === "Design Gallery" || link.name === "Guides" ? "text-[#212529] group-hover:text-[#e71c24]" : "text-[#212529] hover:text-[#e71c24]"}
                `}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg
                    viewBox="0 0 10 6"
                    className={`w-2.5 h-2.5 mt-0.5 fill-current transition-transform duration-300
                      ${link.name === "Design Gallery" || link.name === "Guides" || link.name === "Cities" || link.name === "Price Calculators" ? "text-gray-400 group-hover:text-[#e71c24] group-hover:-rotate-180" : "text-gray-400 group-hover:text-[#e71c24]"}
                    `}
                  >
                    <path d="M0 0l5 6 5-6z" />
                  </svg>
                )}

                {/* Active Red Bottom Border on hover */}
                {(link.name === "Design Gallery" ||
                  link.name === "Guides" ||
                  link.name === "Cities" ||
                  link.name === "Price Calculators") && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#e71c24] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                )}
              </a>

              {/* DESIGN GALLERY DROPDOWN */}
              {link.name === "Design Gallery" && (
                <div className="absolute top-[70px] -left-8 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[550px] p-6 pt-2 border-t-[3px] border-[#e71c24] z-50 cursor-auto">
                  <div className="grid grid-cols-2 gap-x-8">
                    {galleryItems.map((item, i) => (
                      <Link
                        to={
                          item.name === "Home Interiors"
                            ? "/home-interiors"
                            : `/home-interiors/${item.name.toLowerCase().replace(/\s+/g, "-")}`
                        }
                        key={item.name}
                        className={`flex items-center gap-4 py-4 group/item
                          ${i < galleryItems.length - 2 ? "border-b border-gray-200" : ""}
                        `}
                      >
                        <div className="w-10 h-10 flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <span className="text-[14px] font-medium text-gray-800 group-hover/item:text-[#e71c24] transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* GUIDES DROPDOWN */}
              {link.name === "Guides" && (
                <div className="absolute top-[70px] left-0 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[500px] p-8 border-t-[3px] border-[#e71c24] z-50 cursor-auto">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                    <Link
                      to="/design-ideas/modular-kitchen-design-ideas"
                      className="text-[13px] text-gray-700 hover:text-[#e71c24] transition-colors"
                    >
                      Modular Kitchen Design Ideas
                    </Link>
                    <Link
                      to="/design-ideas/wardrobe-design-ideas"
                      className="text-[13px] text-gray-700 hover:text-[#e71c24] transition-colors"
                    >
                      Wardrobe Design Ideas
                    </Link>
                    <Link
                      to="/design-ideas/bedroom-design-ideas"
                      className="text-[13px] text-gray-700 hover:text-[#e71c24] transition-colors"
                    >
                      Bedroom Design Ideas
                    </Link>
                    <Link
                      to="/design-ideas/living-room-interior-design-ideas"
                      className="text-[13px] text-gray-700 hover:text-[#e71c24] transition-colors"
                    >
                      Living Room Interior Design Ideas
                    </Link>
                    <Link
                      to="/design-ideas/home-interior-design-ideas"
                      className="text-[13px] text-gray-700 hover:text-[#e71c24] transition-colors"
                    >
                      Home Interior Design Ideas
                    </Link>
                    <Link
                      to="/design-ideas/home-decor-trends"
                      className="text-[13px] text-gray-700 hover:text-[#e71c24] transition-colors"
                    >
                      Home Decor Trends
                    </Link>
                    <Link
                      to="/design-ideas/bathroom-design-ideas"
                      className="text-[13px] text-gray-700 hover:text-[#e71c24] transition-colors"
                    >
                      Bathroom Design Ideas
                    </Link>
                  </div>
                </div>
              )}

              {/* CITIES DROPDOWN */}
              {link.name === "Cities" && (
                <div className="absolute top-[70px] -left-32 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[700px] p-8 border-t-[3px] border-[#e71c24] z-50 cursor-auto">
                  <div className="grid grid-cols-4 gap-y-6 gap-x-4">
                    {allCities.map((city) => (
                      <Link
                        key={city}
                        to={`/cities/interior-designers-${city.toLowerCase()}`}
                        className="text-[13px] text-[#4a4a4a] hover:text-[#e71c24] transition-colors truncate"
                      >
                        {city}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* MORE DROPDOWN */}
              {link.name === "More" && (
                <div className="absolute top-[70px] left-0 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[220px] p-5 border-t-[3px] border-[#e71c24] z-50 cursor-auto">
                  <div className="flex flex-col gap-y-4">
                    <Link
                      to="/customer-stories"
                      className="flex items-center gap-2 text-[13px] text-gray-700 hover:text-[#e71c24] transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3 h-3 text-[#e71c24] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      Customer Stories
                    </Link>
                    <Link
                      to="/blogs"
                      className="flex items-center gap-2 text-[13px] text-gray-700 hover:text-[#e71c24] transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3 h-3 text-[#e71c24] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      Blogs
                    </Link>
                  </div>
                </div>
              )}

              {/* OFFERINGS DROPDOWN */}
              {link.name === "Offerings" && (
                <div className="absolute top-[70px] left-0 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[220px] p-5 border-t-[3px] border-[#e71c24] z-50 cursor-auto">
                  <div className="flex flex-col gap-y-4">
                    <Link
                      to="/luxe"
                      className="flex items-center gap-2 text-[13px] text-gray-700 hover:text-[#e71c24] transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3 h-3 text-[#e71c24] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                      HomeLane Luxe
                    </Link>
                  </div>
                </div>
              )}

              {/* PRICE CALCULATORS DROPDOWN */}
              {link.name === "Price Calculators" && (
                <div className="absolute top-[70px] left-0 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[260px] p-5 border-t-[3px] border-[#e71c24] z-50 cursor-auto">
                  <div className="flex flex-col gap-y-4">
                    <Link
                      to="/price-calculator/kitchen"
                      className="flex items-center gap-2 text-[13px] text-gray-700 hover:text-[#e71c24] transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-[#e71c24] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 15h18" />
                        <rect x="3" y="15" width="18" height="6" rx="0.5" />
                        <rect x="4" y="5" width="7" height="6" rx="0.5" />
                        <rect x="13" y="5" width="7" height="6" rx="0.5" />
                      </svg>
                      Kitchen Price Calculator
                    </Link>
                    <Link
                      to="/price-calculator/home-interior"
                      className="flex items-center gap-2 text-[13px] text-gray-700 hover:text-[#e71c24] transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-[#e71c24] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 9.5L12 3l9 6.5" />
                        <path d="M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5" />
                      </svg>
                      Home Interior Price Calculator
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right CTA */}
        <div className="ml-auto flex items-center gap-4 flex-shrink-0">
          <button
            onClick={scrollToPrice}
            className="bg-[#e71c24] hover:bg-[#c41920] text-white text-[14px] font-bold px-6 py-2.5 rounded-[4px] transition-colors whitespace-nowrap"
          >
            Get Free Estimate
          </button>

          {/* Desktop Login/User Profile */}
          <div className="hidden lg:block">
            {user ? (
              <div className="relative">
                <button
                  onMouseEnter={() => setUserDropdownOpen(true)}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-full bg-red-50 text-[#e71c24] flex items-center justify-center font-bold border border-red-100 uppercase transition-all group-hover:bg-[#e71c24] group-hover:text-white">
                    {user.name.charAt(0)}
                  </div>
                  <svg
                    viewBox="0 0 10 6"
                    className={`w-2.5 h-2.5 text-gray-400 transition-transform duration-300 ${userDropdownOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M0 0l5 6 5-6z" fill="currentColor" />
                  </svg>
                </button>

                {/* User Dropdown */}
                {userDropdownOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 py-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseLeave={() => setUserDropdownOpen(false)}
                  >
                    <div className="px-4 py-2 border-b border-gray-50">
                      <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider">
                        Account
                      </p>
                      <p className="text-[14px] font-medium text-[#212529] truncate">
                        {user.email}
                      </p>
                    </div>
                    {/* <Link to="/profile" className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-[#e71c24] transition-colors">
                      My Profile
                    </Link> */}
                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-[#e71c24] transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="text-[14px] font-bold text-[#212529] hover:text-[#e71c24] transition-colors  tracking-tight"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-1 text-gray-600"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#f0f0f0] bg-white max-h-[calc(100vh-70px)] overflow-y-auto">
          {/* Mobile Auth Section */}
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            {user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e71c24] text-white flex items-center justify-center font-bold border border-red-100 uppercase">
                    {user.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-800 uppercase leading-none">
                      {user.name}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      {user.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="text-xs font-bold text-[#e71c24] uppercase underline underline-offset-4"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openAuthModal();
                }}
                className="w-full py-3.5 bg-[#e71c24] text-white text-[14px] font-bold rounded-lg shadow-lg shadow-red-100 flex items-center justify-center gap-2 hover:bg-[#c41920] transition-all"
              >
                LOGIN / SIGN UP
              </button>
            )}
          </div>

          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href="#"
                className="flex justify-between items-center px-6 py-3 text-[14px] text-[#212529] font-medium hover:text-[#e71c24] border-b border-[#f8f8f8]"
              >
                {link.name}
                {link.hasDropdown && (
                  <svg
                    viewBox="0 0 10 6"
                    className="w-2.5 h-2.5 fill-current text-gray-400"
                  >
                    <path d="M0 0l5 6 5-6z" />
                  </svg>
                )}
              </a>
              {/* Simple Mobile Dropdown Implementation */}
              {link.name === "Design Gallery" && (
                <div className="bg-gray-50 px-6 py-2 border-b border-[#f8f8f8]">
                  {galleryItems.map((item) => (
                    <Link
                      key={item.name}
                      to={
                        item.name === "Home Interiors"
                          ? "/home-interiors"
                          : `/home-interiors/${item.name.toLowerCase().replace(/\s+/g, "-")}`
                      }
                      className="flex items-center gap-3 py-2 text-[13px] text-gray-600 hover:text-[#e71c24]"
                      onClick={() => setMobileOpen(false)} // Close menu on click
                    >
                      <div className="w-6 h-6 scale-75">{item.icon}</div>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
              {/* GUIDES Mobile Dropdown implementation */}
              {link.name === "Guides" && (
                <div className="bg-gray-50 px-6 py-2 border-b border-[#f8f8f8] flex flex-col">
                  <Link
                    to="/design-ideas/modular-kitchen-design-ideas"
                    className="py-2 text-[13px] text-gray-600 hover:text-[#e71c24]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Modular Kitchen Design Ideas
                  </Link>
                  <Link
                    to="/design-ideas/wardrobe-design-ideas"
                    className="py-2 text-[13px] text-gray-600 hover:text-[#e71c24]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Wardrobe Design Ideas
                  </Link>
                  <Link
                    to="/design-ideas/bedroom-design-ideas"
                    className="py-2 text-[13px] text-gray-600 hover:text-[#e71c24]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Bedroom Design Ideas
                  </Link>
                  <Link
                    to="/design-ideas/living-room-interior-design-ideas"
                    className="py-2 text-[13px] text-gray-600 hover:text-[#e71c24]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Living Room Interior Design Ideas
                  </Link>
                  <Link
                    to="/design-ideas/home-interior-design-ideas"
                    className="py-2 text-[13px] text-gray-600 hover:text-[#e71c24]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Home Interior Design Ideas
                  </Link>
                  <Link
                    to="/design-ideas/home-decor-trends"
                    className="py-2 text-[13px] text-gray-600 hover:text-[#e71c24]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Home Decor Trends
                  </Link>
                  <Link
                    to="/design-ideas/bathroom-design-ideas"
                    className="py-2 text-[13px] text-gray-600 hover:text-[#e71c24]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Bathroom Design Ideas
                  </Link>
                </div>
              )}
              {/* CITIES Mobile Dropdown implementation */}
              {link.name === "Cities" && (
                <div className="bg-gray-50 px-6 py-4 border-b border-[#f8f8f8] grid grid-cols-2 gap-y-3">
                  {allCities.slice(0, 10).map(
                    (
                      city, // Show top 10 for mobile for brevity
                    ) => (
                      <Link
                        key={city}
                        to={`/cities/interior-designers-${city.toLowerCase()}`}
                        className="text-[13px] text-gray-600 hover:text-[#e71c24] truncate"
                        onClick={() => setMobileOpen(false)}
                      >
                        {city}
                      </Link>
                    ),
                  )}
                  <Link
                    to="/cities"
                    className="col-span-2 text-center text-[#e71c24] font-semibold text-[13px] mt-2 underline"
                    onClick={() => setMobileOpen(false)}
                  >
                    View All Cities
                  </Link>
                </div>
              )}
              {/* MORE Mobile Dropdown implementation */}
              {link.name === "More" && (
                <div className="bg-gray-50 px-6 py-2 border-b border-[#f8f8f8] flex flex-col">
                  <Link
                    to="/customer-stories"
                    className="py-2 text-[13px] text-gray-600 hover:text-[#e71c24] flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3 text-[#e71c24] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    Customer Stories
                  </Link>
                  <Link
                    to="/blogs"
                    className="py-2 text-[13px] text-gray-600 hover:text-[#e71c24] flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3 text-[#e71c24] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    Blogs
                  </Link>
                </div>
              )}

              {/* OFFERINGS Mobile Dropdown implementation */}
              {link.name === "Offerings" && (
                <div className="bg-gray-50 px-6 py-2 border-b border-[#f8f8f8] flex flex-col">
                  <Link
                    to="/luxe"
                    className="py-2 text-[13px] text-gray-600 hover:text-[#e71c24] flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3 text-[#e71c24] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    HomeLane Luxe
                  </Link>
                </div>
              )}

              {/* PRICE CALCULATORS Mobile Dropdown implementation */}
              {link.name === "Price Calculators" && (
                <div className="bg-gray-50 px-6 py-2 border-b border-[#f8f8f8] flex flex-col">
                  <Link
                    to="/price-calculator/kitchen"
                    className="py-2 text-[13px] text-gray-600 hover:text-[#e71c24] flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-[#e71c24] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 15h18" />
                      <rect x="3" y="15" width="18" height="6" rx="0.5" />
                      <rect x="4" y="5" width="7" height="6" rx="0.5" />
                      <rect x="13" y="5" width="7" height="6" rx="0.5" />
                    </svg>
                    Kitchen Price Calculator
                  </Link>
                  <Link
                    to="/price-calculator/home-interior"
                    className="py-2 text-[13px] text-gray-600 hover:text-[#e71c24] flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-[#e71c24] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9.5L12 3l9 6.5" />
                      <path d="M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5" />
                    </svg>
                    Home Interior Price Calculator
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
