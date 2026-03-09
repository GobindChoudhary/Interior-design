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
    <section className="bg-white py-14 px-8">
      <div className="max-w-[860px] mx-auto">
        {title && (
          <h2 className="text-[22px] font-bold text-center text-[#212529] mb-8">
            {title}
          </h2>
        )}

        {items.map((item, i) => (
          <div key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-4 text-left group"
              aria-expanded={open === i}
            >
              <span
                className="text-[14px] font-semibold leading-snug transition-colors"
                style={{ color: open === i ? '#e71c24' : '#212529' }}
              >
                {item.q}
              </span>
              <span
                aria-hidden
                className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-[16px] font-light leading-none transition-all duration-200 select-none"
                style={{
                  borderColor: open === i ? '#e71c24' : '#bfbfbf',
                  color: open === i ? '#e71c24' : '#7b7b7b',
                  transform: open === i ? 'rotate(45deg)' : 'none',
                }}
              >
                +
              </span>
            </button>

            {open === i && (
              <div className="pb-4 text-[13px] text-[#7b7b7b] leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
