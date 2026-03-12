import { Link, useNavigate } from "react-router-dom";
import hlLogo from "../assets/imgi_110_hllogosvg.svg";
import { scrollToForm } from "../utils/scrollToForm";

const footerCols = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: null },
      { label: "Team", to: null },
      // { label: "Careers", to: null },
      // { label: "Press", to: null },
      { label: "Blog", to: "/blogs" },
      { label: "Partners", to: null },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Modular Kitchens", to: "/home-interiors/modular-kitchen" },
      { label: "Wardrobes", to: "/home-interiors/wardrobe" },
      { label: "Living Room", to: "/home-interiors/living-room" },
      { label: "Bedroom", to: "/home-interiors/bedroom" },
      { label: "Bathroom", to: "/home-interiors/bathroom" },
      { label: "Full Home Interiors", to: "/home-interiors" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Customer Support", href: "https://wa.me/919019166600" },
      { label: "Contact Us", action: "scrollToForm" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Use", to: "/privacy-policy" },
      { label: "Store Locator", to: "/cities" },
      // { label: "Site Map", to: null },
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

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white" style={{ borderTop: "1px solid #e8e8e8" }}>
      {/* Top CTA Section */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-[24px] md:text-[28px] font-bold text-[#212529] mb-2">
              Ready to design your dream home?
            </h2>
            <p className="text-[14px] text-[#7b7b7b]">
              Get started with a free consultation today!
            </p>
          </div>
          <button
            onClick={() => scrollToForm(navigate)}
            className="bg-[#e71c24] hover:bg-[#c41920] text-white text-[15px] font-bold px-10 py-3.5 rounded-[4px] transition-all shadow-md hover:shadow-lg"
          >
            Get Free Estimate
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Brand col */}
        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <img src={hlLogo} alt="HomeLane" className="h-8 mb-4" />
          <p className="text-[13px] text-[#7b7b7b] leading-relaxed mb-5 max-w-xs">
            Interiors you'll love. Without the stress!
            <br />
            Expert home interior design across 42 cities in India.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                title={s.name}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <svg
                  className="w-[16px] h-[16px]"
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
            <h4 className="text-[14px] font-bold mb-6 text-[#212529] uppercase tracking-wider">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-3.5">
              {col.links.map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="text-[14px] text-[#7b7b7b] transition-colors hover:text-[#e71c24]"
                    >
                      {item.label}
                    </Link>
                  ) : item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] text-[#7b7b7b] transition-colors hover:text-[#e71c24] cursor-pointer"
                    >
                      {item.label}
                    </a>
                  ) : item.action === "scrollToForm" ? (
                    <button
                      onClick={() => scrollToForm(navigate)}
                      className="text-[14px] text-[#7b7b7b] transition-colors hover:text-[#e71c24] cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <span className="text-[14px] text-[#7b7b7b] transition-colors hover:text-[#e71c24] cursor-default">
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
      <div style={{ borderTop: "1px solid #f0f0f0" }} className="px-8 py-8">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link
              to="/privacy-policy"
              className="text-[13px] text-[#7b7b7b] hover:text-[#e71c24] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/privacy-policy"
              className="text-[13px] text-[#7b7b7b] hover:text-[#e71c24] transition-colors"
            >
              Terms of Use
            </Link>
            <span className="text-[13px] text-[#7b7b7b] cursor-default">
              Cookie Policy
            </span>
            <Link
              to="/blogs"
              className="text-[13px] text-[#7b7b7b] hover:text-[#e71c24] transition-colors"
            >
              The Design Journal
            </Link>
          </div>
          <span className="text-[13px] text-[#999] text-center">
            © {new Date().getFullYear()} HomeLane.com. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
