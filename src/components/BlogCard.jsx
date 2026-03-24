import React from "react";
import { FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, categoryId }) => {
  return (
    <div className="flex flex-col group h-full">
      {/* Image Container - Clickable */}
      <Link
        to={`/design-ideas/${categoryId}/${blog.id}`}
        className="relative overflow-hidden rounded-md mb-6 transition-all duration-300 block"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Pinterest Icon Badge */}
        <div
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm opacity-90 hover:opacity-100 transition-opacity z-10"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Pinterest action would go here
          }}
        >
          <FaPinterestP className="text-[#E60023] text-lg" />
        </div>
      </Link>

      {/* Content Area */}
      <div className="flex flex-col flex-grow px-4 text-center">
        {/* Meta Info: Category, Date & Read Time */}
        <p className="text-[11px] font-semibold text-gray-500 tracking-wider mb-2 uppercase">
          in <span className="text-[#e0b855]">{blog.category}</span> -{" "}
          {blog.date} -
        </p>
        <p className="text-[11px] text-gray-400 tracking-widest mb-4 uppercase">
          {blog.readTime}
        </p>

        {/* Title - Clickable */}
        <Link to={`/design-ideas/${categoryId}/${blog.id}`}>
          <h3 className="text-[22px] font-normal leading-tight text-[#333] mb-4 hover:text-[#e0b855] transition-colors duration-300">
            {blog.title}
          </h3>
        </Link>

        {/* Author */}
        <p className="text-xs text-gray-500 italic mb-4">
          by{" "}
          <span className="uppercase text-gray-700 not-italic font-medium">
            {blog.author}
          </span>
        </p>

        {/* Snippet */}
        <p className="text-[15px] text-gray-600 leading-relaxed font-light mt-auto mb-6">
          {blog.snippet}
        </p>

        {/* Keep Reading & Socials */}
        <div className="flex flex-col items-center gap-4 mt-2 mb-4 border-t border-gray-100 pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/design-ideas/${categoryId}/${blog.id}`}
            className="text-[11px] font-semibold tracking-widest text-[#e0b855] border border-[#e0b855] px-6 py-2 rounded-[4px] hover:bg-[#e0b855] hover:text-white transition-colors duration-300"
          >
            KEEP READING
          </Link>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f text-sm"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"
            >
              <i className="fab fa-twitter text-sm"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#E60023] hover:text-white transition-colors"
            >
              <i className="fab fa-pinterest-p text-sm"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <i className="fas fa-envelope text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
