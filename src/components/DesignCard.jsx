import React, { useState, useEffect } from 'react';

const DesignCard = ({ title, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Check if we have multiple images before setting up interval
        if (!images || images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(timer);
    }, [images]);

    // Safe fallback if images array is empty or undefined
    const currentImage = images && images.length > 0 ? images[currentIndex] : '';

    return (
        <div className="flex flex-col gap-3 group">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer">
                {currentImage && (
                    <img
                        src={currentImage}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                )}

                {/* Top Gradient for icons visibility */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Heart Icon - Only visible on hover in the screenshot, but lets make it always faintly visible and bold on hover */}
                <button className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 hover:text-[#e0b855] rounded-full text-white transition-all backdrop-blur-sm z-10">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>

                {/* Carousel Dots - Only show if multiple images */}
                {images && images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/70'}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex items-start justify-between gap-4 mt-1">
                <h3 className="text-[15px] font-medium text-[#212529] leading-tight flex-1">
                    {title}
                </h3>
                <button className="shrink-0 text-[13px] font-bold text-[#e0b855] border border-[#e0b855] px-4 py-1.5 rounded-[4px] hover:bg-[#ffebee] transition-colors">
                    Get Quote
                </button>
            </div>
        </div>
    );
};

export default DesignCard;
