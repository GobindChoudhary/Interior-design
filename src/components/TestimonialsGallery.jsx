import React, { useState } from 'react';
import leftArrowIcon from '../assets/imgi_150_default.svg';
import rightArrowIcon from '../assets/imgi_157_default.svg';

const TestimonialCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
        <div className="bg-white rounded-lg overflow-hidden border border-[#f0f0f0] shadow-[0_2px_8px_rgba(0,0,0,0.06)] h-full flex flex-col">
            {/* Video/Image Container */}
            <div className="relative aspect-[16/9] w-full bg-gray-100 group cursor-pointer">
                <img
                    src={testimonial.img}
                    alt={`${testimonial.names}'s Home`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    {/* Play Button */}
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center pl-1 bg-black/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <p className="text-[14px] text-[#4a4a4a] leading-relaxed mb-6 italic flex-grow">
                    "{testimonial.quote}"
                </p>
                <div>
                    <h4 className="text-[14px] font-bold text-[#212529] mb-1">
                        {testimonial.names}
                    </h4>
                    <p className="text-[12px] text-[#7b7b7b]">
                        {testimonial.location}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const TestimonialsGallery = ({ testimonials }) => {
    // Determine the number of visible cards based on screen size.
    // Assuming 3 cards on desktop for simplicity. (Can be made dynamic with a window resize hook)
    const visibleCards = 3;
    const cardWidth = `calc(33.333% - 16px)`;
    const gap = 24; // 24px gap

    // Triple the array to ensure enough cards for left/right infinite swiping
    const slideItems = [...testimonials, ...testimonials, ...testimonials];
    const startIndex = testimonials.length; // Start in the middle array

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
        // If we scrolled past the middle set to the right set
        if (currentIndex >= startIndex + testimonials.length) {
            // Jump back to the exact same card in the middle set
            setCurrentIndex(currentIndex - testimonials.length);
        }
        // If we scrolled before the middle set into the left set
        else if (currentIndex <= startIndex - 1) {
            // Jump forward to the exact same card in the middle set
            setCurrentIndex(currentIndex + testimonials.length);
        }
    };

    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section
            className="py-16 bg-white overflow-x-hidden w-full relative"
            style={{
                '--current-index': currentIndex,
                '--gap': '24px'
            }}
        >
            <style>{`
                .testimonials-track {
                    --card-width: 100%;
                    transform: translateX(calc(-1 * var(--current-index) * (var(--card-width) + var(--gap))));
                }
                @media (min-width: 768px) {
                    .testimonials-track {
                        --card-width: calc(50% - 12px);
                    }
                }
                @media (min-width: 1024px) {
                    .testimonials-track {
                        --card-width: calc(33.333333% - 16px);
                    }
                }
            `}</style>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-12 md:px-20 relative">
                <div className="text-center mb-10">
                    <h2 className="text-[32px] md:text-[38px] font-normal text-[#212529] mb-4">
                        55000+ Homes Designed with Love
                    </h2>
                    <p className="text-[16px] text-[#4a4a4a] max-w-4xl mx-auto leading-relaxed">
                        Every living room you see here was shaped by the rhythms of daily life—quiet mornings, lively evenings, and everything in between. These spaces reflect different ways of living, each one thoughtfully designed by the HomeLane team to feel just right! Let these living room interiors spark ideas for your own perfect home.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Controls - Previous */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-3 sm:-left-10 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#212529] hover:text-[#e71c24] active:scale-90 active:opacity-75 transition-all duration-200 z-10"
                        aria-label="Previous testimonial"
                    >
                        <img src={leftArrowIcon} alt="Previous" className="w-6 h-auto" />
                    </button>

                    {/* Slides Track */}
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-[24px] testimonials-track"
                            style={{
                                transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
                            }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {slideItems.map((t, idx) => (
                                <TestimonialCard key={`${t.id}-${idx}`} testimonial={t} />
                            ))}
                        </div>
                    </div>

                    {/* Controls - Next */}
                    <button
                        onClick={nextSlide}
                        className="absolute -right-10 sm:-right-10 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#212529] hover:text-[#e71c24] active:scale-90 active:opacity-75 transition-all duration-200 z-10"
                        aria-label="Next testimonial"
                    >
                        <img src={rightArrowIcon} alt="Next" className="w-6 h-auto" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsGallery;
