/**
 * ProcessSteps — Reusable tabbed process stepper component
 *
 * Props:
 *   steps: Array<{ tab: string, title: string, desc: string }>
 *   ctaLabel?: string
 */
import { useState } from 'react';

export default function ProcessSteps({ steps = [], ctaLabel = 'Book Free Design Session' }) {
  const [active, setActive] = useState(0);

  if (!steps.length) return null;

  return (
    <section className="bg-white">
      {/* Tab bar */}
      <div className="overflow-x-auto border-b border-[#f0f0f0]">
        <div className="flex min-w-max max-w-[1400px] mx-auto px-8">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-4 text-[13px] font-medium whitespace-nowrap border-b-2 transition-all -mb-px ${
                i === active
                  ? 'text-[#e71c24] border-[#e71c24] font-bold'
                  : 'text-[#7b7b7b] border-transparent hover:text-[#212529]'
              }`}
            >
              Step {i + 1}. {s.tab}
            </button>
          ))}
        </div>
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
                    ? 'bg-[#e71c24] border-[#e71c24] text-white scale-110 shadow-md'
                    : i < active
                    ? 'bg-[#e71c24] border-[#e71c24] text-white opacity-50'
                    : 'bg-white border-[#d0d0d0] text-[#7b7b7b] hover:border-[#e71c24] hover:text-[#e71c24]'
                }`}
              >
                {i + 1}
              </button>
              {i < steps.length - 1 && (
                <div
                  className="h-0.5 w-12 md:w-20"
                  style={{ background: i < active ? '#e71c24' : '#e0e0e0' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Active step card */}
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <button
            onClick={() => setActive(a => Math.max(0, a - 1))}
            disabled={active === 0}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl text-[#7b7b7b] hover:text-[#212529] disabled:opacity-30 flex-shrink-0 transition-colors"
            style={{ border: '1px solid #d0d0d0' }}
            aria-label="Previous step"
          >
            ‹
          </button>

          <div
            className="flex-1 bg-white rounded-lg p-8"
            style={{ border: '1px solid #f0f0f0', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
          >
            <p className="text-[12px] font-bold text-[#e71c24] uppercase tracking-wide mb-2">
              Step {active + 1} of {steps.length}
            </p>
            <h3 className="text-[20px] font-bold text-[#212529] mb-3">
              {steps[active].title}
            </h3>
            <p className="text-[14px] text-[#7b7b7b] leading-relaxed">
              {steps[active].desc}
            </p>
          </div>

          <button
            onClick={() => setActive(a => Math.min(steps.length - 1, a + 1))}
            disabled={active === steps.length - 1}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl text-[#7b7b7b] hover:text-[#212529] disabled:opacity-30 flex-shrink-0 transition-colors"
            style={{ border: '1px solid #d0d0d0' }}
            aria-label="Next step"
          >
            ›
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <button className="bg-[#e71c24] hover:bg-[#c41920] text-white font-bold text-[14px] px-10 py-3 rounded-[4px] uppercase tracking-wide transition-colors">
            {ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
