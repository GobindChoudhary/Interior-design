import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hlLogo from "../assets/imgi_110_hllogosvg.svg";

const galleryItems = [
  {
    name: "Home Interiors",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path
          d="M3 9.5L12 3l9 6.5"
          stroke="#103a68"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5"
          stroke="#103a68"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 21V12h6v9"
          stroke="#e71c24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Modular Kitchen",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="3" y="15" width="18" height="6" rx="0.5" stroke="#103a68" />
        <path d="M3 15h18" stroke="#103a68" />
        <rect x="4" y="5" width="7" height="6" rx="0.5" stroke="#e71c24" />
        <rect x="13" y="5" width="7" height="6" rx="0.5" stroke="#e71c24" />
      </svg>
    ),
  },
  {
    name: "Living Room",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M3 13v4a1 1 0 001 1h16a1 1 0 001-1v-4" stroke="#103a68" />
        <path d="M3 13V9a1 1 0 011-1h16a1 1 0 011 1v4" stroke="#103a68" />
        <path d="M6 18v2m12-2v2" stroke="#103a68" strokeLinecap="round" />
        <rect x="6" y="10" width="4" height="3" rx="0.5" stroke="#e71c24" />
        <rect x="14" y="10" width="4" height="3" rx="0.5" stroke="#e71c24" />
      </svg>
    ),
  },
  {
    name: "Bedroom",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="2" y="14" width="20" height="4" rx="0.5" stroke="#103a68" />
        <path d="M4 14V8a1 1 0 011-1h14a1 1 0 011 1v6" stroke="#103a68" />
        <path d="M4 18v2m16-2v2" stroke="#103a68" strokeLinecap="round" />
        <rect x="7" y="10" width="4" height="3" rx="0.5" stroke="#e71c24" />
        <rect x="13" y="10" width="4" height="3" rx="0.5" stroke="#e71c24" />
      </svg>
    ),
  },
  {
    name: "Wardrobe",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="5" y="3" width="14" height="18" rx="0.5" stroke="#103a68" />
        <line x1="12" y1="3" x2="12" y2="21" stroke="#103a68" />
        <line
          x1="10"
          y1="11"
          x2="10"
          y2="14"
          stroke="#e71c24"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="11"
          x2="14"
          y2="14"
          stroke="#e71c24"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Space Saving Furniture",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="2" y="11" width="20" height="3" rx="0.5" stroke="#103a68" />
        <path d="M5 14v6m14-6v6" stroke="#103a68" strokeLinecap="round" />
        <path
          d="M9 7L5 11m10-4l4 4H9"
          stroke="#e71c24"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Home Office",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="2" y="14" width="20" height="2" stroke="#103a68" />
        <path d="M4 16v6m16-6v6" stroke="#103a68" strokeLinecap="round" />
        <rect x="6" y="4" width="12" height="7" rx="0.5" stroke="#e71c24" />
        <path d="M10 11v3h4v-3" stroke="#e71c24" />
      </svg>
    ),
  },
  {
    name: "Bathroom",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M3 13h18v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3z" stroke="#103a68" />
        <path d="M5 20l-1 2m15-2l1 2" stroke="#103a68" strokeLinecap="round" />
        <path
          d="M7 13V5a1 1 0 011-1h2"
          stroke="#e71c24"
          strokeLinecap="round"
        />
        <circle cx="12" cy="4" r="1.5" fill="#e71c24" />
      </svg>
    ),
  },
];

const navLinks = [
  { name: "Design Gallery", hasDropdown: true },
  { name: "Guides", hasDropdown: true },
  { name: "Cities", hasDropdown: true },
  { name: "Offerings", hasDropdown: true },
  { name: "Price Calculators", hasDropdown: true },
  { name: "More", hasDropdown: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
                href="#"
                className={`flex items-center gap-1 px-4 h-full text-[14px] font-medium transition-colors whitespace-nowrap 
                  ${link.name === "Design Gallery" ? "text-[#212529] group-hover:text-[#e71c24]" : "text-[#212529] hover:text-[#e71c24]"}
                `}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg
                    viewBox="0 0 10 6"
                    className={`w-2.5 h-2.5 mt-0.5 fill-current transition-transform duration-300
                      ${link.name === "Design Gallery" ? "text-gray-400 group-hover:text-[#e71c24] group-hover:-rotate-180" : "text-gray-400 group-hover:text-[#e71c24]"}
                    `}
                  >
                    <path d="M0 0l5 6 5-6z" />
                  </svg>
                )}

                {/* Active Red Bottom Border on hover */}
                {link.name === "Design Gallery" && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#e71c24] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                )}
              </a>

              {/* DROPDOWN MENU */}
              {link.name === "Design Gallery" && (
                <div className="absolute top-[70px] -left-8 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[550px] p-6 pt-2 border-t-[3px] border-[#e71c24] z-50 cursor-auto">
                  <div className="grid grid-cols-2 gap-x-8">
                    {galleryItems.map((item, i) => (
                      <Link
                        to={
                          item.name === "Home Interiors"
                            ? "/home-interiors"
                            : `/home-interiors/${item.name.toLowerCase().replace(/\s+/g, '-')}`
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
            </div>
          ))}
        </div>

        {/* Right CTA */}
        <div className="ml-auto flex items-center gap-4 flex-shrink-0">
          <button className="bg-[#e71c24] hover:bg-[#c41920] text-white text-[14px] font-bold px-6 py-2.5 rounded-[4px] transition-colors whitespace-nowrap">
            Get Free Estimate
          </button>

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
                          : `/home-interiors/${item.name.toLowerCase().replace(/\s+/g, '-')}`
                      }
                      className="flex items-center gap-3 py-2 text-[13px] text-gray-600 hover:text-[#e71c24]"
                    >
                      <div className="w-6 h-6 scale-75">{item.icon}</div>
                      {item.name}
                    </Link>
                  ))}
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
