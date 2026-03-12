import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
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
    <div className="bg-white min-h-screen pt-24 font-sans">
      {/* Hero Header Section */}
      <section className="relative text-center py-16 md:py-24 border-b border-gray-100 overflow-hidden">
        {/* Subtle Background Pattern matching screenshot */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#212529 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>

        <h1 className="text-[44px] md:text-[56px] font-normal text-[#212529] mb-16 tracking-tight relative z-10">
          Recent Projects
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 max-w-5xl mx-auto relative z-10">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <span className="text-[52px] md:text-[68px] font-normal text-[#2e2e2e] leading-none mb-2 tracking-tighter">
              55,000
            </span>
            <span className="text-[14px] text-gray-500 font-medium tracking-wide">
              Projects completed
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <span className="text-[52px] md:text-[68px] font-normal text-[#2e2e2e] leading-none mb-2 tracking-tighter">
              35+
            </span>
            <span className="text-[14px] text-gray-500 font-medium tracking-wide">
              Homes Handed Over Everyday
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex flex-col items-center opacity-60">
          <div className="w-5 h-8 border-2 border-gray-400 rounded-full mb-2 flex justify-center p-1">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
          <span className="text-xs text-gray-400 uppercase tracking-widest">
            Scroll down
          </span>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <div className="flex justify-center -mt-8 relative z-20 mb-20">
        <button className="bg-[#e71c24] text-white px-10 py-4 font-bold tracking-widest text-sm rounded shadow-lg shadow-red-500/20 hover:bg-[#c41920] transition-colors">
          BOOK FREE DESIGN SESSION
        </button>
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
                <button className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-300 hover:text-[#e71c24] shadow-md transition-colors z-10">
                  <FaHeart className="text-xl" />
                </button>
              </div>

              {/* Meta Data */}
              <div className="flex items-center gap-3 text-[13px] text-gray-500 font-medium mb-4 tracking-wide uppercase">
                <span>{story.city}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e71c24]"></span>
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
