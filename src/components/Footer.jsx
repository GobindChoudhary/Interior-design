import { Link } from "react-router-dom";
import hlLogo from "../assets/imgi_110_hllogosvg.svg";

const footerCols = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: null },
      { label: "Team", to: null },
      { label: "Careers", to: null },
      { label: "Press", to: null },
      { label: "Blog", to: "/blogs" },
      { label: "Partners", to: null },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Modular Kitchens", to: "/home-interiors/modular-kitchens" },
      { label: "Wardrobes", to: "/home-interiors/wardrobes" },
      { label: "Living Room", to: "/home-interiors/living-room" },
      { label: "Bedroom", to: "/home-interiors/bedroom" },
      { label: "Bathroom", to: "/home-interiors/bathroom" },
      { label: "Full Home Interiors", to: "/home-interiors" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Customer Support", to: null },
      { label: "Contact Us", to: null },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Use", to: "/privacy-policy" },
      { label: "Store Locator", to: "/cities" },
      { label: "Site Map", to: null },
    ],
  },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/homelane.india",
    color: "#1877F2",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/homelane/",
    color: "#E4405F",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@HomeLane",
    color: "#FF0000",
    path: "M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/homelane/",
    color: "#0A66C2",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

const Footer = () => (
  <footer className="bg-[#f8f8f8]" style={{ borderTop: "1px solid #e8e8e8" }}>
    <div className="max-w-[1400px] mx-auto px-8 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
      {/* Brand col */}
      <div className="col-span-2 md:col-span-3 lg:col-span-2">
        <img src={hlLogo} alt="HomeLane" className="h-8 mb-4" />
        <p className="text-[13px] text-[#7b7b7b] leading-relaxed mb-5 max-w-xs">
          Interiors you'll love. Without the stress!
          <br />
          Expert home interior design across 42 cities in India.
        </p>
        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              title={s.name}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-shadow"
              style={{ border: "1px solid #e0e0e0" }}
            >
              <svg
                className="w-[14px] h-[14px]"
                fill={s.color}
                viewBox="0 0 24 24"
              >
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Link columns */}
      {footerCols.map((col) => (
        <div key={col.title}>
          <h4
            className="text-[13px] font-bold mb-4 uppercase tracking-wide"
            style={{ color: "rgba(0,0,0,0.8)" }}
          >
            {col.title}
          </h4>
          <ul className="flex flex-col gap-2.5">
            {col.links.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <Link
                    to={item.to}
                    className="text-[13px] transition-colors hover:text-[#e71c24]"
                    style={{ color: "#7b7b7b" }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="text-[13px] transition-colors hover:text-[#e71c24] cursor-default"
                    style={{ color: "#7b7b7b" }}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Bottom bar */}
    <div style={{ borderTop: "1px solid #e0e0e0" }} className="px-8 py-4">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-[12px] text-[#7b7b7b]">
          © {new Date().getFullYear()} HomeLane.com. All rights reserved.
        </span>
        <div className="flex gap-6">
          <Link
            to="/privacy-policy"
            className="text-[12px] text-[#7b7b7b] hover:text-[#e71c24] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/privacy-policy"
            className="text-[12px] text-[#7b7b7b] hover:text-[#e71c24] transition-colors"
          >
            Terms of Use
          </Link>
          <span className="text-[12px] text-[#7b7b7b]">Cookie Policy</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
