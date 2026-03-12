import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { scrollToForm } from "../utils/scrollToForm";
import heroImg from "../assets/imgi_22_1681279874761b4875200ceaf-HLKT00000829_batch-2-800x600_7-main.jpg"; // Using a placeholder hero image as Dhoni is not explicitly isolated in assets
import kitchenImg from "../assets/imgi_12_vivid-white-minimalist-l-shaped-kitchen-sleek-cabinets.webp";
import bedroomImg from "../assets/bedroom design.webp";
import wardrobeImg from "../assets/wardrobe designs.webp";
import livingImg from "../assets/living-room.webp";

// Reusable Components
import ExpertDesigners from "../components/ExpertDesigners";
import ProcessSteps from "../components/ProcessSteps";
import FAQ from "../components/FAQ";
import SuccessStories from "../components/SuccessStories";

// Data
import { processSteps } from "../data/processData";
import { faqItems } from "../data/faqData";

// Assets for new sections
import futuraLogo from "../assets/imgi_93_Futura.png";
import frankeLogo from "../assets/imgi_94_Franke.png";
import jaquarLogo from "../assets/imgi_95_Jaguar.png";
import ruheLogo from "../assets/imgi_96_Ruhe.png";
import philipsLogo from "../assets/imgi_97_Philips.png";
import wiproLogo from "../assets/imgi_98_Wipro.png";

// Helper specifically for Why Choose Us
const guaranteeIcon1 = "https://www.homelane.com/hl_logo.svg"; // Mock placeholder
const communityLogos = [
  futuraLogo,
  frankeLogo,
  jaquarLogo,
  ruheLogo,
  philipsLogo,
  wiproLogo,
];

