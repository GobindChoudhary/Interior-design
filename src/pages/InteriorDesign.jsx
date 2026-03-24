import React from "react";
import { Link, useParams } from "react-router-dom";
import { imageAssets } from "../data/imageAssets";
import DesignGallery from "../components/DesignGallery";
import DesignCard from "../components/DesignCard";
import ExpertDesigners from "../components/ExpertDesigners";
import { gallerySections } from "../data/galleryData";
import { galleryDataMap } from "../data/galleryDesigns";
import WhyChooseUs from "../components/WhyChooseUs";
import CTABanner from "../components/CTABanner";
import FAQ from "../components/FAQ";
import { faqItems } from "../data/faqData";

const InteriorDesign = () => {
  const { galleryItem } = useParams();

  // If a specific category is requested
  if (galleryItem) {
    const categoryData = galleryDataMap[galleryItem];

    if (!categoryData) {
      return (
        <div className="w-full min-h-[70vh] bg-gray-50 flex flex-col items-center justify-center p-8 text-center text-[#212529]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Category Not Found</h1>
          <p className="text-lg text-[#7b7b7b] mb-8">We couldn't find designs for "{galleryItem}".</p>
          <Link to="/home-interiors" className="bg-[#e0b855] text-white px-8 py-3 rounded-md font-bold hover:bg-[#c4a14a] transition-colors">
            View All Designs
          </Link>
        </div>
      );
    }

    const formattedBreadcrumb = galleryItem.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
      <div className="w-full min-h-screen bg-transparent">
        {/* Specific Category Hero */}
        <div
          className="relative w-full h-[420px] md:h-[480px] lg:h-[700px] bg-cover bg-center flex items-center pt-[70px]"
          style={{ backgroundImage: `url(${categoryData.heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className="relative z-10 max-w-3xl px-8 md:px-16">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              {categoryData.headerTitle}
            </h1>
            <Link 
              to={galleryItem === 'modular-kitchen' ? "/price-calculator/kitchen" : "/price-calculator/home-interior"} 
              className="inline-block bg-[#e0b855] hover:bg-[#c4a14a] text-white text-lg font-bold px-8 py-3 rounded-[4px] transition-colors shadow-lg"
            >
              Book 3D Design Session
              <span className="ml-2 align-middle">→</span>
            </Link>
          </div>
        </div>

        {/* Category Breadcrumb */}
        <div className="w-full bg-transparent border-b border-gray-200 font-cinzel">
          <div className="max-w-[1400px] mx-auto px-8 py-3 flex items-center text-sm text-[#e0b855] gap-2">
            <Link to="/" className="text-gray-500 hover:text-[#e0b855]">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              to="/home-interiors"
              className="text-gray-500 hover:text-[#e0b855]"
            >
              Design Gallery
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#e0b855] font-semibold">{formattedBreadcrumb}</span>
          </div>
        </div>

        {/* Category Content */}
        <div className="max-w-[1400px] mx-auto px-8 py-10">
          <h2 className="text-2xl font-bold mb-8 text-[#212529]">
            {categoryData.headerTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {categoryData.designs.map((item) => (
              <DesignCard
                key={item.id}
                title={item.title}
                images={item.images}
              />
            ))}
          </div>

          <WhyChooseUs />

          <div className="my-16">
            <ExpertDesigners />
          </div>

          <div className="max-w-[760px] mx-auto px-4 py-8 mb-20 mt-10">
            <FAQ items={faqItems} title="Frequently asked questions" />
          </div>
        </div>
      </div>
    );
  }

  // If NO parameter (Hub View)
  return (
    <div className="w-full bg-transparent">
      {/* 1. Hero Section */}
      <div
        className="relative w-full h-[420px] md:h-[480px] lg:h-[700px] bg-cover bg-center flex items-center pt-[70px]"
        style={{ backgroundImage: `url(${imageAssets.interiorDesignHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-3xl px-8 md:px-16">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Home Interior Designs
          </h1>
          <Link to="/price-calculator/home-interior" className="inline-block bg-[#e0b855] hover:bg-[#c4a14a] text-white text-lg font-bold px-8 py-3 rounded-[4px] transition-colors shadow-lg">
            Book 3D Design Session
            <span className="ml-2 align-middle">→</span>
          </Link>
        </div>
      </div>

      {/* 2. Breadcrumbs */}
      <div className="w-full bg-transparent border-b border-gray-200 hidden md:block font-cinzel">
        <div className="max-w-[1400px] mx-auto px-8 py-3 flex items-center text-sm gap-2">
          <Link to="/" className="text-gray-500 hover:text-[#e0b855]">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#e0b855] font-semibold">Home Interior Designs</span>
        </div>
      </div>

      <DesignGallery sections={gallerySections} />
      <WhyChooseUs />
      <CTABanner />

      <div className="max-w-[760px] mx-auto px-4 py-8 mb-20">
        <FAQ items={faqItems} title="FAQs on Home Interiors and Designers" />
      </div>
    </div>
  );
};

export default InteriorDesign;
