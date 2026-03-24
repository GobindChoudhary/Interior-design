import { useState } from 'react';
import DesignDetailModal from './DesignDetailModal';

const VISIBLE = 4;

function GalleryRow({ title, items, onItemClick, sIndex }) {
  const [idx, setIdx] = useState(0);
  const maxIdx = Math.max(0, items.length - VISIBLE);

  return (
    <div className="mb-24 last:mb-0">
      {/* Row header */}
      <div className="flex items-end justify-between mb-12 border-b border-[#d1c5b1]/20 pb-6">
        <div>
          <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#e0b855] mb-4 block">
            Collection — 0{sIndex + 1}
          </span>
          <h2 className="text-3xl md:text-5xl font-cinzel font-black text-[#1b1c19] tracking-tighter uppercase">
            {title}
          </h2>
        </div>
        <button 
          className="text-[10px] font-black text-[#e0b855] uppercase tracking-[0.2em] border-b border-[#e0b855] pb-1 hover:text-[#1b1c19] hover:border-[#1b1c19] transition-all"
        >
          Explore Series
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative group/carousel">
        {/* Navigation Arrows - Premium Styling */}
        {idx > 0 && (
          <button
            onClick={() => setIdx(i => i - 1)}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#1b1c19] text-[#e0b855] flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:left-0 transition-all duration-500"
            aria-label="Previous"
          >
            <span className="text-2xl font-light">←</span>
          </button>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 overflow-hidden">
          {items.slice(idx, idx + VISIBLE).map((item, i) => {
            const absoluteIndex = idx + i;
            // Alternate aspect ratios for a more editorial look
            const isTall = i % 2 === 1; 
            
            return (
              <div
                key={`${idx}-${i}`}
                className={`relative overflow-hidden cursor-pointer group/item ${isTall ? 'md:mt-8 md:mb-[-2rem]' : ''}`}
                onClick={() => onItemClick(item, absoluteIndex)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/item:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#1b1c19]/40 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold border border-white/30 px-6 py-3">
                      View Detail
                    </span>
                  </div>
                </div>
                {/* Minimal label */}
                <div className="mt-4 opacity-60 group-hover/item:opacity-100 transition-opacity">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1b1c19]">
                    {item.alt || 'Bespoke Curated Design'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {idx < maxIdx && (
          <button
            onClick={() => setIdx(i => i + 1)}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#1b1c19] text-[#e0b855] flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:right-0 transition-all duration-500"
            aria-label="Next"
          >
            <span className="text-2xl font-light">→</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default function DesignGallery({ sections = [] }) {
  const [selectedContext, setSelectedContext] = useState(null); // { sectionIndex, itemIndex }

  const handleNext = () => {
    if (!selectedContext) return;
    const { sectionIndex, itemIndex } = selectedContext;
    const items = sections[sectionIndex].items;
    const nextIdx = (itemIndex + 1) % items.length;
    setSelectedContext({ sectionIndex, itemIndex: nextIdx });
  };

  const handlePrev = () => {
    if (!selectedContext) return;
    const { sectionIndex, itemIndex } = selectedContext;
    const items = sections[sectionIndex].items;
    const prevIdx = (itemIndex - 1 + items.length) % items.length;
    setSelectedContext({ sectionIndex, itemIndex: prevIdx });
  };

  const handleSelectItem = (imgSrc) => {
    if (!selectedContext) return;
    const { sectionIndex } = selectedContext;
    const items = sections[sectionIndex].items;
    const newItemIndex = items.findIndex(item => item.img === imgSrc);
    if (newItemIndex !== -1) {
      setSelectedContext({ sectionIndex, itemIndex: newItemIndex });
    }
  };

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-[#eae8e3]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col mb-32">
          <span className="uppercase tracking-[0.5em] text-[10px] md:text-[12px] font-bold text-[#e0b855] mb-6 block">
            The Lookbook
          </span>
          <h2 className="text-6xl md:text-8xl font-cinzel font-black leading-[0.85] tracking-tighter text-[#1b1c19] mb-12">
            Design <br />
            <span className="italic font-normal serif opacity-50">Archives.</span>
          </h2>
          <div className="w-48 h-px bg-[#1b1c19] opacity-20" />
        </div>

        {sections.map((section, sIndex) => (
          <GalleryRow 
            key={sIndex} 
            sIndex={sIndex}
            {...section} 
            onItemClick={(item, iIndex) => setSelectedContext({ sectionIndex: sIndex, itemIndex: iIndex })} 
          />
        ))}
      </div>

      {selectedContext && (
        <DesignDetailModal 
          item={sections[selectedContext.sectionIndex].items[selectedContext.itemIndex]} 
          onClose={() => setSelectedContext(null)} 
          onNext={handleNext}
          onPrev={handlePrev}
          onSelectItem={handleSelectItem}
        />
      )}
    </section>
  );
}
