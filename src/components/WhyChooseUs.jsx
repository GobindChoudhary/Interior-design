import React from 'react';
import { imageAssets } from '../data/imageAssets';

// Reusable Icon Wrapper for a premium look
const IconWrapper = ({ children }) => (
  <div className="w-20 h-20 bg-[#1b1c19]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#e0b855]/10 transition-colors duration-500">
    <div className="scale-110 group-hover:scale-125 transition-transform duration-500">
      {children}
    </div>
  </div>
);

const NoCostIcon = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 40C8 40 24 16 40 16C56 16 72 40 72 40C72 40 56 64 40 64C24 64 8 40 8 40Z" fill="none" stroke="#e0b855" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="40" cy="40" r="16" fill="#1b1c19" />
    <text x="40" y="46" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#e0b855" fontFamily="sans-serif">₹</text>
  </svg>
);

const WarrantyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 46v20l8-6l6 6v-14" fill="#e0b855" stroke="#e0b855" strokeWidth="2" />
    <path d="M54 46v20l-8-6l-6 6v-14" fill="#e0b855" stroke="#e0b855" strokeWidth="2" />
    <circle cx="40" cy="40" r="24" fill="white" stroke="#1b1c19" strokeWidth="2.5" />
    <text x="40" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1b1c19" fontFamily="sans-serif">10Y</text>
  </svg>
);

const EmiIcon = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="14" width="36" height="50" rx="4" fill="white" stroke="#1b1c19" strokeWidth="2.5" />
    <circle cx="60" cy="56" r="14" fill="#e0b855" />
    <text x="60" y="62" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white" fontFamily="sans-serif">%</text>
  </svg>
);

const DesignerIcon = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="24" r="12" fill="white" stroke="#1b1c19" strokeWidth="2.5" />
    <path d="M22 64C22 50 28 44 40 44C52 44 58 50 58 64" fill="none" stroke="#e0b855" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const HomesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 36L40 14L68 36" stroke="#1b1c19" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 30V64H60V30" fill="white" stroke="#1b1c19" strokeWidth="2.5" />
    <path d="M40 52C40 52 28 42 28 34C28 30 32 26 36 26C40 26 40 28 40 28C40 28 40 26 44 26C48 26 52 30 52 34C52 42 40 52 40 52Z" fill="#e0b855" />
  </svg>
);

const items = [
  { Icon: NoCostIcon, label: 'Absolute Transparency', desc: 'No hidden costs, no surprises. Just honest, artisan pricing.' },
  { Icon: WarrantyIcon, label: 'Unmatched 10Y Warranty', desc: 'A decade of peace of mind with our structural guarantee.' },
  { Icon: EmiIcon, label: 'Effortless Ownership', desc: 'Easy EMI options tailored to your financial comfort.' },
  { Icon: DesignerIcon, label: 'Artisan Designers', desc: '600+ award-winning internal design architects.' },
  { Icon: HomesIcon, label: 'Proven Excellence', desc: 'Over 55,000 homes transformed into living sanctuaries.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-[#eae8e3]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Left Content - Editorial Intro */}
          <div className="lg:col-span-5">
            <span className="uppercase tracking-[0.4em] text-[10px] md:text-[12px] font-bold text-[#e0b855] mb-8 block">
              The Leonex Philosophy
            </span>
            <h2 className="text-5xl md:text-7xl font-cinzel font-black leading-[0.9] tracking-tighter text-[#1b1c19] mb-12">
              Why <br />
              <span className="italic font-normal serif opacity-60">Leonex Interio?</span>
            </h2>
            <div className="w-24 h-px bg-[#e0b855] mb-12" />
            <p className="text-lg md:text-xl text-[#4d4637] font-light leading-relaxed mb-12 max-w-md italic">
              "Excellence is not an act, but a habit. We've spent decades perfecting the art of home transformation."
            </p>
            <div className="hidden lg:block">
              <img 
                src={imageAssets.whyLeonex} 
                alt="Luxury Detail" 
                className="w-full aspect-[4/5] object-cover transition-all duration-700 pointer-events-none"
              />
            </div>
          </div>

          {/* Right Content - Modern Grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-20">
              {items.map((item, i) => (
                <div key={i} className="group cursor-default">
                  <IconWrapper>
                    <item.Icon />
                  </IconWrapper>
                  <h3 className="text-xl md:text-2xl font-cinzel font-black text-[#1b1c19] mb-4 group-hover:text-[#e0b855] transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-sm md:text-base text-[#4d4637] font-light leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
