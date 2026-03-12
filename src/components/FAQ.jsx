/**
 * FAQ — Reusable accordion FAQ component
 *
 * Props:
 *   items: Array<{ q: string, a: string }>
 *   title?: string
 */
import { useState } from 'react';

export default function FAQ({ items = [], title = 'Frequently Asked Questions' }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-[1200px] mx-auto">
        {title && (
          <h2 className="text-[28px] md:text-[32px] font-bold text-center text-[#212529] mb-12">
            {title}
          </h2>
        )}

        {items.map((item, i) => (
          <div key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-5 text-left group transition-all"
              aria-expanded={open === i}
            >
              <span
                className="text-[16px] font-medium leading-relaxed transition-colors flex-1"
                style={{ color: "#212529" }}
              >
                {item.q}
              </span>
              <span
                aria-hidden
                className="flex-shrink-0 transition-transform duration-300 transform"
                style={{
                  transform: open === i ? "rotate(180deg)" : "none",
                  color: "#7b7b7b",
                }}
              >
                <svg
                  className="w-[18px] h-[18px] fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>

            {open === i && (
              <div
                className="pb-6 text-[15px] text-[#555] leading-relaxed max-w-[1000px] animate-in fade-in slide-in-from-top-2 duration-300"
              >
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
