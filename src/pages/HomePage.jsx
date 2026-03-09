/**
 * HomePage — HomeLane clone homepage
 *
 * Uses reusable components: DesignGallery, FAQ, ProcessSteps
 * All data imported from src/data/
 * Non-reusable sections (Hero, WhyChooseUs, etc.) are inlined here
 */
import { useState } from 'react';

// ── Reusable components ──────────────────────────────────────────
import DesignGallery from '../components/DesignGallery';
import ProcessSteps  from '../components/ProcessSteps';
import FAQ           from '../components/FAQ';

// ── Data ─────────────────────────────────────────────────────────
import { gallerySections }        from '../data/galleryData';
import { faqItems }               from '../data/faqData';
import { processSteps }           from '../data/processData';
import {
  features, estimateCards, newsLogos, partnerLogos,
  guarantees, cities,
} from '../data/homeData';

// ── Assets ───────────────────────────────────────────────────────
import heroImg from '../assets/home banner.png';

// ─────────────────────────────────────────────────────────────────
// SECTION: Hero
// ─────────────────────────────────────────────────────────────────
function HeroSection() {
  const [form, setForm] = useState({ name: '', mobile: '', whatsapp: true, city: '' });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you! Our designer will contact you shortly.');
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ marginTop: 70, height: 'calc(100vh - 70px)', minHeight: 500, maxHeight: 640 }}
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
            Interiors<br />you'll love.
          </h1>
          <p className="text-[24px] font-normal text-white/90 mt-2">Without the stress!</p>
        </div>

        {/* Lead form */}
        <div
          className="flex-shrink-0 w-[340px] bg-white rounded-lg overflow-hidden"
          style={{ boxShadow: '0 0 3px #f0f0f0, 0 4px 24px rgba(0,0,0,0.15)' }}
        >
          <div className="p-6">
            <p className="text-[18px] font-bold text-[#212529] mb-4">Meet a designer</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              {/* Name */}
              <div className="border-b border-[#bfbfbf] pb-1 mb-4 focus-within:border-[#e71c24] transition-colors">
                <input
                  type="text" placeholder="Enter your name" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full text-[14px] text-[#212529] placeholder-[#7b7b7b] outline-none bg-transparent py-1"
                />
              </div>
              {/* Mobile */}
              <div className="flex items-center gap-2 border-b border-[#bfbfbf] mb-4 pb-1 focus-within:border-[#e71c24] transition-colors">
                <span className="text-[14px] text-[#212529] flex-shrink-0 py-1">IN ▾</span>
                <span className="text-gray-300 text-xs">|</span>
                <input
                  type="tel" placeholder="Enter your mobile number" value={form.mobile}
                  onChange={e => setForm({ ...form, mobile: e.target.value })}
                  className="flex-1 text-[14px] text-[#212529] placeholder-[#7b7b7b] outline-none bg-transparent py-1"
                />
              </div>
              {/* WhatsApp toggle */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[12px] text-[#7b7b7b]">Send me updates on WhatsApp</span>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, whatsapp: !form.whatsapp })}
                  className={`relative w-11 h-[22px] rounded-full transition-colors duration-200 flex-shrink-0 ${form.whatsapp ? 'bg-[#e71c24]' : 'bg-gray-300'}`}
                >
                  <span className={`absolute top-[3px] w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${form.whatsapp ? 'left-[24px]' : 'left-[3px]'}`} />
                </button>
              </div>
              {/* City */}
              <div className="relative border-b border-[#bfbfbf] mb-5 pb-1 focus-within:border-[#e71c24] transition-colors">
                <select
                  value={form.city}
                  onChange={e => setForm({ ...form, city: e.target.value })}
                  className="w-full text-[14px] text-[#7b7b7b] outline-none bg-transparent appearance-none cursor-pointer pr-5 py-1"
                >
                  <option value="" disabled>Select your property city</option>
                  {cities.map(c => <option key={c}>{c}</option>)}
                </select>
                <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[#7b7b7b] text-xs pointer-events-none">▾</span>
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
            By submitting, you agree to our{' '}
            <a href="#" className="text-[#e71c24]">privacy policy</a> and{' '}
            <a href="#" className="text-[#e71c24]">terms of use</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// SECTION: Why Choose Us — horizontal icon strip
// ─────────────────────────────────────────────────────────────────
const featureIcons = {
  '74 Studios': (
    <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
      <path d="M6 34V20L21 9L36 20V34Z" stroke="#e71c24" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <rect x="16" y="24" width="10" height="10" rx="1" stroke="#e71c24" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  '42 Cities': (
    <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
      <path d="M21 37S9 27 9 18a12 12 0 0124 0c0 9-12 19-12 19z" stroke="#e71c24" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <circle cx="21" cy="18" r="4" fill="#e71c24"/>
    </svg>
  ),
  'Delivery in 45 days*': (
    <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
      <rect x="5" y="10" width="32" height="24" rx="3" stroke="#e71c24" strokeWidth="1.8" fill="none"/>
      <line x1="5" y1="17" x2="37" y2="17" stroke="#e71c24" strokeWidth="1.5"/>
      <text x="21" y="30" textAnchor="middle" fontSize="10" fontWeight="900" fill="#e71c24" fontFamily="Lato">45</text>
    </svg>
  ),
  'No Hidden Costs': (
    <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
      <circle cx="21" cy="21" r="15" stroke="#e71c24" strokeWidth="2" fill="none"/>
      <text x="21" y="25" textAnchor="middle" fontSize="13" fontWeight="700" fill="#e71c24" fontFamily="Lato">₹</text>
    </svg>
  ),
  'Flat 10 Year Warranty': (
    <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
      <path d="M21 5L7 11V21C7 28.5 13 34.5 21 36C29 34.5 35 28.5 35 21V11L21 5Z" stroke="#e71c24" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <path d="M15 21L19 25L27 17" stroke="#e71c24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'Easy EMIs': (
    <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
      <rect x="5" y="12" width="32" height="20" rx="3" stroke="#e71c24" strokeWidth="1.8" fill="none"/>
      <line x1="5" y1="19" x2="37" y2="19" stroke="#e71c24" strokeWidth="1.5"/>
      <text x="21" y="30" textAnchor="middle" fontSize="9" fontWeight="700" fill="#e71c24" fontFamily="Lato">EMI</text>
    </svg>
  ),
  '600+ In-House Designers': (
    <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
      <circle cx="14" cy="14" r="7" stroke="#e71c24" strokeWidth="2" fill="none"/>
      <circle cx="28" cy="14" r="7" stroke="#e71c24" strokeWidth="2" fill="none" opacity="0.5"/>
      <path d="M4 36C4 29 8 25 14 25M14 25C22 25 38 28 38 36" stroke="#e71c24" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  '55000+ Homes Delivered': (
    <svg width="40" height="40" viewBox="0 0 42 42" fill="none">
      <path d="M6 34V20L21 9L36 20V34Z" stroke="#e71c24" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <rect x="16" y="24" width="10" height="10" rx="1" stroke="#e71c24" strokeWidth="1.5" fill="none"/>
      <path d="M13 34V26h4v8M25 34V26h4v8" stroke="#e71c24" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
};

function WhyChooseUs() {
  return (
    <section
      className="bg-white overflow-x-auto"
      style={{ borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}
    >
      <div className="flex items-stretch justify-start lg:justify-center min-w-max">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2.5 px-6 py-5 cursor-pointer hover:bg-[#f8f8f8] transition-colors"
            style={{ borderRight: i < features.length - 1 ? '1px solid #e0e0e0' : 'none' }}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              {featureIcons[f.label]}
            </div>
            <p className="text-[11px] font-semibold text-[#212529] text-center leading-snug whitespace-nowrap max-w-[90px]">
              {f.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// SECTION: Price Estimate
// ─────────────────────────────────────────────────────────────────
const estimateIcons = {
  'full-home': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M6 38V22L24 10L42 22V38Z" stroke="#e71c24" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      <rect x="18" y="28" width="12" height="10" rx="1" stroke="#e71c24" strokeWidth="1.5" fill="none"/>
      <rect x="8" y="28" width="8" height="10" rx="1" stroke="#e71c24" strokeWidth="1.2" fill="none" opacity="0.5"/>
    </svg>
  ),
  kitchen: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="8" width="36" height="32" rx="2" stroke="#e71c24" strokeWidth="1.8" fill="none"/>
      <line x1="6" y1="22" x2="42" y2="22" stroke="#e71c24" strokeWidth="1.5"/>
      <line x1="24" y1="8" x2="24" y2="40" stroke="#e71c24" strokeWidth="1.5"/>
      <rect x="8" y="24" width="14" height="6" rx="1" fill="#e71c24" opacity="0.15"/>
      <rect x="26" y="24" width="14" height="14" rx="1" fill="#e71c24" opacity="0.15"/>
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
          {estimateCards.map(c => (
            <div
              key={c.id}
              className="bg-white rounded-lg p-7 flex flex-col gap-4 cursor-pointer"
              style={{ border: '1px solid #f0f0f0', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
            >
              <div>{estimateIcons[c.id]}</div>
              <div>
                <h3 className="text-[16px] font-bold text-[#212529] mb-1">{c.title}</h3>
                <p className="text-[13px] text-[#7b7b7b] leading-snug">{c.desc}</p>
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
    <section className="bg-[#f8f8f8] py-10 px-8" style={{ borderTop: '1px solid #f0f0f0' }}>
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[11px] font-bold uppercase tracking-[2px] text-center text-[#7b7b7b] mb-5">
          We're making news
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
          {newsLogos.map((m, i) => (
            <img key={i} src={m.img} alt={m.name} title={m.name}
              className="h-7 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          ))}
        </div>
        <div className="h-px mb-10" style={{ background: '#f0f0f0' }} />
        <p className="text-[11px] font-bold uppercase tracking-[2px] text-center text-[#7b7b7b] mb-7">
          Our trusted partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 max-w-4xl mx-auto">
          {partnerLogos.map((p, i) => (
            <img key={i} src={p.img} alt={p.name} title={p.name}
              className="h-7 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// SECTION: CTA Banner + Guarantee Strip
// ─────────────────────────────────────────────────────────────────
const guaranteeIcons = [
  <svg key={0} width="36" height="36" viewBox="0 0 40 40" fill="none"><path d="M20 4L6 10V20C6 28 12 35 20 37C28 35 34 28 34 20V10L20 4Z" fill="none" stroke="#e71c24" strokeWidth="2" strokeLinejoin="round"/><path d="M13 20L17 24L27 14" stroke="#e71c24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key={1} width="36" height="36" viewBox="0 0 40 40" fill="none"><rect x="4" y="8" width="32" height="26" rx="3" stroke="#e71c24" strokeWidth="2" fill="none"/><line x1="4" y1="16" x2="36" y2="16" stroke="#e71c24" strokeWidth="2"/><text x="20" y="29" textAnchor="middle" fontSize="10" fontWeight="900" fill="#e71c24" fontFamily="Lato">45</text></svg>,
  <svg key={2} width="36" height="36" viewBox="0 0 40 40" fill="none"><circle cx="14" cy="14" r="7" stroke="#e71c24" strokeWidth="2" fill="none"/><circle cx="27" cy="14" r="7" stroke="#e71c24" strokeWidth="2" fill="none" opacity="0.5"/><path d="M4 36C4 29 8 25 14 25" stroke="#e71c24" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M14 25C22 25 36 28 36 36" stroke="#e71c24" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>,
  <svg key={3} width="36" height="36" viewBox="0 0 40 40" fill="none"><rect x="4" y="5" width="32" height="30" rx="3" stroke="#e71c24" strokeWidth="2" fill="none"/><path d="M12 22L16 18L20 22L28 14" stroke="#e71c24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

function CTABanner() {
  return (
    <section className="bg-[#f8f8f8]">
      <div className="max-w-[1400px] mx-auto px-8 py-14">
        <h2 className="text-[26px] font-bold text-[#212529] leading-tight mb-3">
          Confused Between Styles,<br />Layouts, and Costs?
        </h2>
        <p className="text-[14px] text-[#7b7b7b] mb-6 max-w-md">
          Meet a designer who'll bring it all together—free.
        </p>
        <button className="bg-[#e71c24] hover:bg-[#c41920] text-white font-bold text-[14px] px-8 py-3 rounded-[4px] uppercase tracking-wide transition-colors">
          Meet a Designer
        </button>
      </div>
      {/* Guarantee strip */}
      <div className="bg-white" style={{ borderTop: '1px solid #f0f0f0' }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {guarantees.map((g, i) => (
            <div
              key={i}
              className="flex items-start gap-4 px-6 py-6 hover:bg-[#f8f8f8] transition-colors"
              style={{ borderRight: i < 3 ? '1px solid #f0f0f0' : 'none' }}
            >
              <div className="flex-shrink-0 mt-0.5">{guaranteeIcons[i]}</div>
              <div>
                <p className="text-[13px] font-bold text-[#212529] mb-1">{g.label}</p>
                <p className="text-[12px] text-[#7b7b7b] leading-relaxed">{g.detail}</p>
              </div>
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
