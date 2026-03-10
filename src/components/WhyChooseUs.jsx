import React from 'react';

// Exact SVG replicas of the 7 features from the HomeLane "Why Choose Us" row

const NoCostIcon = () => (
  <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* the eye shape */}
    <path d="M8 40C8 40 24 16 40 16C56 16 72 40 72 40C72 40 56 64 40 64C24 64 8 40 8 40Z"
      fill="none" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" />
    {/* the colored iris */}
    <circle cx="40" cy="40" r="16" fill="#e71c24" stroke="#212529" strokeWidth="2.5" />
    <text x="40" y="46" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white" fontFamily="sans-serif">₹</text>
  </svg>
);

const WarrantyIcon = () => (
  <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ribbon */}
    <path d="M26 46v20l8-6l6 6v-14" fill="#e71c24" stroke="#e71c24" strokeWidth="2" strokeLinejoin="round" />
    <path d="M54 46v20l-8-6l-6 6v-14" fill="#e71c24" stroke="#e71c24" strokeWidth="2" strokeLinejoin="round" />

    {/* Ribbon outlines */}
    <path d="M26 46v20l8-6l6 6v-14" fill="none" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M54 46v20l-8-6l-6 6v-14" fill="none" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" />

    {/* Scaled zig-zag badge background */}
    <path d="M40 8 L44 13 L51 11 L54 17 L60 17 L61 24 L67 27 L64 34 L69 40 L64 46 L67 53 L61 56 L60 63 L54 63 L51 69 L44 67 L40 72 L36 67 L29 69 L26 63 L20 63 L19 56 L13 53 L16 46 L11 40 L16 34 L13 27 L19 24 L20 17 L26 17 L29 11 L36 13 Z" fill="white" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" />

    {/* Inner dashed circle */}
    <circle cx="40" cy="40" r="16" fill="white" stroke="#212529" strokeWidth="2" strokeDasharray="4 4" />
    <circle cx="40" cy="40" r="12" fill="white" stroke="#212529" strokeWidth="1.5" />
    <text x="40" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#03A9F4" fontFamily="sans-serif">10</text>
  </svg>
);

const EmiIcon = () => (
  <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="14" width="36" height="50" rx="4" fill="white" stroke="#212529" strokeWidth="2.5" />
    <rect x="28" y="22" width="24" height="12" rx="1" fill="none" stroke="#212529" strokeWidth="2.5" />
    <rect x="28" y="40" width="4" height="4" rx="1" fill="#212529" />
    <rect x="38" y="40" width="4" height="4" rx="1" fill="#212529" />
    <rect x="48" y="40" width="4" height="4" rx="1" fill="#212529" />
    <rect x="28" y="50" width="4" height="4" rx="1" fill="#212529" />
    <rect x="38" y="50" width="4" height="4" rx="1" fill="#212529" />
    <rect x="48" y="50" width="4" height="4" rx="1" fill="#212529" />

    {/* Floating percentage badge */}
    <circle cx="60" cy="56" r="14" fill="white" stroke="#e71c24" strokeWidth="2.5" />
    <text x="60" y="62" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#e71c24" fontFamily="sans-serif">%</text>
  </svg>
);

const DesignerIcon = () => (
  <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head */}
    <circle cx="40" cy="24" r="12" fill="white" stroke="#212529" strokeWidth="2.5" />
    {/* Body */}
    <path d="M22 64C22 50 28 44 40 44C52 44 58 50 58 64" fill="#E6EDF5" stroke="#212529" strokeWidth="2.5" strokeLinecap="round" />

    {/* Pencil positioned horizontally across body */}
    <g transform="translate(10, 52)">
      <rect x="0" y="0" width="50" height="10" fill="white" stroke="#212529" strokeWidth="2.5" />
      {/* Pencil tip */}
      <path d="M50 -1 L60 5 L50 11 Z" fill="white" stroke="#212529" strokeWidth="2.5" />
      <path d="M56 3 L60 5 L56 7 Z" fill="#212529" />
      {/* Red stripe on pencil */}
      <line x1="0" y1="5" x2="50" y2="5" stroke="#e71c24" strokeWidth="2" />
    </g>
  </svg>
);

