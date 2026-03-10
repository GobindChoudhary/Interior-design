/**
 * ProcessSteps — Reusable tabbed process stepper component
 *
 * Props:
 *   steps: Array<{ tab: string, title: string, desc: string }>
 *   ctaLabel?: string
 */
import { useState } from "react";

export default function ProcessSteps({
  steps = [],
  ctaLabel = "Book Free Design Session",
}) {
  const [active, setActive] = useState(0);

  if (!steps.length) return null;

  return (
    <section className="bg-white">
      {/* Tab bar */}
      <div
        className="overflow-x-auto flex items-center justify-center border-b border-[#f0f0f0] scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className="flex min-w-max max-w-[1400px] mx-auto px-8"
          style={{
            /* Hide scrollbar for Chrome, Safari and Opera */
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-4 text-[13px] font-medium whitespace-nowrap border-b-2 transition-all -mb-px flex flex-col items-center justify-center gap-3 ${
                i === active
                  ? "text-[#e71c24] border-[#e71c24] font-bold"
                  : "text-[#7b7b7b] border-transparent hover:text-[#212529]"
              }`}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              {s.icon && (
                <div className="flex items-center justify-center w-full">
                  <img
                    src={s.icon}
                    alt={s.tab}
                    className="w-42 h-42 object-contain mx-auto"
                  />
                </div>
              )}
              <span className="w-full text-center">
                Step {i + 1}. {s.tab}
              </span>
            </button>
          ))}
        </div>
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <h2 className="text-[22px] font-bold text-center text-[#212529] mb-10">
          From Design to Move-In
        </h2>

        {/* Step circles */}
        <div className="flex items-center justify-center mb-10">
          {steps.map((_, i) => (
            <div key={i} className="flex items-center">
              <button
                onClick={() => setActive(i)}
                className={`w-11 h-11 rounded-full border-2 flex items-center justify-center text-[14px] font-bold transition-all duration-200 ${
                  i === active
                    ? "bg-[#e71c24] border-[#e71c24] text-white scale-110 shadow-md"
                    : i < active
                      ? "bg-[#e71c24] border-[#e71c24] text-white opacity-50"
                      : "bg-white border-[#d0d0d0] text-[#7b7b7b] hover:border-[#e71c24] hover:text-[#e71c24]"
                }`}
              >
                {i + 1}
              </button>
              {i < steps.length - 1 && (
                <div
                  className="h-0.5 w-12 md:w-20"
                  style={{ background: i < active ? "#e71c24" : "#e0e0e0" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Active step card styled as two-column */}
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="w-full flex items-center justify-center">
            {/* Previous Button */}
            <button
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              disabled={active === 0}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl text-[#7b7b7b] hover:text-[#212529] disabled:opacity-30 flex-shrink-0 transition-colors border border-[#d0d0d0] mr-4"
              aria-label="Previous step"
              style={{ alignSelf: "center" }}
            >
              ‹
            </button>
            {/* Card */}
            <div
              className="flex-1 flex flex-col md:flex-row bg-white rounded-lg p-8 gap-8 items-center justify-between"
              style={{
                border: "1px solid #f0f0f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                minWidth: 0,
              }}
            >
              {/* Left: Text */}
              <div className="flex-1 flex flex-col justify-center items-start min-w-[250px]">
                <p className="text-[12px] font-bold text-[#e71c24] uppercase tracking-wide mb-2">
                  Step {active + 1} of {steps.length}
                </p>
                <h3 className="text-[32px] font-bold text-[#212529] mb-4 leading-tight">
                  {steps[active].title}
                </h3>
                <p className="text-[20px] text-[#7b7b7b] leading-relaxed mb-2">
                  {steps[active].desc}
                </p>
              </div>
              {/* Right: Image (if present) */}
              {steps[active].icon && (
                <div className="flex-1 flex items-center justify-center min-w-[250px]">
                  <img
                    src={steps[active].icon}
                    alt={steps[active].tab}
                    className="max-w-[350px] w-full h-auto object-contain"
                    style={{ maxHeight: 260 }}
                  />
                </div>
              )}
            </div>
            {/* Next Button */}
            <button
              onClick={() =>
                setActive((a) => Math.min(steps.length - 1, a + 1))
              }
              disabled={active === steps.length - 1}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl text-[#7b7b7b] hover:text-[#212529] disabled:opacity-30 flex-shrink-0 transition-colors border border-[#d0d0d0] ml-4"
              aria-label="Next step"
              style={{ alignSelf: "center" }}
            >
              ›
            </button>
          </div>
          {/* CTA Button */}
          <button className="mt-8 bg-[#e71c24] hover:bg-[#c41920] text-white font-bold text-[20px] px-12 py-4 rounded-[6px] uppercase tracking-wide transition-colors">
            {ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
