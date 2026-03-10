import React, { useRef, useState } from 'react';
import leftArrowIcon from '../assets/imgi_150_default.svg';
import rightArrowIcon from '../assets/imgi_157_default.svg';

// Reusing same images as mock data for success stories
import kitchenImg from "../assets/imgi_12_vivid-white-minimalist-l-shaped-kitchen-sleek-cabinets.webp";
import bedroomImg from "../assets/bedroom design.webp";
import wardrobeImg from "../assets/wardrobe designs.webp";
import livingImg from "../assets/living-room.webp";

const successStoriesData = [
    {
        id: 1,
        title: "A Rainbow of Pastels Invigorates this Delightful Mumbai Abode!",
        category: "Interior Design",
        image: livingImg,
    },
    {
        id: 2,
        title: "This Mumbai Home Delivers Luxe Style in a Compact Footprint",
        category: "Interior Design",
        image: kitchenImg,
    },
    {
        id: 3,
        title: "Utilitarian and Comfortable, This Mumbai Home Is All About Thoughtfully Designed Spaces",
        category: "Interior Design",
        image: bedroomImg,
    },
    {
        id: 4,
        title: "Luxe Details Enhance the Style Quotient of This Modern Noida Home!",
        category: "Interior Design",
        image: wardrobeImg,
    },
    {
        id: 5,
        title: "Minimalist Elegance Defines this Exquisite Bangalore Apartment",
        category: "Interior Design",
        image: livingImg,
    },
    {
        id: 6,
        title: "Smart Storage Solutions Transform this Compact Pune Studio",
        category: "Interior Design",
        image: kitchenImg,
    }
];

const SuccessStories = () => {
    const scrollContainerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const cardWidth = 350; // base width roughly
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section
            className="py-16 md:py-24 bg-white relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header Segment */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-[28px] md:text-[36px] font-normal text-[#212529] mb-4">
                        From Vision to Reality: Home Interior Success Stories
                    </h2>
                    <p className="text-[#4a4a4a] text-[16px] md:text-[18px] leading-relaxed">
                        Join us on a journey through the homes we've transformed. From the first design meeting to the final reveal, see how we bring each homeowner's unique vision to life. Get inspired by real stories and discover what makes a HomeLane home truly special!
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative group">

                    {/* Left Navigation Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className={`absolute -left-4 top-[40%] md:top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full bg-opacity-90 shadow-lg flex items-center justify-center text-[#212529] hover:text-[#e71c24] active:scale-90 transition-all duration-300 z-20 border border-gray-100 ${isHovered ? 'opacity-100 translate-x-2' : 'opacity-0 -translate-x-2 pointer-events-none'}`}
                        aria-label="Previous story"
                    >
                        <img src={leftArrowIcon} alt="Previous" className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Scrollable Cards Track */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide pt-4 px-2"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {successStoriesData.map((story) => (
                            <div
                                key={story.id}
                                className="flex-none w-[300px] md:w-[350px] lg:w-[400px] aspect-[4/5] md:aspect-square relative rounded-xl overflow-hidden group/card cursor-pointer snap-start shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Background Image */}
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                                />

                                {/* Dark Gradient Overlay at Bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">

                                    {/* Main Title */}
                                    <h3 className="text-white text-[18px] md:text-[20px] font-medium leading-tight mb-6 mt-auto">
                                        {story.title}
                                    </h3>

                                    {/* Separator Line */}
                                    <div className="w-full h-px bg-white/20 mb-4 transition-all duration-300 group-hover/card:bg-white/40"></div>

                                    {/* Footer Section: Category & Read More */}
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex flex-col">
                                            <span className="text-white/80 text-[12px] uppercase tracking-wider font-semibold mb-1">
                                                {story.category}
                                            </span>
                                            <span className="text-white text-[13px] hover:underline">
                                                Read More
                                            </span>
                                        </div>

                                        {/* Circular Arrow Button */}
                                        <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center bg-transparent group-hover/card:bg-white text-white group-hover/card:text-[#212529] transition-all duration-300 transform group-hover/card:translate-x-1">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Navigation Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className={`absolute -right-4 top-[40%] md:top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full bg-opacity-90 shadow-lg flex items-center justify-center text-[#212529] hover:text-[#e71c24] active:scale-90 transition-all duration-300 z-20 border border-gray-100 ${isHovered ? 'opacity-100 -translate-x-2' : 'opacity-0 translate-x-2 pointer-events-none'}`}
                        aria-label="Next story"
                    >
                        <img src={rightArrowIcon} alt="Next" className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                </div>
            </div>

            {/* Hide Scrollbar Styles */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default SuccessStories;
