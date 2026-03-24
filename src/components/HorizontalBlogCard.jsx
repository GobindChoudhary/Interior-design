import React from 'react';
import { FaPinterestP } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HorizontalBlogCard = ({ blog, categoryId }) => {
    return (
        <div className="flex flex-col md:flex-row gap-8 mb-16 border-b border-gray-100 pb-12 last:border-0 group">
            {/* Left Box: Image */}
            <Link
                to={`/design-ideas/${categoryId}/${blog.id}`}
                className="w-full md:w-[45%] lg:w-[40%] shrink-0 relative overflow-hidden rounded-md block aspect-[4/3] md:aspect-auto md:h-[280px]"
            >
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Pinterest Icon Badge */}
                <div
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm opacity-90 hover:opacity-100 transition-opacity z-10"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                >
                    <FaPinterestP className="text-[#E60023] text-lg" />
                </div>
            </Link>

            {/* Right Box: Content */}
            <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col justify-start py-2">

                {/* Slanted Category Category */}
                <p className="text-[11px] font-semibold text-[#e0b855] tracking-wider mb-3 uppercase italic">
                    in {blog.category}
                </p>

                {/* Title */}
                <Link to={`/design-ideas/${categoryId}/${blog.id}`}>
                    <h3 className="text-2xl md:text-3xl font-normal leading-tight text-[#222] mb-4 hover:text-[#e0b855] transition-colors duration-300">
                        {blog.title}
                    </h3>
                </Link>

                {/* Date */}
                <p className="text-[11px] text-gray-400 tracking-widest mb-6 uppercase border-b border-gray-100 pb-4 inline-block max-w-max">
                    {blog.date}
                </p>

                {/* Snippet */}
                <p className="text-[15px] text-gray-600 leading-relaxed font-light mb-8 max-w-2xl">
                    {blog.snippet}
                </p>

                {/* Icon Strip (Bottom) */}
                <div className="flex items-center gap-6 mt-auto">
                    {/* Heart Counter */}
                    <div className="flex items-center gap-2 text-gray-400 hover:text-[#e0b855] cursor-pointer transition-colors">
                        <i className="fas fa-heart text-sm"></i>
                        <span className="text-xs font-semibold">0</span>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-4 text-gray-400">
                        <a href="#" className="hover:text-[#1877F2] transition-colors"><i className="fab fa-facebook-f text-sm"></i></a>
                        <a href="#" className="hover:text-[#1DA1F2] transition-colors"><i className="fab fa-twitter text-sm"></i></a>
                        <a href="#" className="hover:text-[#E60023] transition-colors"><i className="fab fa-pinterest-p text-sm"></i></a>
                        <a href="#" className="hover:text-gray-800 transition-colors"><i className="far fa-envelope text-sm"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalBlogCard;