const CityPage = () => {
  const { cityName } = useParams();

  // If useParams doesn't catch it due to wildcard or routing setup, fallback to parsing URL
  const path = window.location.pathname;
  let resolvedCityName = cityName;

  if (!resolvedCityName && path.includes("/cities/interior-designers-")) {
    resolvedCityName = path.split("/cities/interior-designers-")[1];
  }

  // Format "interior-designers-ahmedabad" or just "ahmedabad" to "Ahmedabad"
  const formatCityName = (slug) => {
    if (!slug) return "Your City";
    // Usually the URL is /cities/interior-designers-ahmedabad
    const rawCity = slug.replace("interior-designers-", "");
    return rawCity
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const displayCity = formatCityName(resolvedCityName);
  const navigate = useNavigate();
  const [activeCenter, setActiveCenter] = useState("North Wing");

  return (
    <div className="w-full bg-white font-sans text-[#212529]">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center bg-[#f8f8f8]">
        {/* Absolute Background image overlay - making text readable */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt={`Interior designers in ${displayCity}`}
            className="w-full h-full object-cover opacity-60 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full text-white">
          <div className="max-w-2xl">
            <h1 className="text-[40px] md:text-[56px] font-bold mb-10 leading-tight">
              Best Home Interior <br />
              Designers in {displayCity}
            </h1>

            <div className="flex flex-wrap gap-8 md:gap-16 mb-12">
              <div>
                <p className="text-[32px] md:text-[40px] font-bold">400+</p>
                <p className="text-[14px] md:text-[16px]">Projects</p>
              </div>
              <div>
                <p className="text-[32px] md:text-[40px] font-bold">15+</p>
                <p className="text-[14px] md:text-[16px]">Designers</p>
              </div>
              <div>
                <p className="text-[32px] md:text-[40px] font-bold">3</p>
                <p className="text-[14px] md:text-[16px]">Stores</p>
              </div>
            </div>

            <button
              onClick={() => scrollToForm(navigate)}
              className="bg-[#e71c24] hover:bg-[#c41920] text-white font-bold py-4 px-8 rounded flex items-center gap-3 transition-colors text-[16px]"
            >
              Book 3D Design Session
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMBS */}
      <div className="max-w-[1400px] mx-auto px-6 py-4 text-[13px] text-gray-500 border-b border-gray-100">
        <Link to="/" className="text-[#e71c24] hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/cities" className="text-[#e71c24] hover:underline">
          All Cities
        </Link>{" "}
        / Interior Designers In {displayCity}
      </div>

      {/* 3. POPULAR INTERIOR DESIGNS */}
      <section className="py-20 text-center max-w-[1400px] mx-auto px-6">
        <h2 className="text-[32px] md:text-[42px] font-medium mb-6 text-[#212529]">
          Popular Interior Designs in {displayCity}
        </h2>
        <p className="text-[#4a4a4a] max-w-5xl mx-auto text-[16px] leading-relax mb-16">
          Looking for the perfect home interior in {displayCity}? HomeLane's
          talented interior designers in {displayCity} will breathe life into
          your décor dreams! We're passionate about crafting extraordinary homes
          with spaces that come alive with your personality. We've got the best
          interior designers in {displayCity} who love what they do, bringing
          both heart and skill to every project. Let's talk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            {
              id: 1,
              title: "Modular Kitchen Designs",
              img: kitchenImg,
              colSpan: "col-span-1 md:col-span-2",
            },
            {
              id: 2,
              title: "Bedroom Designs",
              img: bedroomImg,
              colSpan: "col-span-1",
            },
            {
              id: 3,
              title: "Wardrobe Designs",
              img: wardrobeImg,
              colSpan: "col-span-1 md:col-span-2",
            },
            {
              id: 4,
              title: "Living Room Designs",
              img: livingImg,
              colSpan: "col-span-1",
            },
          ].map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-xl overflow-hidden cursor-pointer shadow-sm border border-gray-100 h-[300px] ${item.colSpan}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 bg-white p-4 pl-6 pr-12 rounded-tr-3xl">
                <h3 className="text-[18px] font-medium text-[#212529]">
                  {item.title}
                </h3>
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#e71c24] flex justify-center items-center text-[#e71c24] mr-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  ↗
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE HOMELANE */}
      <section className="py-20 bg-[#fbfbfb]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[32px] md:text-[38px] font-medium mb-16 text-[#212529]">
            Why Choose HomeLane in {displayCity}?
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-6 flex items-center justify-center border-2 border-[#212529] rounded-2xl relative bg-white">
                <span className="text-4xl text-[#103A68] font-bold">45</span>
                <div className="absolute top-0 right-1/4 w-4 h-1 bg-[#e71c24]"></div>
              </div>
              <p className="text-[18px] text-[#4a4a4a] font-medium">
                Delivery in 45 days*
              </p>
            </div>
            {/* 2 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-6 flex items-center justify-center border-2 border-[#212529] rounded-2xl relative bg-white rounded-t-full">
                <span className="text-3xl text-white bg-[#e71c24] rounded-full w-12 h-12 flex justify-center items-center">
                  ₹
                </span>
              </div>
              <p className="text-[18px] text-[#4a4a4a] font-medium">
                No hidden costs
              </p>
            </div>
            {/* 3 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-6 flex items-center justify-center border-[3px] border-dashed border-[#212529] rounded-full relative bg-white">
                <span className="text-2xl text-[#103A68] font-bold">10</span>
                <div className="absolute -bottom-4 bg-[#e71c24] w-6 h-6 rotate-45"></div>
              </div>
              <p className="text-[18px] text-[#4a4a4a] font-medium">
                Flat 10-year warranty
              </p>
            </div>
            {/* 4 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-6 flex items-center justify-center border-2 border-[#212529] rounded-xl relative bg-white p-2">
                <div className="grid grid-cols-3 gap-1 w-full h-full">
                  <div className="col-span-3 border-b-2 border-[#212529]"></div>
                  <div className="border border-[#212529]"></div>
                  <div className="border border-[#212529]"></div>
                  <div className="border border-[#212529]"></div>
                  <div className="border border-[#212529]"></div>
                  <div className="border border-[#212529]"></div>
                  <div className="border border-[#212529]"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full">
                  <span className="text-[#e71c24] font-bold text-2xl">%</span>
                </div>
              </div>
              <p className="text-[18px] text-[#4a4a4a] font-medium">
                Easy EMIs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOMES DELIVERED (Carousel Placeholder) */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-[32px] md:text-[38px] font-medium mb-4 text-[#212529]">
          55000+ Homes Delivered
        </h2>
        <p className="text-[#4a4a4a] max-w-4xl mx-auto text-[16px] leading-relaxed mb-12">
          At HomeLane, we believe every home has a story to tell. We take pride
          in transforming spaces across the country into homes filled with
          character and charm. Have a look at the interiors we've crafted in
          some of the most prestigious locales in different cities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Simulating static carousel view for the page layout */}
          {[
            { src: kitchenImg, label: "2BHK" },
            { src: livingImg, label: "3BHK" },
            { src: bedroomImg, label: "4BHK | Villa" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden h-[450px]"
            >
              <img
                src={item.src}
                className="w-full h-full object-cover"
                alt={item.label}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <span className="absolute bottom-6 left-6 text-white text-xl font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INTERIOR COST CALCULATOR */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] md:text-[36px] font-medium text-center text-[#212529] mb-12">
            Interior Cost Calculator for {displayCity}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Home */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="rounded-xl overflow-hidden mb-6 h-[240px]">
                <img
                  src={livingImg}
                  alt="Full Home Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[22px] font-medium text-[#212529] mb-2">
                Full Home Interior Cost in {displayCity}
              </h3>
              <p className="text-[#4a4a4a] text-[15px] mb-6 flex-grow">
                Get a price estimate for your full home interiors.
              </p>
              <button
                onClick={() => navigate("/price-calculator/home-interior")}
                className="bg-[#e71c24] hover:bg-[#c41920] text-white font-bold py-3 px-6 rounded text-[15px] w-max transition-colors"
              >
                Get Free Estimate
              </button>
            </div>
            {/* Modular Kitchen */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="rounded-xl overflow-hidden mb-6 h-[240px]">
                <img
                  src={kitchenImg}
                  alt="Modular Kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[22px] font-medium text-[#212529] mb-2">
                Modular Kitchen Cost in {displayCity}
              </h3>
              <p className="text-[#4a4a4a] text-[15px] mb-6 flex-grow">
                Get costing for your kitchen interiors.
              </p>
              <button
                onClick={() => navigate("/price-calculator/kitchen")}
                className="bg-[#e71c24] hover:bg-[#c41920] text-white font-bold py-3 px-6 rounded text-[15px] w-max transition-colors"
              >
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 SUCCESS STORIES */}
      <SuccessStories />

      {/* 7. COMMUNITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[32px] font-medium text-[#212529] mb-4">
            Homes Delivered Across India's Finest Communities
          </h2>
          <p className="text-[#4a4a4a] max-w-3xl mx-auto text-[16px] mb-12 leading-relaxed">
            From iconic skyscrapers to cosy apartment complexes, we've designed
            homes in some of the most notable neighbourhoods across the country.
          </p>

          {/* Mocking the communities using partner logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {communityLogos.map((logo, idx) => (
              <div
                key={idx}
                className="w-[180px] h-[90px] rounded-xl border border-gray-200 flex items-center justify-center p-4 hover:shadow-md transition-shadow"
              >
                <img
                  src={logo}
                  alt="Community Logo"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all opacity-80"
                />
              </div>
            ))}
            {/* Duplicating just to fill out the grid similar to the reference image */}
            {communityLogos.slice(0, 4).map((logo, idx) => (
              <div
                key={`dup-${idx}`}
                className="w-[180px] h-[90px] rounded-xl border border-gray-200 flex items-center justify-center p-4 hover:shadow-md transition-shadow"
              >
                <img
                  src={logo}
                  alt="Community Logo"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EXPERT DESIGNERS */}
      <ExpertDesigners
        title="600+ Expert Home Interior Designers"
        subtitle=""
      />

      {/* 9. PROCESS STEPS */}
      <ProcessSteps steps={processSteps} />

      {/* 10. EXPERIENCE CENTRE */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[36px] font-medium mb-12 text-[#212529]">
            Visit Our Experience Centre(s) in {displayCity}
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-10">
            {["City Center", "North Wing"].map((center) => (
              <button
                key={center}
                onClick={() => setActiveCenter(center)}
                className={`px-6 py-2 rounded-full border transition-colors ${activeCenter === center ? "border-[#e71c24] text-[#e71c24] font-medium" : "border-gray-300 text-[#4a4a4a] hover:border-[#e71c24] hover:text-[#e71c24]"}`}
              >
                {center}
              </button>
            ))}
          </div>

          {/* Mock Address Card */}
          <div className="flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden text-left shadow-sm">
            <div className="w-full md:w-[45%] h-[300px] md:h-auto">
              <img
                src={kitchenImg}
                alt={`${displayCity} Experience Centre`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-[55%] p-8 md:p-10 bg-white flex flex-col justify-center">
              <p className="text-[12px] font-bold text-[#e71c24] tracking-widest mb-2 uppercase">
                ADDRESS
              </p>
              <p className="text-[16px] text-[#4a4a4a] leading-relaxed mb-6 font-medium">
                HomeLane {displayCity} {activeCenter} - Shop no. 240, 2nd Floor,
                The CBD Shopping Center, Between Main Circle and Ring Road,{" "}
                {displayCity}, 382421
              </p>

              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                <button
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/HomeLane+${encodeURIComponent(displayCity)}`,
                      "_blank",
                    )
                  }
                  className="text-[14px] text-[#1a5bc5] font-medium hover:underline"
                >
                  View Direction
                </button>
                <button className="text-[14px] text-[#1a5bc5] font-medium hover:underline">
                  Explore
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-[12px] text-[#7b7b7b] uppercase tracking-wider mb-1">
                    TIMINGS
                  </p>
                  <p className="text-[15px] text-[#212529] font-medium">
                    Monday To Sunday | 11am to 8pm
                  </p>
                </div>
                <div>
                  <p className="text-[12px] text-[#7b7b7b] uppercase tracking-wider mb-1">
                    CONTACT NUMBER
                  </p>
                  <p className="text-[15px] text-[#212529] font-medium">
                    18001024663
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[12px] text-[#7b7b7b] uppercase tracking-wider mb-1">
                  FACILITIES FOR YOUR CONVENIENCE:
                </p>
                <p className="text-[15px] text-[#4a4a4a]">
                  Free Car Parking | Restrooms
                </p>
              </div>

              <div className="mb-10">
                <p className="text-[12px] text-[#7b7b7b] uppercase tracking-wider mb-1">
                  WHAT TO BRING FOR YOUR DESIGN CONSULTATION:
                </p>
                <p className="text-[15px] text-[#4a4a4a]">
                  Floor Plan | Site Images
                </p>
              </div>

              <div className="text-center md:text-left">
                <button
                  onClick={() => scrollToForm(navigate)}
                  className="border-2 border-[#e71c24] text-[#e71c24] hover:bg-[#e71c24] hover:text-white font-bold py-3 px-10 rounded transition-colors text-[16px]"
                >
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <FAQ
        items={faqItems}
        title={`Frequently Asked Questions about Home Interiors in ${displayCity}`}
      />
    </div>
  );
};

export default CityPage;
