import React from "react";
import { useNavigate } from "react-router-dom";
import { scrollToForm } from "../utils/scrollToForm";
import promoBannerBg from "../assets/promoBannerBG.png";
// Decorative Trust Icons based on the second screenshot
const WarrantyShieldIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 16L16 26V42C16 56 26 68 40 72C54 68 64 56 64 42V26L40 16Z"
      stroke="#212529"
      strokeWidth="3"
      strokeLinejoin="round"
      fill="white"
    />
    <path d="M24 38L40 28V62C30 58 24 48 24 38Z" fill="#e71c24" opacity="0.1" />
    {/* Checkmark inside shield */}
    <path
      d="M30 42L38 50L50 34"
      stroke="#e71c24"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="20"
      y="24"
      width="40"
      height="44"
      rx="4"
      fill="white"
      stroke="#212529"
      strokeWidth="3"
    />
    <path d="M20 40H60" stroke="#212529" strokeWidth="3" />
    <line
      x1="28"
      y1="16"
      x2="28"
      y2="32"
      stroke="#e71c24"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="52"
      y1="16"
      x2="52"
      y2="32"
      stroke="#e71c24"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <text
      x="40"
      y="56"
      textAnchor="middle"
      fontSize="16"
      fontWeight="bold"
      fill="#e71c24"
      fontFamily="sans-serif"
    >
      45
    </text>
    <text
      x="40"
      y="64"
      textAnchor="middle"
      fontSize="8"
      fontWeight="bold"
      fill="#212529"
      fontFamily="sans-serif"
    >
      DAYS
    </text>
  </svg>
);

const SealIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 16 C46 16 48 20 54 22 C60 24 64 30 64 36 C64 42 60 48 54 50 C48 52 46 56 40 56 C34 56 32 52 26 50 C20 48 16 42 16 36 C16 30 20 24 26 22 C32 20 34 16 40 16 Z"
      fill="white"
      stroke="#212529"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M30 36L38 44L50 28"
      stroke="#e71c24"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 50V68L40 62L52 68V50"
      stroke="#212529"
      strokeWidth="3"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);

const ToolsIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="40"
      cy="40"
      r="24"
      fill="white"
      stroke="#212529"
      strokeWidth="3"
    />
    {/* Wrench shape crossing */}
    <path
      d="M30 50L44 36C46 34 50 34 52 38C54 42 50 46 48 44L34 58"
      stroke="#e71c24"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Screwdriver shape crossing */}
    <path
      d="M50 50L36 36"
      stroke="#212529"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect x="28" y="28" width="8" height="8" rx="2" fill="#212529" />
  </svg>
);

const trustFeatures = [
  {
    Icon: WarrantyShieldIcon,
    title: "Flat 10 year warranty",
    description:
      "Choose interiors designed with superior quality material, leaving no room for...", // Shortened text based on screenshot visibility
  },
  {
    Icon: CalendarIcon,
    title: "45-days delivery*",
    description:
      "Get beautiful interiors for your new home in just 45 days. That's our delivery...",
  },
  {
    Icon: SealIcon,
    title: "600+ design experts",
    description:
      "Explore design ideas and co-create your dream home with our experienced...",
  },
  {
    Icon: ToolsIcon,
    title: "Post-installation service",
    description:
      "Complete your design journey and get unwavering support from our dedicated...",
  },
];

export default function PromoBanner() {
  const navigate = useNavigate();
  return (
    <section className="bg-white ">
      {/* Top Gray Section */}
      <div
        style={{
          backgroundImage: `url(${promoBannerBg})`,
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          //   borderRadius: "200px 200px 0 0",
          //   backgroundColor: "rgba(0,0,0,0.02)",
        }}
        className="bg-[#f8f8f8] pt-16 pb-0 overflow-hidden relative border-t border-gray-200"
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left: Text & CTA */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 pb-16 md:pb-24">
            <h2 className="text-3xl md:text-[42px] font-normal text-[#212529] mb-4 tracking-tight">
              Confused Between Styles, Layouts, and Costs?
            </h2>
            <p className="text-xl md:text-[22px] text-gray-600 font-light mb-10">
              Meet a designer who'll bring it all together—free.
            </p>
            <button onClick={() => scrollToForm(navigate)} className="bg-[#e71c24] text-white px-8 py-3.5 rounded-[4px] text-lg font-medium hover:bg-[#c41920] transition-colors shadow-lg shadow-red-500/30">
              Meet a Designer
            </button>
          </div>
        </div>
      </div>

      {/* Bottom White Trust Strip */}
      <div className="border-t border-gray-200 border-b relative z-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${idx !== trustFeatures.length - 1 ? "lg:border-r border-gray-200 lg:pr-8" : ""}`}
              >
                <div className="mb-4">
                  <feature.Icon />
                </div>
                <h4 className="text-[17px] font-normal text-[#212529] mb-3">
                  {feature.title}
                </h4>
                <p
                  className="text-[13px] text-gray-500 leading-relaxed font-light px-2"
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
