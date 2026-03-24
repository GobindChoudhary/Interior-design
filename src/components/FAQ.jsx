import { useState } from 'react';

export default function FAQ({ items = [], title = 'Frequently Asked Questions' }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#eae8e3] py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Editorial Header */}
        <div className="text-center mb-24">
          <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#e0b855] mb-6 block">
            Clarity & Guidance
          </span>
          <h2 className="text-4xl md:text-6xl font-cinzel font-black leading-tight tracking-tighter text-[#1b1c19]">
            Common <br className="md:hidden" />
            <span className="italic font-normal serif opacity-50">Inquiries.</span>
          </h2>
          <div className="w-24 h-px bg-[#e0b855] mx-auto mt-12" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`transition-all duration-500 border-b border-[#d1c5b1]/30 last:border-0 ${open === i ? "pb-8" : "pb-0"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-8 py-8 text-left group"
                aria-expanded={open === i}
              >
                <div className="flex items-start gap-6">
                  <span className="text-[10px] font-bold text-[#e0b855] mt-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </span>
                  <span className="text-lg md:text-xl font-cinzel font-bold text-[#1b1c19] group-hover:text-[#e0b855] transition-colors leading-snug">
                    {item.q}
                  </span>
                </div>
                
                {/* Custom Animated Icon */}
                <div className="relative w-5 h-5 flex-shrink-0 mt-1">
                  <div className={`absolute inset-0 bg-[#e0b855] h-[1.5px] w-full transition-transform duration-500 ${open === i ? "rotate-180" : ""}`} />
                  <div className={`absolute inset-0 bg-[#e0b855] w-[1.5px] h-full left-1/2 -ml-[0.75px] transition-transform duration-500 ${open === i ? "rotate-90 opacity-0" : ""}`} />
                </div>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-700 ease-in-out ${open === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="pl-12 md:pl-16 pr-8 text-[#4d4637] text-sm md:text-base font-light leading-relaxed max-w-2xl italic">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