const HomesIcon = () => (
  <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 36L40 14L68 36" stroke="#212529" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 30V64H60V30" fill="white" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" />
    {/* Heart symbol centered */}
    <path d="M40 52C40 52 28 42 28 34C28 30 32 26 36 26C38.2 26 40 28 40 28C40 28 41.8 26 44 26C48 26 52 30 52 34C52 42 40 52 40 52Z" fill="#e71c24" stroke="#e71c24" strokeWidth="1" strokeLinejoin="round" />
  </svg>
);

const StudiosIcon = () => (
  <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="24" width="48" height="40" fill="white" stroke="#212529" strokeWidth="2.5" />
    <path d="M12 24L18 16H62L68 24H12Z" fill="#E6EDF5" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" />
    {/* Blue stripes for the awning */}
    <line x1="24" y1="17" x2="20" y2="23" stroke="#e71c24" strokeWidth="3" opacity="0.4" />
    <line x1="36" y1="17" x2="32" y2="23" stroke="#e71c24" strokeWidth="3" opacity="0.4" />
    <line x1="48" y1="17" x2="44" y2="23" stroke="#e71c24" strokeWidth="3" opacity="0.4" />
    <line x1="60" y1="17" x2="56" y2="23" stroke="#e71c24" strokeWidth="3" opacity="0.4" />

    <rect x="46" y="42" width="12" height="22" fill="#e71c24" stroke="#212529" strokeWidth="2.5" />
    <rect x="22" y="32" width="18" height="14" fill="white" stroke="#212529" strokeWidth="2.5" />
  </svg>
);

const CitiesIcon = () => (
  <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background building */}
    <rect x="22" y="20" width="22" height="44" fill="#E6EDF5" stroke="#212529" strokeWidth="2.5" />
    <rect x="28" y="28" width="2" height="2" fill="#212529" />
    <rect x="36" y="28" width="2" height="2" fill="#212529" />
    <rect x="28" y="36" width="2" height="2" fill="#212529" />
    <rect x="36" y="36" width="2" height="2" fill="#212529" />

    {/* Foreground building showing a bit of red */}
    <rect x="38" y="40" width="24" height="24" fill="white" stroke="#212529" strokeWidth="2.5" />
    <rect x="44" y="52" width="4" height="12" fill="#e71c24" stroke="#212529" strokeWidth="2" />
    <rect x="54" y="46" width="4" height="4" fill="#212529" />
  </svg>
);

const items = [
  { Icon: NoCostIcon, label: 'No Hidden Costs' },
  { Icon: WarrantyIcon, label: 'Flat 10 Year Warranty' },
  { Icon: EmiIcon, label: 'Easy EMIs' },
  { Icon: DesignerIcon, label: '600+\nIn-House Designers' },
  { Icon: HomesIcon, label: '55000+\nHomes Delivered' },
  { Icon: StudiosIcon, label: '74 Studios' },
  { Icon: CitiesIcon, label: '42 Cities' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-12 px-6" style={{ borderBottom: '1px solid #f0f0f0' }}>
      <h2 className="text-[26px] font-bold text-center text-[#212529] mb-12">
        Why Choose Us
      </h2>

      <div className="max-w-[1240px] mx-auto flex flex-wrap items-start justify-center gap-6 md:gap-x-10 lg:gap-x-12">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 cursor-pointer group"
            style={{ width: 125 }}
          >
            {/* icon */}
            <div className="w-[80px] h-[80px] flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
              <item.Icon />
            </div>
            {/* label */}
            <p className="text-[14px] font-medium text-[#212529] text-center leading-snug">
              {item.label.split('\n').map((line, j) => (
                <span key={j} className="block">{line}</span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
