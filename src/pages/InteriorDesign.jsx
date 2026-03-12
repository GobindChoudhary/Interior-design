import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { scrollToForm } from "../utils/scrollToForm";
import heroImg from "../assets/interior design.webp";
import DesignGallery from "../components/DesignGallery";
import DesignCard from "../components/DesignCard";
import ExpertDesigners from "../components/ExpertDesigners";
import { gallerySections } from "../data/galleryData";
import { galleryDataMap, livingRoomTestimonials } from "../data/galleryDesigns";
import TestimonialsGallery from "../components/TestimonialsGallery";
import WhyChooseUs from "../components/WhyChooseUs";
import CTABanner from "../components/CTABanner";
import ProcessSteps from "../components/ProcessSteps";
import { processSteps } from "../data/processData";
import CityCarousel from "../components/CityCarousel";
import { cityData } from "../data/cityData";
import FAQ from "../components/FAQ";
import { faqItems } from "../data/faqData";

const InteriorDesign = () => {
  const { galleryItem } = useParams();
  const navigate = useNavigate();

  // If a specific category is requested
  if (galleryItem) {
    const categoryData = galleryDataMap[galleryItem];

    if (!categoryData) {
      return (
        <div className="w-full min-h-[70vh] bg-gray-50 flex flex-col items-center justify-center p-8 text-center text-[#212529]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Category Not Found</h1>
          <p className="text-lg text-[#7b7b7b] mb-8">We couldn't find designs for "{galleryItem}".</p>
          <Link to="/home-interiors" className="bg-[#e71c24] text-white px-8 py-3 rounded-md font-bold hover:bg-[#c41920] transition-colors">
            View All Designs
          </Link>
        </div>
      );
    }

    const formattedBreadcrumb = galleryItem.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
      <div className="w-full min-h-screen bg-white">
        {/* Specific Category Hero */}
        <div
          className="relative w-full h-[420px] md:h-[480px] lg:h-[700px] bg-cover bg-center flex items-center pt-[70px]"
          style={{ backgroundImage: `url(${categoryData.heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className="relative z-10 max-w-3xl px-8 md:px-16">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              {categoryData.pageTitle.replace(' Shaped Around You', '')}
            </h1>
            <button onClick={() => scrollToForm(navigate)} className="bg-[#e71c24] hover:bg-[#c41920] text-white text-lg font-bold px-8 py-3 rounded-[4px] transition-colors shadow-lg">
              Book 3D Design Session
              <span className="ml-2 align-middle">→</span>
            </button>
          </div>
        </div>

        {/* Category Breadcrumb */}
        <div className="w-full bg-white border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-8 py-3 flex items-center text-sm text-[#e71c24] gap-2">
            <Link to="/" className="text-gray-500 hover:text-[#e71c24]">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              to="/home-interiors"
              className="text-gray-500 hover:text-[#e71c24]"
            >
              Design Gallery
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#e71c24] font-semibold">{formattedBreadcrumb}</span>
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

          <div className="mb-20">
            <TestimonialsGallery testimonials={categoryData.testimonials} />
          </div>

          <ProcessSteps steps={processSteps} />
        </div>

        <CityCarousel cities={cityData} />

        <div className="max-w-[760px] mx-auto px-4 py-8 mb-20 mt-10">
          <FAQ items={faqItems} title="Frequently asked questions" />
        </div>
      </div>
    );
  }

  // If NO parameter (Hub View)
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <div
        className="relative w-full h-[420px] md:h-[480px] lg:h-[700px] bg-cover bg-center flex items-center pt-[70px]"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-3xl px-8 md:px-16">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Home Interior Designs

          </h1>
          <button onClick={() => scrollToForm(navigate)} className="bg-[#e71c24] hover:bg-[#c41920] text-white text-lg font-bold px-8 py-3 rounded-[4px] transition-colors shadow-lg">
            Book 3D Design Session
            <span className="ml-2 align-middle">→</span>
          </button>
        </div>
      </div>

      {/* 2. Breadcrumbs (Optional, matching regular flow) */}
      <div className="w-full bg-white border-b border-gray-200 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-8 py-3 flex items-center text-sm gap-2">
          <Link to="/" className="text-gray-500 hover:text-[#e71c24]">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#e71c24] font-semibold">Home Interior Designs</span>
        </div>
      </div>

      {/* 3. DesignGallery Hub view */}
      <DesignGallery sections={gallerySections} />

      {/* 4. Success Stories (Testimonials) */}
      <div className="py-2">
        <TestimonialsGallery testimonials={livingRoomTestimonials} />
      </div>

      {/* 5. Why HomeLane? */}
      <WhyChooseUs />

      {/* 6. Free Estimate CTA Banner */}
      <CTABanner />

      {/* 7. Process Steps */}
      <ProcessSteps steps={processSteps} />

      {/* 8. Locate a Studio */}
      <CityCarousel cities={cityData} />

      {/* 9. FAQs */}
      <div className="max-w-[760px] mx-auto px-4 py-8 mb-20">
        <FAQ items={faqItems} title="FAQs on Home Interiors and Designers" />
      </div>
    </div>
  );
};

export default InteriorDesign;
