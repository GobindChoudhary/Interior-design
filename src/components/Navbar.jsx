import { useState, useEffect } from 'react';
import hlLogo from '../assets/imgi_110_hllogosvg.svg';

const navLinks = [
  'Design Gallery', 'Guides', 'Cities', 'Offerings', 'Price Calculators', 'More'
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-[0_2px_8px_rgba(0,0,0,0.1)]' : 'shadow-[0_1px_0_#f0f0f0]'}`}
    >
      {/* ——— Main Nav ——— */}
      <nav className="max-w-[1400px] mx-auto px-6 flex items-center h-[70px] gap-6">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 mr-2">
          <img src={hlLogo} alt="HomeLane" className="h-9 w-auto" />
        </a>

        {/* Desktop Links — centered */}
        <div className="hidden lg:flex items-center flex-1 justify-center gap-0">
          {navLinks.map(link => (
            <a
              key={link}
              href="#"
              className="flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium text-[#212529] hover:text-[#e71c24] transition-colors whitespace-nowrap"
            >
              {link}
              <svg viewBox="0 0 10 6" className="w-2.5 h-2.5 mt-0.5 fill-current text-gray-400">
                <path d="M0 0l5 6 5-6z"/>
              </svg>
            </a>
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
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#f0f0f0] bg-white">
          {navLinks.map(link => (
            <a key={link} href="#" className="block px-6 py-3 text-[14px] text-[#212529] hover:text-[#e71c24] border-b border-[#f8f8f8]">
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
