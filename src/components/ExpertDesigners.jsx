import React from "react";
import { Link } from "react-router-dom";
import { imageAssets } from "../data/imageAssets";

const ExpertDesigners = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#f2f1ed] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left: Narrative */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#e0b855] mb-8 block">Lead Visionary</span>
            <h2 className="text-5xl md:text-7xl font-cinzel font-black text-[#1b1c19] leading-[1.1] mb-10 tracking-tighter">
              Meet the Heart <br />
              <span className="italic font-normal serif opacity-70">of Leonex Interio.</span>
            </h2>
            
            <div className="space-y-8 max-w-2xl">
              <p className="text-lg md:text-xl text-[#4d4637] font-light leading-relaxed">
                Led by our co-founder, <span className="text-[#1b1c19] font-bold">Kokku Vijaya Laxmi</span>, our design philosophy is built on the belief that a home should be a poetic reflection of its inhabitants.
              </p>
              
              <div className="pl-8 border-l-2 border-[#e0b855]/30 py-2">
                <p className="text-[15px] text-[#7b7b7b] leading-relaxed italic">
                  "We don't just design rooms; we curate experiences that linger in the memory. Every texture and light transition is a deliberate brushstroke in your family's story."
                </p>
              </div>

              <p className="text-[15px] text-[#4d4637] leading-relaxed font-light opacity-80">
                With over a decade of experience in artisan craftsmanship and spatial psychology, Vijaya Laxmi ensures that every project under the Leonex banner meets the highest standards of structural precision and aesthetic soul.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">
              <Link 
                to="/price-calculator/home-interior"
                className="bg-[#1b1c19] text-white px-10 py-5 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#e0b855] transition-all duration-500"
              >
                Consult with Vijaya Laxmi
              </Link>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-px bg-[#d1c5b1] group-hover:w-16 transition-all duration-500"></div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#7b7b7b] group-hover:text-[#1b1c19]">View Portfolio</span>
              </div>
            </div>
          </div>

          {/* Right: Featured Image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-[#e0b855]/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
              
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                <img 
                  src={imageAssets.coFounder} 
                  alt="Kokku Vijaya Laxmi - Co-Founder" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c19]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-6 -left-10 bg-white p-8 shadow-xl hidden xl:block border border-[#f0f0f0]">
                <div className="flex gap-10">
                  <div className="text-center">
                    <span className="block text-2xl font-cinzel font-black text-[#1b1c19]">12+</span>
                    <span className="text-[8px] uppercase tracking-tighter font-bold text-[#e0b855]">Years Exp.</span>
                  </div>
                  <div className="w-px h-10 bg-[#f0f0f0]"></div>
                  <div className="text-center">
                    <span className="block text-2xl font-cinzel font-black text-[#1b1c19]">500+</span>
                    <span className="text-[8px] uppercase tracking-tighter font-bold text-[#e0b855]">Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertDesigners;
