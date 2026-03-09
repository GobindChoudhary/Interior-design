/**
 * DesignGallery — Reusable design image carousel component
 *
 * Props:
 *   sections: Array<{
 *     title: string,
 *     href?: string,
 *     items: Array<{ img: string, alt: string }>
 *   }>
 */
import { useState } from 'react';

const VISIBLE = 4;

function GalleryRow({ title, href = '#', items }) {
  const [idx, setIdx] = useState(0);
  const maxIdx = Math.max(0, items.length - VISIBLE);

  return (
    <div className="mb-10">
      {/* Row header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[20px] font-bold text-[#212529]">{title}</h2>
        <a href={href} className="text-[14px] font-bold text-[#e71c24] hover:underline">
          See All
        </a>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Left arrow */}
        {idx > 0 && (
          <button
            onClick={() => setIdx(i => i - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl text-[#212529] hover:shadow-lg transition-shadow"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
            aria-label="Previous"
          >
            ‹
          </button>
        )}

        <div className="grid grid-cols-4 gap-3 overflow-hidden">
          {items.slice(idx, idx + VISIBLE).map((item, i) => (
            <div
              key={`${idx}-${i}`}
              className="overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        {idx < maxIdx && (
          <button
            onClick={() => setIdx(i => i + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl text-[#212529] hover:shadow-lg transition-shadow"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
            aria-label="Next"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}

export default function DesignGallery({ sections = [] }) {
  return (
    <section className="bg-[#f8f8f8] py-8 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="h-px bg-[#212529] mb-8" />
        {sections.map((section, i) => (
          <GalleryRow key={i} {...section} />
        ))}
      </div>
    </section>
  );
}
