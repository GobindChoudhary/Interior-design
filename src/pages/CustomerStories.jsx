import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { imageAssets } from "../data/imageAssets";
import { customerStoriesData } from "../data/customerStoriesData";
import EndToEndSolutions from "../components/EndToEndSolutions";
import PromoBanner from "../components/PromoBanner";
import Footer from "../components/Footer";

const CustomerStories = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent min-h-screen font-sans">
      {/* Hero Header Section */}
      <section className="relative text-center py-24 md:py-40 overflow-hidden bg-[#1b1c19]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imageAssets.luxuryInterior} 
            alt="Premium Interior Design" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b1c19]/80 via-[#1b1c19]/40 to-[#1b1c19]/80"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6">
          <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-[#e0b855] mb-8 block">LEONEX INTERIO</span>
          <h1 className="text-5xl md:text-8xl font-cinzel font-black text-white mb-16 tracking-tighter leading-tight">
            Recent <br />
            <span className="italic font-normal serif opacity-90">Projects</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-cinzel font-bold text-[#e0b855] leading-none mb-3 tracking-tighter">
                55,000+
              </span>
              <span className="text-[11px] text-white/70 uppercase tracking-[0.2em] font-bold">
                Projects completed
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-cinzel font-bold text-[#e0b855] leading-none mb-3 tracking-tighter">
                Hyderabad
              </span>
              <span className="text-[11px] text-white/70 uppercase tracking-[0.2em] font-bold">
                Primary Studio Focus
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-24 flex flex-col items-center opacity-40 relative z-10">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/60 animate-pulse"></div>
          <span className="text-[9px] text-white uppercase tracking-[0.4em] mt-4">Scroll</span>
        </div>
      </section>

      <div className="flex justify-center -mt-8 relative z-20 mb-20">
        <Link to="/price-calculator/home-interior" className="bg-[#e0b855] text-white px-10 py-4 font-bold tracking-widest text-sm rounded shadow-lg shadow-gold-500/20 hover:bg-[#c4a14a] transition-colors">
          GET FREE ESTIMATE
        </Link>
      </div>

      {/* Stories Grid */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-12 mb-24 cursor-default relative">
        {/* Grid grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
          style={{
            background: `linear-gradient(90deg, #212529 1px, transparent 1px) 0 0 / 80px 80px, linear-gradient(#212529 1px, transparent 1px) 0 0 / 80px 80px`,
          }}
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24">
          {customerStoriesData.map((story) => (
            <div key={story.id} className="flex flex-col group">
              {/* Image Box with Heart */}
              <div className="relative aspect-[4/3] w-full mb-6 overflow-hidden bg-gray-100 rounded-sm">
                <img
                  src={story.image}
                  alt={`${story.propertyName} in ${story.city}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <button className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-300 hover:text-[#e0b855] shadow-md transition-colors z-10">
                  <FaHeart className="text-xl" />
                </button>
              </div>

              {/* Meta Data */}
              <div className="flex items-center gap-3 text-[13px] text-gray-500 font-medium mb-4 tracking-wide uppercase">
                <span>{story.city}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e0b855]"></span>
                <span>{story.propertyName}</span>
              </div>

              {/* Quote */}
              <p className="text-[20px] md:text-[24px] text-[#333] font-normal leading-snug">
                {story.quote}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional & Footer Sections as Requested */}
      <EndToEndSolutions />
      <PromoBanner />
    </div>
  );
};

export default CustomerStories;
