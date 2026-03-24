import { Link, useNavigate } from "react-router-dom";
import { imageAssets } from "../data/imageAssets";
import { scrollToForm } from "../utils/scrollToForm";

const footerCols = [
  {
    title: "The Studio",
    links: [
      { label: "Our Story", to: "/about-us" },
      { label: "Customer Stories", to: "/customer-stories" },
      { label: "Design Journal", to: "/blogs" },
      { label: "Partnerships", to: null },
    ],
  },
  {
    title: "Our Crafts",
    links: [
      { label: "Modular Kitchens", to: "/home-interiors/modular-kitchen" },
      { label: "Wardrobes", to: "/home-interiors/wardrobe" },
      { label: "Living Spaces", to: "/home-interiors/living-room" },
      { label: "Bedrooms", to: "/home-interiors/bedroom" },
      { label: "Bathrooms", to: "/home-interiors/bathroom" },
      { label: "Full Interiors", to: "/home-interiors" },
    ],
  },
  {
    title: "Inquiries",
    links: [
      { label: "Concierge Support", href: "https://wa.me/919701122528" },
      { label: "Request Design", action: "scrollToForm" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Use", to: "/privacy-policy" },
    ],
  },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/leonex_interio",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/leonex_interio/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/leonex-interio/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#1b1c19] text-[#eae8e3]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-10">
              <img src={imageAssets.logo} alt="Leonex Interio" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-lg md:text-xl font-light text-white/50 leading-relaxed max-w-sm mb-12 italic">
              "We curate environments that tell your unique story through artisan craftsmanship and structural precision."
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  title={s.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#e0b855] hover:border-[#e0b855] transition-all duration-500 group"
                >
                  <svg
                    className="w-4 h-4 fill-white group-hover:fill-white transition-colors"
                    viewBox="0 0 24 24"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerCols.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-black text-[#e0b855] uppercase tracking-[0.25em] mb-8">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-5">
                  {col.links.map((item) => (
                    <li key={item.label}>
                      {item.to ? (
                        <Link
                          to={item.to}
                          className="text-[14px] text-white/40 hover:text-[#e0b855] transition-colors font-light"
                        >
                          {item.label}
                        </Link>
                      ) : item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14px] text-white/40 hover:text-[#e0b855] transition-colors font-light"
                        >
                          {item.label}
                        </a>
                      ) : item.action === "scrollToForm" ? (
                        <button
                          onClick={() => scrollToForm(navigate)}
                          className="text-[14px] text-white/40 hover:text-[#e0b855] transition-colors font-light text-left"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <span className="text-[14px] text-white/20 cursor-default font-light">
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[11px] text-white/20 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Leonex Interio. Artisan Architecture & Design.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="text-[11px] text-white/20 hover:text-white uppercase tracking-[0.2em] transition-colors">
              Privacy
            </Link>
            <Link to="/privacy-policy" className="text-[11px] text-white/20 hover:text-white uppercase tracking-[0.2em] transition-colors">
              Terms
            </Link>
            <span className="text-[11px] text-white/20 uppercase tracking-[0.2em] cursor-default opacity-50">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
