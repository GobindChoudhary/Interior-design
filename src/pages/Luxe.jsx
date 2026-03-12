import React, { useState } from "react";
import LuxeNavbar from "../components/LuxeNavbar";
import Toast from "../components/Toast";
import heroImg from "../assets/luxe_hero.webp";

// Offering Images
import mkImg from "../assets/imgi_20_flawless-white-minimalist-open-kitchen-wooden-accents..webp";
import wdImg from "../assets/wardrobe designs.webp";
import cuImg from "../assets/imgi_34_1639470045753ba785881f934-HLKT00000756_resize-800x600_10-main.jpg";
import tvImg from "../assets/imgi_33_16354199303596c5066848aa1-HLKT00000757_resize-800x600_7-main.jpg";
import stImg from "../assets/home office.jpg";
import puImg from "../assets/imgi_28_168137759799415051d5a305e-HLKT00000839_batch-3-800x600_1-main.jpg";
import wpImg from "../assets/imgi_36_1680592144790b7c006ce218e-HLKT00000784_Resized-800x600_17-main.jpg";
import lgImg from "../assets/imgi_37_1642061646574eca227300dc1-HLKT00000765_new-size-800x600_1-main.jpg";

// Client Image
import clientImg from "../assets/imgi_44_testimonials_13-171594642478481694326e2d3.jpg";

// Spaces Images
import spArtDeco from "../assets/imgi_26_1681378715189588de527c069-HLKT00000841_batch-3-800x600_8-main.jpg";
import spEclectic from "../assets/imgi_40_1639469954285d19b80f7b4f0-HLKT00000758_resize-800x600_A1-1-main.jpg";

// Partner Logos
import pStylam from "../assets/imgi_85_Stylam.png";
import pAristo from "../assets/imgi_89_D Partners logo184x83-03.png";
import pRehau from "../assets/imgi_83_Rehau.png";
import pHafele from "../assets/imgi_87_D Partners logo184x83-09.png";
import pElica from "../assets/imgi_90_D Partners logo184x83-05.png";
import pEgger from "../assets/imgi_102_Egger.png";
import pHettich from "../assets/imgi_81_D Partners logo184x83-07.png";
import pAsian from "../assets/imgi_76_Asian.png";
import FAQ from "../components/FAQ";

const faqItems = [
  {
    q: "What is HomeLane Luxe?",
    a: "At HomeLane Luxe, we're all about curating interiors that are 'Exclusively You'. Your home should be as fabulous and one of a kind as you are. Crafted with meticulous precision and care by our expert team, these interiors are more than just spaces—they are an embodiment of you.",
  },
  {
    q: "What does HomeLane Luxe offer?",
    a: "HomeLane Luxe is an end-to-end premium and personalised home interiors solution by HomeLane. We offer to you an extraordinary catalogue to choose from along with world-class designers and an expert project management team.",
  },
  {
    q: "Which cities is HomeLane Luxe available in?",
    a: "Currently, HomeLane Luxe is only available in Bangalore, Chennai, Coimbatore, Pune, Kolkata, Hyderabad and Noida. The good news is that we're expanding across the country and will be in your city soon!",
  },
  {
    q: "Does HomeLane Luxe have a store?",
    a: "HomeLane Experience Centres are easily accessible across the cities we operate in. Visit us to explore our premium offerings and meet our expert designers in person.",
  },
];

