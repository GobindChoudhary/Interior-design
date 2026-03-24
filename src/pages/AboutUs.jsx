import { Link } from "react-router-dom";
import { imageAssets } from "../data/imageAssets";

const GRAIN_OVERLAY = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

export default function AboutUs() {
  return (
    <div className="bg-[#eae8e3] min-h-screen text-[#1b1c19] font-sans selection:bg-[#e0b855] selection:text-white">
      {/* Decorative Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999]" style={{ backgroundImage: GRAIN_OVERLAY }}></div>

      <main className="pt-32 pb-20">
        {/* 1. Hero Section */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-32 md:mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#e0b855] mb-8 block">HYDERABAD — OUR LEGACY</span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-cinzel font-black leading-[0.9] tracking-tighter text-[#1b1c19] mb-12">
                The Vision Behind <br />
                <span className="italic font-normal serif opacity-80">the Home.</span>
              </h1>
              <div className="lg:pt-12 max-w-md">
                <p className="text-[11px] uppercase tracking-widest text-[#7b7b7b] leading-loose mb-6 font-bold pb-2 border-b border-[#d1c5b1] w-fit pr-12">Philosophy</p>
                <p className="text-lg md:text-xl text-[#4d4637] font-light leading-relaxed italic">
                  "Beyond aesthetics, we build environments that reflect the soul of those who inhabit them."
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-4 pt-1"> {/* Aligned with the 'HYDERABAD' text start */}
              <img 
                src={imageAssets.coFounder} 
                alt="Co-Founder of Leonex Interio" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. Founder's Story Section */}
        <section className="mb-48 relative overflow-hidden px-6 md:px-0">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
                <div className="bg-[#f2f1ed] p-10 md:p-16 lg:p-20 shadow-2xl lg:-mr-32 border border-[#d1c5b1]/30">
                  <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-[#e0b855] mb-6 block">Our Founder's Journey</span>
                  <h2 className="text-4xl md:text-5xl font-cinzel font-black text-[#1b1c19] leading-tight mb-8">A Journey in Artisan Craftsmanship</h2>
                  <div className="space-y-6 text-[#4d4637] leading-relaxed text-[15px] font-light">
                    <p>
                      Leonex Interio was born from a simple realization by our founder, <span className="text-[#e0b855] font-semibold">Kokku Vijaya Laxmi (Vidji)</span>: that a house only becomes a home when it captures the unique story of its owners. 
                    </p>
                    <p>
                      As a proud <span className="font-semibold italic">women-led venture</span> based in Hyderabad, we bridge the gap between architectural precision and the warmth of a lived-in space. Every joint, texture, and light fixture is curated to perfection.
                    </p>
                    <p>
                      Our "Personalized Living" approach ensures that your home isn't just a design statement, but a sanctuary for your family's future memories.
                    </p>
                  </div>
                  <div className="pt-10">
                    <Link to="/price-calculator/home-interior" className="inline-flex items-center gap-4 text-[#e0b855] font-black uppercase tracking-widest text-[10px] group transition-all">
                      Consult with Our Founder
                      <span className="w-12 h-px bg-[#e0b855] group-hover:w-20 transition-all duration-500"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 mb-12 lg:mb-0 order-1 lg:order-2">
                <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[850px] w-full overflow-hidden transition-all duration-1000 group">
                  <img 
                    alt="Founder of Leonex Interio" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" 
                    src={imageAssets.founderStory} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#eae8e3]/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission & Vision */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d1c5b1]/20 border border-[#d1c5b1]/20">
            <div className="bg-[#eae8e3] p-12 md:p-24">
              <div className="max-w-md">
                <div className="text-3xl text-[#e0b855] mb-8">
                  <span className="material-symbols-outlined text-4xl">auto_awesome</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-cinzel font-black mb-6 text-[#1b1c19]">Our Mission</h3>
                <p className="text-lg text-[#4d4637] leading-relaxed font-light">
                  To transform ordinary spaces into personal sanctuaries by merging innovative technology with timeless design principles. We exist to make luxury interior design a seamless, predictable experience in Hyderabad.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <span className="text-[9px] uppercase tracking-widest py-2 px-5 border border-[#d1c5b1] text-[#e0b855] font-bold">Innovation</span>
                  <span className="text-[9px] uppercase tracking-widest py-2 px-5 border border-[#d1c5b1] text-[#e0b855] font-bold">Quality</span>
                  <span className="text-[9px] uppercase tracking-widest py-2 px-5 border border-[#d1c5b1] text-[#e0b855] font-bold">Transparency</span>
                </div>
              </div>
            </div>
            <div className="bg-[#1b1c19] text-[#fbf9f4] p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
              <div className="max-w-md relative z-10">
                <h3 className="text-3xl md:text-4xl font-cinzel font-black mb-6 italic opacity-90 underline decoration-[#e0b855] underline-offset-[12px]">The Vision</h3>
                <p className="text-xl md:text-2xl text-[#f0eee9]/80 font-light leading-relaxed">
                  To be the benchmark for excellence in residential design, where every home we touch becomes a legacy of comfort, style, and maternal warmth.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#e0b855] opacity-5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </section>

        {/* 4. Philosophy Grid */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-5xl md:text-8xl font-cinzel font-black leading-tight text-[#1b1c19]">Our <br /><span className="italic opacity-60">Philosophy</span></h2>
            <div className="w-full md:max-w-xs h-px bg-[#d1c5b1] mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
            {/* Item 1 */}
            <div className="md:col-span-7 group">
              <div className="overflow-hidden mb-10 aspect-[16/10] bg-[#f2f1ed]">
                <img 
                  alt="Designing for Life" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[40%] hover:grayscale-0" 
                  src={imageAssets.designLife} 
                />
              </div>
              <div className="max-w-lg">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#e0b855] font-black mb-4 block">01 — Longevity</span>
                <h4 className="text-3xl font-cinzel font-black mb-4 text-[#1b1c19]">Designing for Life</h4>
                <p className="text-[#4d4637] text-[15px] leading-relaxed font-light">
                  Spaces that evolve with you. We prioritize functionality without sacrificing the poetic nature of high-end design. Every project is an exercise in timelessness.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="md:col-span-5 md:mt-48 group">
              <div className="overflow-hidden mb-10 aspect-[4/5] bg-[#f2f1ed]">
                <img 
                  alt="Integrity in Design" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[40%] hover:grayscale-0" 
                  src={imageAssets.integrityDesign} 
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#e0b855] font-black mb-4 block">02 — Materiality</span>
                <h4 className="text-3xl font-cinzel font-black mb-4 text-[#1b1c19]">Integrity in Design</h4>
                <p className="text-[#4d4637] text-[15px] leading-relaxed font-light">
                  Honesty in materials. We believe in using authentic textures—premium wood, stone, and metals—in their truest forms to evoke a sense of grounding.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 group md:mt-24">
              <div className="overflow-hidden mb-10 aspect-[21/9] bg-[#f2f1ed]">
                <img 
                  alt="Uncompromising Quality" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[40%] hover:grayscale-0" 
                  src={imageAssets.uncompromisingQuality} 
                />
              </div>
              <div className="max-w-2xl text-center mx-auto">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#e0b855] font-black mb-4 block">03 — Precision</span>
                <h4 className="text-3xl font-cinzel font-black mb-4 text-[#1b1c19]">Uncompromising Quality</h4>
                <p className="text-[#4d4637] text-[15px] leading-relaxed font-light">
                  Every detail is scrutinized. Our standards for finish and durability are the highest in the industry, ensuring your Leonex Interio sanctuary lasts for generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Stats Section */}
        <section className="mb-48 relative">
          <div className="absolute inset-0 bg-[#eae8e3] opacity-50"></div>
          <div className="max-w-[1400px] mx-auto px-12 py-32 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
              <div className="text-center group relative overflow-visible">
                <span className="text-8xl lg:text-[10rem] font-cinzel font-black text-[#e0b855]/10 absolute -top-12 left-1/2 -translate-x-1/2 select-none group-hover:text-[#e0b855]/20 transition-all duration-700">10</span>
                <div className="relative pt-8">
                  <span className="text-5xl lg:text-6xl font-cinzel font-black text-[#1b1c19] mb-4 block">10</span>
                  <span className="uppercase tracking-[0.4em] text-[10px] font-black text-[#e0b855] mb-4 block">Year Warranty</span>
                  <div className="w-12 h-px bg-[#d1c5b1] mx-auto mb-6"></div>
                  <p className="text-[13px] text-[#4d4637] font-light leading-relaxed max-w-[200px] mx-auto italic opacity-80">Confidence in every corner of your home.</p>
                </div>
              </div>
              <div className="text-center group relative overflow-visible">
                <span className="text-8xl lg:text-[10rem] font-cinzel font-black text-[#e0b855]/10 absolute -top-12 left-1/2 -translate-x-1/2 select-none group-hover:text-[#e0b855]/20 transition-all duration-700">45</span>
                <div className="relative pt-8">
                  <span className="text-5xl lg:text-6xl font-cinzel font-black text-[#1b1c19] mb-4 block">45-60</span>
                  <span className="uppercase tracking-[0.4em] text-[10px] font-black text-[#e0b855] mb-4 block">Day Delivery</span>
                  <div className="w-12 h-px bg-[#d1c5b1] mx-auto mb-6"></div>
                  <p className="text-[13px] text-[#4d4637] font-light leading-relaxed max-w-[200px] mx-auto italic opacity-80">Swift transformation without compromise.</p>
                </div>
              </div>
              <div className="text-center group relative overflow-visible">
                <span className="text-8xl lg:text-[10rem] font-cinzel font-black text-[#e0b855]/10 absolute -top-12 left-1/2 -translate-x-1/2 select-none group-hover:text-[#e0b855]/20 transition-all duration-700">600</span>
                <div className="relative pt-8">
                  <span className="text-5xl lg:text-6xl font-cinzel font-black text-[#1b1c19] mb-4 block">600+</span>
                  <span className="uppercase tracking-[0.4em] text-[10px] font-black text-[#e0b855] mb-4 block">In-House Designers</span>
                  <div className="w-12 h-px bg-[#d1c5b1] mx-auto mb-6"></div>
                  <p className="text-[13px] text-[#4d4637] font-light leading-relaxed max-w-[200px] mx-auto italic opacity-80">A network of creative visionaries in Hyderabad.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA Section */}
        <section className="max-w-[1400px] mx-auto px-6 text-center mb-32">
          <h2 className="text-6xl md:text-8xl font-cinzel font-black mb-16 text-[#1b1c19] leading-none tracking-tighter">
            Ready to start <br /><span className="italic serif font-normal opacity-60">your story?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link 
              to="/price-calculator/home-interior" 
              className="bg-[#e0b855] text-white px-12 py-6 text-[11px] font-black tracking-[0.3em] uppercase hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 shadow-xl shadow-[#e0b855]/20"
            >
              Get Free Estimate
            </Link>
            <Link 
              to="/home-interiors" 
              className="border border-[#d1c5b1] text-[#1b1c19] px-12 py-6 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#eae8e3] transition-all duration-500"
            >
              Explore Gallery
            </Link>
          </div>
          <div className="mt-20">
            <Link to="/" className="text-[10px] uppercase tracking-[0.2em] font-black text-[#7b7b7b] hover:text-[#e0b855] transition-colors pb-1 border-b-[2px] border-[#e0b855]/20 hover:border-[#e0b855]">
              Return Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
