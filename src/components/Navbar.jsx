import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { imageAssets } from "../data/imageAssets";

import { galleryItems, navLinks } from "../data/navbarData";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const fn = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state (for shadow)
      setScrolled(currentScrollY > 10);

      // Scroll logic: Standard behavior (Hide on scroll down, Show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down -> Hide
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && currentScrollY > 100) {
        // Scrolling up -> Show
        setIsVisible(true);
      }
      
      // Always show at top
      if (currentScrollY <= 100) setIsVisible(true);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-[#eae8e3] transition-all duration-500 transform ${isVisible ? "translate-y-0" : "-translate-y-full"} ${scrolled ? "shadow-[0_2px_8px_rgba(0,0,0,0.1)]" : "shadow-[0_1px_0_#f0f0f0]"}`}
    >
      {/* ——— Main Nav ——— */}
      <nav className="h-[80px] flex items-center justify-between px-6 lg:px-12 border-b border-[#d1c5b1]/30 font-cinzel">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 mr-12">
          <img src={imageAssets.logo} alt="Leonex Interio" className="h-10 w-auto" />
        </Link>

        {/* Desktop Links — centered */}
        <div className="hidden lg:flex items-center flex-1 justify-center h-full">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="group h-full flex items-center relative"
            >
              {link.to ? (
                <Link
                  to={link.to}
                  className="flex items-center gap-1 px-5 h-full text-[11px] font-bold text-[#1b1c19] hover:text-[#e0b855] transition-all uppercase tracking-[0.2em] whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href="#"
                  className="flex items-center gap-1 px-5 h-full text-[11px] font-bold text-[#1b1c19] hover:text-[#e0b855] transition-all uppercase tracking-[0.2em] whitespace-nowrap"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg
                      viewBox="0 0 10 6"
                      className="w-2 h-2 mt-px fill-current transition-transform duration-300 group-hover:-rotate-180 opacity-60"
                    >
                      <path d="M0 0l5 6 5-6z" />
                    </svg>
                  )}

                  {/* Active Bottom Border on hover */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e0b855] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </a>
              )}

              {/* DESIGN GALLERY DROPDOWN */}
              {link.name === "Design Gallery" && (
                <div className="absolute top-[80px] -left-8 bg-[#eae8e3] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 w-[600px] p-8 border border-[#d1c5b1]/20 z-50 cursor-auto">
                  <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                    {galleryItems.map((item) => (
                      <Link
                        to={
                          item.name === "Home Interiors"
                            ? "/home-interiors"
                            : `/home-interiors/${item.name.toLowerCase().replace(/\s+/g, "-")}`
                        }
                        key={item.name}
                        className="flex items-center gap-5 py-4 group/item border-b border-[#d1c5b1]/10 last:border-0"
                      >
                        <div className="w-10 h-10 flex items-center justify-center shrink-0 opacity-80 group-hover/item:opacity-100 transition-opacity">
                          {item.icon}
                        </div>
                        <span className="text-[12px] font-bold text-[#1b1c19] uppercase tracking-[0.15em] group-hover/item:text-[#e0b855] transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* GUIDES DROPDOWN */}
              {link.name === "Guides" && (
                <div className="absolute top-[80px] left-0 bg-[#eae8e3] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 w-[550px] p-10 border border-[#d1c5b1]/20 z-50 cursor-auto">
                  <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                    {[
                      "Modular Kitchen Design Ideas", "Wardrobe Design Ideas", 
                      "Bedroom Design Ideas", "Living Room Interior Design Ideas",
                      "Home Interior Design Ideas", "Home Decor Trends", "Bathroom Design Ideas"
                    ].map((guide, idx) => (
                      <Link
                        key={idx}
                        to={`/design-ideas/${guide.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-[11px] font-bold text-[#4d4d4d] uppercase tracking-[0.15em] hover:text-[#e0b855] transition-colors"
                      >
                        {guide}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* PRICE CALCULATORS DROPDOWN */}
              {link.name === "Price Calculators" && (
                <div className="absolute top-[80px] left-0 bg-[#eae8e3] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 w-[300px] p-8 border border-[#d1c5b1]/20 z-50 cursor-auto">
                  <div className="flex flex-col gap-y-6">
                    <Link
                      to="/price-calculator/kitchen"
                      className="group/calc flex items-center gap-4 text-[11px] font-bold text-[#4d4d4d] uppercase tracking-[0.15em] hover:text-[#e0b855] transition-colors"
                    >
                      <span className="w-8 h-8 flex items-center justify-center bg-[#1b1c19]/5 rounded-full group-hover/calc:bg-[#e0b855]/10">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#e0b855]" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 15h18" /><rect x="3" y="15" width="18" height="6" rx="0.5" />
                          <rect x="4" y="5" width="7" height="6" rx="0.5" /><rect x="13" y="5" width="7" height="6" rx="0.5" />
                        </svg>
                      </span>
                      Kitchen Calculator
                    </Link>
                    <Link
                      to="/price-calculator/home-interior"
                      className="group/calc flex items-center gap-4 text-[11px] font-bold text-[#4d4d4d] uppercase tracking-[0.15em] hover:text-[#e0b855] transition-colors"
                    >
                      <span className="w-8 h-8 flex items-center justify-center bg-[#1b1c19]/5 rounded-full group-hover/calc:bg-[#e0b855]/10">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#e0b855]" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9.5L12 3l9 6.5" /><path d="M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5" />
                        </svg>
                      </span>
                      Home Calculator
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right CTA */}
        <div className="ml-auto flex items-center gap-6 flex-shrink-0">
          <Link
            to="/price-calculator/home-interior"
            className="hidden lg:flex bg-[#e0b855] hover:bg-[#c4a14a] text-white text-[10px] font-black px-8 py-3.5 rounded-none uppercase tracking-[0.25em] transition-all shadow-xl shadow-gold-500/10 hover:shadow-gold-500/20"
          >
            Get Free Estimate
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-1 text-[#1b1c19]"
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
        <div className="lg:hidden border-t border-[#f0f0f0] bg-[#eae8e3] max-h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-[#d1c5b1]/10">
              {link.to ? (
                <Link
                  to={link.to}
                  className="flex justify-between items-center px-6 py-4 text-[12px] text-[#1b1c19] font-bold uppercase tracking-widest hover:text-[#e0b855]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-[12px] text-[#1b1c19] font-bold uppercase tracking-widest hover:text-[#e0b855]"
                  onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                >
                  {link.name}
                  <svg
                    viewBox="0 0 10 6"
                    className={`w-2.5 h-2.5 fill-current text-[#e0b855] transition-transform duration-300 ${activeDropdown === link.name ? "-rotate-180" : ""}`}
                  >
                    <path d="M0 0l5 6 5-6z" />
                  </svg>
                </button>
              )}

              {/* Collapsible Dropdowns */}
              {activeDropdown === link.name && (
                <div className="bg-[#f2f1ed] px-8 py-4 flex flex-col gap-4 animate-fade-in">
                  {link.name === "Design Gallery" && galleryItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.name === "Home Interiors" ? "/home-interiors" : `/home-interiors/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center gap-4 text-[11px] text-[#4d4637] font-bold uppercase tracking-widest hover:text-[#e0b855]"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="w-5 h-5 opacity-70 scale-75">{item.icon}</div>
                      {item.name}
                    </Link>
                  ))}

                  {link.name === "Guides" && [
                    "Modular Kitchen Design Ideas", "Wardrobe Design Ideas", 
                    "Bedroom Design Ideas", "Living Room Interior Design Ideas",
                    "Home Interior Design Ideas", "Home Decor Trends", "Bathroom Design Ideas"
                  ].map((guide, idx) => (
                    <Link
                      key={idx}
                      to={`/design-ideas/${guide.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-[11px] text-[#4d4637] font-bold uppercase tracking-widest hover:text-[#e0b855]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {guide}
                    </Link>
                  ))}

                  {link.name === "Price Calculators" && (
                    <>
                      <Link
                        to="/price-calculator/kitchen"
                        className="flex items-center gap-4 text-[11px] text-[#4d4637] font-bold uppercase tracking-widest hover:text-[#e0b855]"
                        onClick={() => setMobileOpen(false)}
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#e0b855]" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 15h18" /><rect x="3" y="15" width="18" height="6" rx="0.5" />
                        </svg>
                        Kitchen Calculator
                      </Link>
                      <Link
                        to="/price-calculator/home-interior"
                        className="flex items-center gap-4 text-[11px] text-[#4d4637] font-bold uppercase tracking-widest hover:text-[#e0b855]"
                        onClick={() => setMobileOpen(false)}
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#e0b855]" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9.5L12 3l9 6.5" /><path d="M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5" />
                        </svg>
                        Home Calculator
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
          {/* Mobile persistent CTA */}
          <div className="p-6">
            <Link
              to="/price-calculator/home-interior"
              className="w-full block text-center bg-[#e0b855] text-white py-4 text-[12px] font-black uppercase tracking-[0.2em]"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