const Luxe = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    whatsapp: true,
    city: "",
  });
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
  });
  const [offeringsPage, setOfferingsPage] = useState(0);
  const [activeStyle, setActiveStyle] = useState("Art Deco");
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.city) {
      setToast({
        visible: true,
        message: "Please fill in all fields.",
        type: "error",
      });
      return;
    }
    const submissions = JSON.parse(
      localStorage.getItem("homelane_leads") || "[]",
    );
    submissions.push({
      ...form,
      source: "luxe_hero",
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("homelane_leads", JSON.stringify(submissions));
    setToast({
      visible: true,
      message: "Thank you! A Luxe designer will reach out soon.",
      type: "success",
    });
    setForm({ name: "", mobile: "", whatsapp: true, city: "" });
  };

  const offerings = [
    { title: "Modular Kitchen", img: mkImg },
    { title: "Storage & Wardrobe", img: wdImg },
    { title: "Crockery Units", img: cuImg },
    { title: "TV Units", img: tvImg },
    { title: "Study Tables", img: stImg },
    { title: "Pooja Unit", img: puImg },
    { title: "Wallpaper", img: wpImg },
    { title: "Lights", img: lgImg },
  ];
  const offeringsPerPage = 4;
  const maxOfferingsPage = Math.ceil(offerings.length / offeringsPerPage) - 1;

  const styleImages = {
    "Art Deco": [spArtDeco, spEclectic],
    Eclectic: [spEclectic, spArtDeco],
    "Indian Revival": [spArtDeco, spEclectic],
    Japandi: [spEclectic, spArtDeco],
    Memphis: [spArtDeco, spEclectic],
    Rustic: [spEclectic, spArtDeco],
  };

  return (
    <div className="bg-white font-sans text-[#1A1A1A] pt-[70px]">
      <LuxeNavbar />
      <Toast
        message={toast.message}
        visible={toast.visible}
        type={toast.type}
        onClose={() => setToast({ ...toast, visible: false })}
      />

      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImg}
            alt="Luxe Interior"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 h-full flex justify-end items-center">
          {/* Form aligned to right */}
          <form
            id="lead-form"
            onSubmit={handleSubmit}
            className="bg-[#FAF9F5] p-10 rounded-[4px] shadow-2xl max-w-[420px] w-full border border-gray-100"
          >
            <h3 className="text-[30px] font-serif mb-6 text-[#1A1A1A] font-light">
              Meet a{" "}
              <span className="font-script text-[48px] lowercase tracking-wide italic leading-[0]">
                designer
              </span>
            </h3>
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#8B6E30] transition-colors text-[14px]"
              />
              <div className="flex border-b border-gray-300 focus-within:border-[#8B6E30] transition-colors items-center">
                <span className="py-2 pr-2 text-[14px] text-gray-500 flex items-center gap-1 border-r border-gray-300">
                  IN <span className="text-[10px] ml-1">▼</span>
                </span>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="w-full bg-transparent py-2 px-3 focus:outline-none text-[14px]"
                />
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-300">
                <span className="text-[13px] text-gray-600">
                  Send me updates on WhatsApp
                </span>
                <div
                  onClick={() => setForm({ ...form, whatsapp: !form.whatsapp })}
                  className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${form.whatsapp ? "bg-[#9B7B26]" : "bg-gray-300"}`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-[4px] transition-all ${form.whatsapp ? "right-1" : "left-1"}`}
                  ></div>
                </div>
              </div>
              <div className="relative border-b border-gray-300 py-2">
                <select
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full bg-transparent pr-4 focus:outline-none text-[14px] text-gray-500 appearance-none cursor-pointer"
                >
                  <option value="">Select your property city</option>
                  <option value="bangalore">Bengaluru</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-gray-500 pointer-events-none">
                  ▼
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#9B7B26] hover:bg-[#8B6E30] text-white font-semibold py-4 px-4 rounded-[4px] transition-colors tracking-widest text-[13px] mt-8 shadow-md"
              >
                SCHEDULE NOW
              </button>
              <p className="text-[10px] text-gray-500 leading-relaxed mt-4 text-left">
                By submitting, you agree to our{" "}
                <a
                  href="/privacy-policy"
                  className="text-gray-700 hover:underline"
                >
                  privacy policy
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  className="text-gray-700 hover:underline"
                >
                  terms of use
                </a>
                , allowing us to use your information as outlined.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* 2. WHY LUXE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="text-[38px] font-serif mb-24 text-[#1A1A1A] font-light">
            Why HomeLane{" "}
            <span className="font-script text-[#4A4A4A] text-[70px] italic lowercase inline-block translate-y-4 leading-[0.5]">
              luxe
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Box 1 */}
            <div className="flex flex-col items-center">
              <div className="text-[#9B7B26] mb-8">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <polygon
                    points="12 4 13.5 7.5 17 8 14.5 10.5 15 14 12 12.5 9 14 9.5 10.5 7 8 10.5 7.5 12 4"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-[28px] font-serif mb-3 text-[#1A1A1A] font-light">
                Exclusive
                <br />
                Catalogue
              </h3>
              <p className="text-[#9B7B26] text-[15px] font-light leading-relaxed max-w-[220px]">
                300+ designs,
                <br />
                materials, and finishes
              </p>
            </div>
            {/* Box 2 */}
            <div className="flex flex-col items-center">
              <div className="text-[#9B7B26] mb-8">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                  <path d="M5 20v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
                  <polygon
                    points="12 1 12.8 2.5 14.2 2.8 13.1 3.9 13.3 5.4 12 4.7 10.7 5.4 10.9 3.9 9.8 2.8 11.2 2.5 12 1"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-[28px] font-serif mb-3 text-[#1A1A1A] font-light">
                All Star
                <br />
                Designers
              </h3>
              <p className="text-[#9B7B26] text-[15px] font-light leading-relaxed max-w-[220px]">
                100+ premium homes
                <br />
                designed
              </p>
            </div>
            {/* Box 3 */}
            <div className="flex flex-col items-center">
              <div className="text-[#9B7B26] mb-8">
                <svg
                  width="84"
                  height="70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Project Managers outline */}
                  <circle cx="12" cy="7" r="2" />
                  <path d="M12 11c-2.2 0-4 1.8-4 4v5h8v-5c0-2.2-1.8-4-4-4z" />
                  <circle cx="18" cy="9" r="2" />
                  <path
                    d="M18 13c-2.2 0-4 1.8-4 4v4h8v-4c0-2.2-1.8-4-4-4z"
                    opacity="0.6"
                  />
                  <circle cx="6" cy="9" r="2" />
                  <path
                    d="M6 13c-2.2 0-4 1.8-4 4v4h8v-4c0-2.2-1.8-4-4-4z"
                    opacity="0.6"
                  />
                </svg>
              </div>
              <h3 className="text-[28px] font-serif mb-3 text-[#1A1A1A] font-light">
                Experienced
                <br />
                Project Managers
              </h3>
              <p className="text-[#9B7B26] text-[15px] font-light leading-relaxed max-w-[220px]">
                25+ high end homes
                <br />
                executed to perfection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE JOURNEY (Scroll Stack) */}
      <section className="py-24 bg-white pb-64">
        <div className="max-w-[1240px] mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16 relative">
            {/* Left Side: Sticky Title and Button */}
            <div className="flex-[0.8] lg:sticky lg:top-32 text-center lg:text-left z-20">
              <h2 className="text-[44px] font-serif text-[#1A1A1A] font-light leading-tight">
                HomeLane Luxe
                <br />
                <span className="font-script text-[#4A4A4A] text-[85px] lowercase tracking-normal pl-8 block mt-[-20px] italic leading-[0.5]">
                  journey
                </span>
              </h2>
              <button
                onClick={() => {
                  const f = document.getElementById("lead-form");
                  if (f)
                    f.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="mt-20 bg-[#9B7B26] hover:bg-[#8B6E30] text-white font-semibold py-4 px-10 rounded-[4px] tracking-widest text-[14px] transition-colors shadow-lg shadow-[#8B6E30]/20"
              >
                MEET A DESIGNER
              </button>
            </div>

            {/* Right Side: Scroll Stack Cards */}
            <div className="flex-[1.2] w-full flex flex-col gap-0 relative pt-8">
              {[
                {
                  step: "Step 1",
                  title: "Meet Your Designer",
                  desc: "Share your ideas and floor plan to receive personalised 3D designs and an instant quote.",
                  icon: "handshake",
                },
                {
                  step: "Step 2",
                  title: "The HomeLane Luxe Membership",
                  desc: "Become a member for ₹25K. Get unique design themes and mood boards crafted exclusively for you.",
                  icon: "hexagon",
                },
                {
                  step: "Step 3",
                  title: "Book Your Order",
                  desc: "Pay 10% of the woodwork and home decor services to book your order.",
                  icon: "book",
                },
                {
                  step: "Step 4",
                  title: "Finalise Your Design",
                  desc: "Choose your materials, finishes and colours. Pay the next 10% of woodwork and home decor services to lock designs and begin site masking and quality checks.",
                  icon: "blueprint",
                },
                {
                  step: "Step 5",
                  title: "Send Designs to Factory",
                  desc: "Pay 30% of woodwork and 80% of home decor services to begin factory production.",
                  icon: "pencil",
                },
                {
                  step: "Step 6",
                  title: "Kick Off Dispatch",
                  desc: "Pay the remaining 50% of woodwork to dispatch your order post-production and begin installation.",
                  icon: "truck",
                },
                {
                  step: "Step 7",
                  title: "Complete Installation & Handover",
                  desc: "Our team installs, completes final checks and hands over your home for a smooth move-in.",
                  icon: "tools",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="sticky w-full bg-white rounded-[6px] border border-gray-200 p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] min-h-[180px] transition-transform duration-300 transform"
                  style={{
                    top: `${140 + idx * 24}px`,
                    zIndex: 10 + idx,
                    marginBottom: "32px",
                  }}
                >
                  <div className="absolute top-8 right-8 text-[#9B7B26] font-sans text-[14px] tracking-wider font-medium">
                    {card.step}
                  </div>
                  <div className="text-[#9B7B26] mb-4">
                    {card.icon === "handshake" && (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                        <path d="m21 3-6 6" />
                        <path d="m21 17-6-6" />
                        <path d="m21 21-6-6" />
                        <path d="M5 21a1 1 0 1 1-2 0V11a1 1 0 1 1 2 0z" />
                      </svg>
                    )}
                    {card.icon === "hexagon" && (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    )}
                    {card.icon === "book" && (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <path d="M12 11h4" />
                        <path d="M12 16h4" />
                        <path d="M8 11h.01" />
                        <path d="M8 16h.01" />
                      </svg>
                    )}
                    {card.icon === "blueprint" && (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <path d="M9 3v18" />
                        <path d="M15 3v18" />
                        <path d="M3 9h18" />
                        <path d="M3 15h18" />
                      </svg>
                    )}
                    {card.icon === "pencil" && (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2v20" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    )}
                    {card.icon === "truck" && (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                        <path d="M7 11h10" />
                        <path d="M7 7h10" />
                      </svg>
                    )}
                    {card.icon === "tools" && (
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18.3 5.7a3.02 3.02 0 0 0-4.2.2l-9.9 9.9a2.08 2.08 0 0 0-0.4 1.4v2.8h2.8a2.08 2.08 0 0 0 1.4-0.4l9.9-9.9a3.02 3.02 0 0 0 .2-4.2Zm-1.4 1.4 2 2M15 8l2 2" />
                      </svg>
                    )}
                  </div>
                  <h4 className="text-[26px] font-sans font-light text-[#1A1A1A] mb-3">
                    {card.title}
                  </h4>
                  <p className="text-[#333] text-[15px] font-light leading-relaxed max-w-[85%]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OFFERINGS GRID */}
      <section className="py-24 bg-[#FAF9F5]">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <h2 className="text-[40px] font-serif mb-16 text-[#1A1A1A] font-light">
            HomeLane Luxe{" "}
            <span className="font-script text-[#4A4A4A] text-[75px] lowercase italic leading-[0.5] ml-2">
              offerings
            </span>
          </h2>

          {/* Desktop Carousel Layout representation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setOfferingsPage((p) => Math.max(0, p - 1))}
              className={`hidden md:flex w-10 h-10 items-center justify-center text-[#9B7B26] hover:bg-white rounded-full transition-colors ${offeringsPage === 0 ? "opacity-30 cursor-default" : ""}`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="overflow-hidden flex-1 px-4 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 transition-all duration-500">
                {offerings
                  .slice(
                    offeringsPage * offeringsPerPage,
                    offeringsPage * offeringsPerPage + offeringsPerPage,
                  )
                  .map((item, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="overflow-hidden rounded-[8px] mb-4 shadow-sm border border-gray-100 aspect-square">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <h4 className="text-[16px] text-gray-600 font-light">
                        {item.title}
                      </h4>
                    </div>
                  ))}
              </div>
            </div>

            <button
              onClick={() =>
                setOfferingsPage((p) => Math.min(maxOfferingsPage, p + 1))
              }
              className={`hidden md:flex w-10 h-10 items-center justify-center text-[#9B7B26] hover:bg-white rounded-full transition-colors ${offeringsPage === maxOfferingsPage ? "opacity-30 cursor-default" : ""}`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 5. FROM OUR CLIENTS */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1240px] mx-auto px-6 h-full flex flex-col lg:flex-row items-center gap-16">
          {/* Left Title */}
          <div className="flex-1 text-center lg:text-right">
            <h2 className="text-[48px] font-script text-[#4A4A4A] italic lowercase leading-[0.5]">
              from our
            </h2>
            <h3 className="text-[52px] font-sans font-light text-[#1A1A1A] tracking-wide mt-2">
              Clients
            </h3>
          </div>

          {/* Right Testimonial Card */}
          <div className="flex-[1.5] flex items-center gap-6 w-full relative">
            {/* Carousel Arrows */}
            <button className="absolute -left-16 z-10 w-12 h-12 flex items-center justify-center text-[#9B7B26] hover:bg-[#FAF9F5] rounded-full transition-colors">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="bg-white rounded-[4px] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 w-full relative">
              <h4 className="text-[18px] font-bold text-[#4A4A4A] tracking-wider mb-8">
                KARISHMA SHARMA
              </h4>

              <div
                className="relative aspect-video w-[80%] mb-6 rounded-[4px] overflow-hidden group cursor-pointer shadow-sm"
                onClick={() => setVideoPlaying(!videoPlaying)}
              >
                {videoPlaying ? (
                  <div className="w-full h-full bg-black flex items-center justify-center text-white text-lg">
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 mx-auto mb-3 text-[#9B7B26]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <p className="text-[#9B7B26] font-serif text-xl">
                        Video Coming Soon
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Click to go back
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={clientImg}
                      alt="Client Review"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full border-[1.5px] border-white flex items-center justify-center pl-1 bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <svg
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-6 h-6"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <p className="text-[12px] text-gray-400 mb-4 font-sans">
                Laksharia Empress, Mumbai
              </p>
              <p className="text-[14px] text-gray-600 font-light leading-relaxed max-w-[85%] italic">
                "Nailed it! Interiors, lights, aesthetics—all on point. Being an
                actor and influencer, a camera-ready aesthetic home is a must.
                They got my vibe and delivered incredible interiors at
                reasonable prices!"
              </p>
            </div>

            <button className="absolute -right-16 z-10 w-12 h-12 flex items-center justify-center text-[#9B7B26] hover:bg-[#FAF9F5] rounded-full transition-colors">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 6. SPACES BY HOMELANE LUXE */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <h2 className="text-[44px] font-script text-[#4A4A4A] italic lowercase leading-[0.5] mb-2">
            spaces{" "}
            <span className="font-sans text-[36px] font-light text-[#1A1A1A] not-italic tracking-wide">
              by HomeLane Luxe
            </span>
          </h2>

          <div className="flex justify-center gap-8 md:gap-12 mb-16 mt-16 overflow-x-auto whitespace-nowrap px-4 hide-scrollbar">
            {[
              "Art Deco",
              "Eclectic",
              "Indian Revival",
              "Japandi",
              "Memphis",
              "Rustic",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveStyle(tab)}
                className={`text-[16px] font-sans transition-colors ${tab === activeStyle ? "text-[#9B7B26] font-medium" : "text-gray-500 hover:text-gray-900 font-light"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[8px] overflow-hidden aspect-[4/3] group cursor-pointer shadow-sm">
              <img
                src={styleImages[activeStyle]?.[0] || spArtDeco}
                alt={`${activeStyle} Space 1`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="rounded-[8px] overflow-hidden aspect-[4/3] group cursor-pointer shadow-sm">
              <img
                src={styleImages[activeStyle]?.[1] || spEclectic}
                alt={`${activeStyle} Space 2`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR INCREDIBLE PARTNERS */}
      <section className="py-24 bg-[#4A4D4A]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="text-[32px] font-sans font-light text-white mb-20 tracking-wide">
            Our Incredible{" "}
            <span className="font-script text-[64px] italic lowercase leading-[0.5] ml-2 font-normal">
              partners
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 items-center justify-items-center">
            {[
              { img: pStylam, name: "Stylam", h: "h-8" },
              { img: pAristo, name: "Aristo", h: "h-6" },
              { img: pRehau, name: "Rehau", h: "h-6" },
              { img: pHafele, name: "Hafele", h: "h-6" },
              { img: pElica, name: "Elica", h: "h-8" },
              { img: pEgger, name: "Egger", h: "h-6" },
              { img: pHettich, name: "Hettich", h: "h-8" },
              { img: pAsian, name: "Asian Paints", h: "h-10" },
            ].map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center w-full max-w-[160px]"
              >
                <img
                  src={partner.img}
                  alt={partner.name}
                  className={`${partner.h} object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <div className="bg-white pt-10 pb-20">
        <FAQ items={faqItems} title={`Got Questions ?`} />
      </div>

      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
};

export default Luxe;
