import React from "react";
// WhyChooseUs — matches HomeLane's horizontal icon strip exactly
import warrantyIcon from "../assets/imgi_200_material_warranty.svg";
import designExpertsIcon from "../assets/imgi_201_design_experts.svg";
import homesCompletedIcon from "../assets/imgi_202_homes_completed.svg";
import installationDaysIcon from "../assets/imgi_203_installation_days.svg";

const features = [
  {
    svg: null,
    label: "74 Studios",
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <path
          d="M6 34V20L21 9L36 20V34Z"
          stroke="#e71c24"
          strokeWidth="2"
          fill="none"
          strokeLinejoin="round"
        />
        <rect
          x="16"
          y="24"
          width="10"
          height="10"
          rx="1"
          stroke="#e71c24"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="8"
          y="24"
          width="6"
          height="8"
          rx="1"
          stroke="#e71c24"
          strokeWidth="1.2"
          fill="none"
        />
        <rect
          x="28"
          y="24"
          width="6"
          height="8"
          rx="1"
          stroke="#e71c24"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    svg: null,
    label: "42 Cities",
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <path
          d="M21 37S9 27 9 18a12 12 0 0124 0c0 9-12 19-12 19z"
          stroke="#e71c24"
          strokeWidth="2"
          fill="none"
          strokeLinejoin="round"
        />
        <circle cx="21" cy="18" r="4" fill="#e71c24" />
      </svg>
    ),
  },
  { svg: installationDaysIcon, label: "Delivery in 45 days*" },
  {
    svg: null,
    label: "No Hidden Costs",
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle
          cx="21"
          cy="21"
          r="15"
          stroke="#e71c24"
          strokeWidth="2"
          fill="none"
        />
        <text
          x="21"
          y="25"
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill="#e71c24"
          fontFamily="Lato, sans-serif"
        >
          ₹
        </text>
      </svg>
    ),
  },
  { svg: warrantyIcon, label: "Flat 10 Year Warranty" },
  {
    svg: null,
    label: "Easy EMIs",
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <rect
          x="5"
          y="12"
          width="32"
          height="20"
          rx="3"
          stroke="#e71c24"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="5"
          y1="19"
          x2="37"
          y2="19"
          stroke="#e71c24"
          strokeWidth="1.5"
        />
        <text
          x="21"
          y="30"
          textAnchor="middle"
          fontSize="9"
          fontWeight="700"
          fill="#e71c24"
          fontFamily="Lato, sans-serif"
        >
          EMI
        </text>
      </svg>
    ),
  },
  { svg: designExpertsIcon, label: "600+ In-House Designers" },
  { svg: homesCompletedIcon, label: "55000+ Homes Delivered" },
];

const marqueeAnimation = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

const WhyChooseUs = () => (
  <section className="bg-white relative overflow-hidden my-8 py-6 sm:my-10 sm:py-10 lg:my-16 lg:py-14">
    <style>{marqueeAnimation}</style>
    <div
      className="whitespace-nowrap flex min-w-max"
      style={{
        width: "200%",
        animation: "marquee 22s linear infinite",
        gap: "8px",
      }}
    >
      {[...features, ...features].map((f, i) => (
        <div
          key={i}
          className="flex flex-col items-center cursor-pointer hover:bg-[#f8f8f8] transition-colors mx-2 px-2 py-3 sm:mx-4 sm:px-4 sm:py-5 lg:mx-6 lg:px-6 lg:py-7 gap-2 sm:gap-3"
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: "clamp(56px, 12vw, 110px)",
              height: "clamp(56px, 12vw, 110px)",
              margin: "0 8px",
            }}
          >
            {f.svg ? (
              <img
                src={f.svg}
                alt={f.label}
                className="object-contain"
                style={{
                  width: "clamp(48px, 10vw, 96px)",
                  height: "clamp(48px, 10vw, 96px)",
                  margin: "0 8px",
                }}
              />
            ) : (
              React.cloneElement(f.icon, {
                width: "clamp(48, 10vw, 96)",
                height: "clamp(48, 10vw, 96)",
                style: { margin: "0 8px" },
              })
            )}
          </div>
          <p className="text-[10px] sm:text-[12px] font-semibold text-[#212529] text-center leading-snug whitespace-nowrap max-w-[90px] sm:max-w-[110px]">
            {f.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
