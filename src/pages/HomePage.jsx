/**
 * HomePage — Leonex Interio clone homepage
 *
 * Uses reusable components: DesignGallery, FAQ, ProcessSteps, WhyChooseUs, CTABanner
 * All data imported from src/data/
 */

import { Link } from "react-router-dom";
import DesignGallery from "../components/DesignGallery";
import FAQ from "../components/FAQ";
import WhyChooseUs from "../components/WhyChooseUs";
import CTABanner from "../components/CTABanner";

// ── Data ─────────────────────────────────────────────────────────
import { gallerySections } from "../data/galleryData";
import { faqItems } from "../data/faqData";
import { estimateCards } from "../data/homeData";

// ── Assets ───────────────────────────────────────────────────────
import heroImg from "../../public/hero section.jpg";

// ─────────────────────────────────────────────────────────────────
// SECTION: Hero
// ─────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#1b1c19]">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Leonex Interio Luxury Interior Design"
          className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b1c19] via-[#1b1c19]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#eae8e3] to-transparent" />
      </div>

      <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-4xl">
          <span className="uppercase tracking-[0.5em] text-[10px] md:text-[12px] font-bold text-[#e0b855] mb-8 block animate-fade-in-up">
            Hyderabad — Premium Interior Architecture
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[140px] font-cinzel font-black leading-[0.85] tracking-tighter text-white mb-12 animate-fade-in-up delay-100">
            Design <br />
            <span className="italic font-normal serif text-[#e0b855] opacity-90">for Life.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 pt-8 animate-fade-in-up delay-200">
            <p className="max-w-md text-lg md:text-xl text-white/70 font-light leading-relaxed italic border-l-2 border-[#e0b855] pl-8">
              "We don't just design spaces; we curate environments that tell your unique story through artisan craftsmanship."
            </p>
            <Link
              to="/price-calculator/home-interior"
              className="group flex items-center gap-6 bg-[#e0b855] hover:bg-[#c4a14a] text-white px-10 py-5 font-black uppercase tracking-[0.3em] text-[11px] transition-all"
            >
              Start Your Journey
              <span className="w-12 h-px bg-white group-hover:w-20 transition-all duration-500"></span>
            </Link>
          </div>
        </div>

        {/* Floating Stat Indicator */}
        <div className="absolute bottom-20 right-12 hidden lg:block animate-fade-in delay-500">
          <div className="flex flex-col items-end">
            <span className="text-[120px] font-cinzel font-black text-white/5 leading-none">55K+</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#e0b855] font-bold -mt-8 mr-2">Homes Delivered</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// SECTION: Price Estimate Icons Helper
// ─────────────────────────────────────────────────────────────────
const estimateIcons = {
  "full-home": (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M6 38V22L24 10L42 22V38Z" stroke="#e0b855" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      <rect x="18" y="28" width="12" height="10" rx="1" stroke="#e0b855" strokeWidth="1.5" fill="none" />
      <rect x="8" y="28" width="8" height="10" rx="1" stroke="#e0b855" strokeWidth="1.2" fill="none" opacity="0.5" />
    </svg>
  ),
  kitchen: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="8" width="36" height="32" rx="2" stroke="#e0b855" strokeWidth="1.8" fill="none" />
      <line x1="6" y1="22" x2="42" y2="22" stroke="#e0b855" strokeWidth="1.5" />
      <line x1="24" y1="8" x2="24" y2="40" stroke="#e0b855" strokeWidth="1.5" />
      <rect x="8" y="24" width="14" height="6" rx="1" fill="#e0b855" opacity="0.15" />
      <rect x="26" y="24" width="14" height="14" rx="1" fill="#e0b855" opacity="0.15" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────
// SECTION: Price Estimate
// ─────────────────────────────────────────────────────────────────
function PriceEstimate() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-[#eae8e3]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#e0b855] mb-6 block">Transparency & Value</span>
            <h2 className="text-5xl md:text-7xl font-cinzel font-black leading-[0.9] tracking-tighter text-[#1b1c19]">
              Investment <br />
              <span className="italic font-normal serif opacity-60">for your Sanctuary.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-[#4d4637] leading-relaxed font-light mb-4 text-right">
            Begin with a precise roadmap. Our estimates are built on artisan honesty and structural precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#d1c5b1]/30 border border-[#d1c5b1]/30 overflow-hidden">
          {estimateCards.map((c) => (
            <div
              key={c.id}
              className="bg-[#eae8e3] p-12 md:p-20 group hover:bg-[#f2f1ed] transition-all duration-700"
            >
              <div className="mb-12 opacity-80 group-hover:opacity-100 transition-opacity">
                {estimateIcons[c.id]}
              </div>
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-cinzel font-black text-[#1b1c19] mb-4">
                  {c.title}
                </h3>
                <p className="text-[#4d4637] leading-relaxed font-light max-w-sm">
                  {c.desc}
                </p>
              </div>
              <Link
                to={c.id === 'kitchen' ? "/price-calculator/kitchen" : "/price-calculator/home-interior"}
                className="inline-flex items-center gap-4 text-[#e0b855] font-black uppercase tracking-[0.2em] text-[10px] group/btn"
              >
                Request Detailed Quote
                <span className="w-8 h-px bg-[#e0b855] group-hover/btn:w-16 transition-all duration-500"></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// HOME PAGE — assembles all sections
// ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="bg-[#eae8e3]">
      <HeroSection />
      <WhyChooseUs />
      <DesignGallery sections={gallerySections} />
      <PriceEstimate />
      <CTABanner />
      <FAQ items={faqItems} />
    </main>
  );
}
