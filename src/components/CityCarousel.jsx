import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import leftArrowIcon from '../assets/imgi_150_default.svg';
import rightArrowIcon from '../assets/imgi_157_default.svg';

const CityCard = ({ city }) => (
    <div className="flex-shrink-0 w-[240px] h-[160px] md:h-[200px] md:w-[280px] lg:w-[calc(20%-19.2px)]">
        <Link to={city.link} className="block w-full h-full relative rounded-2xl overflow-hidden group">
            {/* Background Image */}
            <img
                src={city.image}
                alt={`${city.name} interiors`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* City Title */}
            <h3 className="absolute bottom-4 left-0 w-full text-center text-white text-[20px] md:text-[24px] font-bold z-10">
                {city.name}
            </h3>
        </Link>
    </div>
);

const CityCarousel = ({ cities }) => {
    const visibleCards = 5; // Can be fine-tuned or responsive via CSS calculation
    const gap = 24; // 24px gap between items

    // Triple the array for infinite forward scroll illusion (same logic as testimonials)
    const slideItems = [...cities, ...cities, ...cities];
    const startIndex = cities.length;

    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (currentIndex >= startIndex + cities.length) {
            setCurrentIndex(currentIndex - cities.length);
        } else if (currentIndex <= startIndex - 1) {
            setCurrentIndex(currentIndex + cities.length);
        }
    };

    // Calculate active dot index purely based on scroll position in middle array
    const normalizedIndex = currentIndex % cities.length;

    if (!cities || cities.length === 0) return null;

    return (
        <section className="py-20 bg-white overflow-x-hidden w-full relative">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 xl:px-20 text-center mb-12">
                <h2 className="text-[32px] md:text-[36px] text-[#212529] mb-4">
                    Find Us in Your City
                </h2>
                <p className="text-[16px] text-[#4a4a4a] max-w-4xl mx-auto leading-relaxed">
                    Explore our presence across India—click on your city to get started with your dream living room.
                </p>
            </div>

            <div
                className="max-w-[1440px] mx-auto relative px-4 sm:px-8 md:px-12 xl:px-20"
                style={{
                    '--current-index': currentIndex,
                    '--gap': '24px'
                }}
            >
                <style>{`
                    .city-track {
                        --card-width: 240px; /* Mobile fallback width */
                        transform: translateX(calc(-1 * var(--current-index) * (var(--card-width) + var(--gap))));
                    }
                    @media (min-width: 768px) {
                        .city-track {
                            --card-width: 280px;
                        }
                    }
                    @media (min-width: 1024px) {
                        .city-track {
                            --card-width: calc(20% - 19.2px); /* For exactly 5 visible items with 4 gaps */
                        }
                    }
                `}</style>

                {/* Carousel Overflow Track */}
                <div className="overflow-hidden mb-12">
                    <div
                        className="flex gap-[24px] city-track w-max lg:w-full"
                        style={{
                            transition: isTransitioning ? 'transform 400ms ease-in-out' : 'none'
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {slideItems.map((city, idx) => (
                            <CityCard key={`${city.id}-${idx}`} city={city} />
                        ))}
                    </div>
                </div>

                {/* Controls (Arrows and Dots) */}
                <div className="flex items-center justify-center gap-8 mt-4">
                    {/* Left Arrow Button */}
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-[#f0f0f0] shadow-sm flex items-center justify-center bg-white text-[#212529] hover:border-[#212529] active:scale-90 active:opacity-75 transition-all duration-200 group"
                        aria-label="Previous city"
                    >
                        {/* We can use the slim SVGs here as requested before by user */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:text-black">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Dots indicator */}
                    <div className="flex gap-2 items-center">
                        {cities.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setIsTransitioning(true);
                                    // Navigate to the precise index in the middle array
                                    setCurrentIndex(startIndex + idx);
                                }}
                                className={`transition-all duration-300 rounded-full border ${normalizedIndex === idx ? 'w-4 h-2 bg-[#7b7b7b] border-[#7b7b7b]' : 'w-2 h-2 border-[#d0d0d0] hover:border-[#7b7b7b]'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Right Arrow Button */}
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-[#f0f0f0] shadow-sm flex items-center justify-center bg-white text-[#212529] hover:border-[#212529] active:scale-90 active:opacity-75 transition-all duration-200 group"
                        aria-label="Next city"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:text-black">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CityCarousel;
