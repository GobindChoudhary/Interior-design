/**
 * HomePage — HomeLane clone homepage
 *
 * Uses reusable components: DesignGallery, FAQ, ProcessSteps
 * All data imported from src/data/
 * Non-reusable sections (Hero, WhyChooseUs, etc.) are inlined here
 */
import { useState } from "react";

// ── Reusable components ──────────────────────────────────────────
import DesignGallery from "../components/DesignGallery";
import ProcessSteps from "../components/ProcessSteps";
import FAQ from "../components/FAQ";
import WhyChooseUs from "../components/WhyChooseUs";
import CTABanner from "../components/CTABanner";

// ── Data ─────────────────────────────────────────────────────────
import { gallerySections } from "../data/galleryData";
import { faqItems } from "../data/faqData";
import { processSteps } from "../data/processData";
import {
  features,
  estimateCards,
  newsLogos,
  partnerLogos,
  guarantees,
  cities,
} from "../data/homeData";

// ── Assets ───────────────────────────────────────────────────────
import heroImg from "../assets/home banner.avif";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─────────────────────────────────────────────────────────────────
// SECTION: Hero
// ─────────────────────────────────────────────────────────────────
function HeroSection() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    whatsapp: true,
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our designer will contact you shortly.");
  };

  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          // marginTop: 70,
          height: "calc(100vh - 70px)",
          minHeight: 500,
          // maxHeight: 640,
        }}
      >
        <img
          src={heroImg}
          alt="HomeLane home interior design"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />

        <div className="relative h-full max-w-[1400px] mx-auto px-8 flex items-center justify-between gap-8">
          {/* Left heading */}
          <div className="text-white">
            <h1 className="text-[48px] font-black leading-[1.1] tracking-[-0.01em]">
              Interiors
              <br />
              you'll love.
            </h1>
            <p className="text-[24px] font-normal text-white/90 mt-2">
              Without the stress!
            </p>
          </div>

          {/* Lead form */}
          <div
            className="flex-shrink-0 w-[340px] bg-white rounded-lg overflow-hidden"
            style={{ boxShadow: "0 0 3px #f0f0f0, 0 4px 24px rgba(0,0,0,0.15)" }}
          >
            <div className="p-6">
              <p className="text-[18px] font-bold text-[#212529] mb-4">
                Meet a designer
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col">
                {/* Name */}
                <div className="border-b border-[#bfbfbf] pb-1 mb-4 focus-within:border-[#e71c24] transition-colors">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full text-[14px] text-[#212529] placeholder-[#7b7b7b] outline-none bg-transparent py-1"
                  />
                </div>
                {/* Mobile */}
                <div className="flex items-center gap-2 border-b border-[#bfbfbf] mb-4 pb-1 focus-within:border-[#e71c24] transition-colors">
                  <span className="text-[14px] text-[#212529] flex-shrink-0 py-1">
                    IN ▾
                  </span>
                  <span className="text-gray-300 text-xs">|</span>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="flex-1 text-[14px] text-[#212529] placeholder-[#7b7b7b] outline-none bg-transparent py-1"
                  />
                </div>
                {/* WhatsApp toggle */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] text-[#7b7b7b]">
                    Send me updates on WhatsApp
                  </span>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, whatsapp: !form.whatsapp })}
                    className={`relative w-11 h-[22px] rounded-full transition-colors duration-200 flex-shrink-0 ${form.whatsapp ? "bg-[#e71c24]" : "bg-gray-300"}`}
                  >
                    <span
                      className={`absolute top-[3px] w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${form.whatsapp ? "left-[24px]" : "left-[3px]"}`}
                    />
                  </button>
                </div>
                {/* City */}
                <div className="relative border-b border-[#bfbfbf] mb-5 pb-1 focus-within:border-[#e71c24] transition-colors">
                  <select
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full text-[14px] text-[#7b7b7b] outline-none bg-transparent appearance-none cursor-pointer pr-5 py-1"
                  >
                    <option value="" disabled>
                      Select your property city
                    </option>
                    {cities.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[#7b7b7b] text-xs pointer-events-none">
                    ▾
                  </span>
                </div>
                {/* CTA */}
                <button
                  type="submit"
                  className="w-full h-12 bg-[#e71c24] hover:bg-[#c41920] text-white font-bold text-[14px] rounded-[4px] transition-colors uppercase tracking-wide"
                >
                  Book 3D Design Session
                </button>
              </form>
            </div>
            <p className="px-6 pb-4 text-[11px] text-[#7b7b7b] leading-relaxed">
              By submitting, you agree to our{" "}
              <a href="#" className="text-[#e71c24]">
                privacy policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#e71c24]">
                terms of use
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// WhyChooseUs is now a standalone component — see src/components/WhyChooseUs.jsx

// ─────────────────────────────────────────────────────────────────
// SECTION: Price Estimate
// ─────────────────────────────────────────────────────────────────
const estimateIcons = {
  "full-home": (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M6 38V22L24 10L42 22V38Z"
        stroke="#e71c24"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      <rect
        x="18"
        y="28"
        width="12"
        height="10"
        rx="1"
        stroke="#e71c24"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="8"
        y="28"
        width="8"
        height="10"
        rx="1"
        stroke="#e71c24"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
    </svg>
  ),
  kitchen: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect
        x="6"
        y="8"
        width="36"
        height="32"
        rx="2"
        stroke="#e71c24"
        strokeWidth="1.8"
        fill="none"
      />
      <line x1="6" y1="22" x2="42" y2="22" stroke="#e71c24" strokeWidth="1.5" />
      <line x1="24" y1="8" x2="24" y2="40" stroke="#e71c24" strokeWidth="1.5" />
      <rect
        x="8"
        y="24"
        width="14"
        height="6"
        rx="1"
        fill="#e71c24"
        opacity="0.15"
      />
      <rect
        x="26"
        y="24"
        width="14"
        height="14"
        rx="1"
        fill="#e71c24"
        opacity="0.15"
      />
    </svg>
  ),
};

function PriceEstimate() {
  return (
    <section className="bg-[#f8f8f8] py-12 px-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-[22px] font-bold text-center text-[#212529] mb-2">
          Get an estimate for your <span className="text-[#e71c24]">Home.</span>
        </h2>
        <p className="text-[14px] text-center text-[#7b7b7b] mb-10">
          Calculate the cost of doing up your home interiors now.
        </p>
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {estimateCards.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-lg p-7 flex flex-col gap-4 cursor-pointer"
              style={{
                border: "1px solid #f0f0f0",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <div>{estimateIcons[c.id]}</div>
              <div>
                <h3 className="text-[16px] font-bold text-[#212529] mb-1">
                  {c.title}
                </h3>
                <p className="text-[13px] text-[#7b7b7b] leading-snug">
                  {c.desc}
                </p>
              </div>
              <button className="w-fit bg-[#e71c24] hover:bg-[#c41920] text-white text-[13px] font-bold px-5 py-2.5 rounded-[4px] transition-colors">
                Get Free Estimate
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// SECTION: Partners & Media
// ─────────────────────────────────────────────────────────────────
function PartnersSection() {
  return (
    <section
      className="bg-[#f8f8f8] py-10 px-8"
      style={{ borderTop: "1px solid #f0f0f0" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[11px] font-bold uppercase tracking-[2px] text-center text-[#7b7b7b] mb-5">
          We're making news
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
          {newsLogos.map((m, i) => (
            <img
              key={i}
              src={m.img}
              alt={m.name}
              title={m.name}
              className="h-7 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            />
          ))}
        </div>
        <div className="h-px mb-10" style={{ background: "#f0f0f0" }} />
        <p className="text-[11px] font-bold uppercase tracking-[2px] text-center text-[#7b7b7b] mb-7">
          Our trusted partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 max-w-4xl mx-auto">
          {partnerLogos.map((p, i) => (
            <img
              key={i}
              src={p.img}
              alt={p.name}
              title={p.name}
              className="h-7 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// SECTION: CTA Banner + Guarantee Strip
// ─────────────────────────────────────────────────────────────────
// CTABanner is now a standalone component — see src/components/CTABanner.jsx

// ─────────────────────────────────────────────────────────────────
// HOME PAGE — assembles all sections
// ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <DesignGallery sections={gallerySections} />
      <PriceEstimate />
      <ProcessSteps steps={processSteps} />
      <PartnersSection />
      <CTABanner />
      <FAQ items={faqItems} />
    </main>
  );
}
