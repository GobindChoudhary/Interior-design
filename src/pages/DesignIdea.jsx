import React, { useEffect, useState } from "react";
import { blogData } from "../data/blogData";
import BlogCard from "../components/BlogCard";
import { Link, useParams } from "react-router-dom";

const PAGE_SIZE = 2;

const DesignIdea = () => {
  const { categoryId } = useParams();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Default to 'modular-kitchen-design-ideas' if no categoryId is provided in the URL
  const currentCategorySlug = categoryId || "modular-kitchen-design-ideas";
  const categoryData = blogData[currentCategorySlug];

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisibleCount(PAGE_SIZE);
  }, [categoryId, setVisibleCount]); // Re-run scroll when category changes

  // Handle invalid categories (404-like behavior)
  if (!categoryData) {
    return (
      <div className="bg-white min-h-screen py-20 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Category Not Found
        </h1>
        <p className="text-gray-500 mb-8">
          The design idea category you are looking for doesn't exist.
        </p>
        <Link
          to="/design-ideas/modular-kitchen-design-ideas"
          className="bg-[#e71c24] text-white px-6 py-2 rounded font-semibold hover:bg-[#c41920]"
        >
          Return to Kitchen Ideas
        </Link>
      </div>
    );
  }

  const visibleBlogs = categoryData.blogs.slice(0, visibleCount);
  const hasMore = visibleCount < categoryData.blogs.length;

  return (
    <div className="bg-white min-h-screen py-10">
      {/* Context/Breadcrumb area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 text-center">
        <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider">
          CATEGORY
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-6 tracking-tight">
          {categoryData.title}
        </h1>

        {/* Breadcrumb text */}
        <div className="flex justify-center items-center text-sm md:text-base text-gray-500 gap-2 mb-12">
          <Link
            to="/design-ideas"
            className="hover:text-[#e71c24] transition-colors"
          >
            The Design Journal
          </Link>
          <span>»</span>
          <span className="text-gray-400">{categoryData.title}</span>
        </div>
      </div>

      {/* Grid for Blog Cards */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {visibleBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              categoryId={currentCategorySlug}
            />
          ))}
        </div>
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="w-full flex justify-center pb-20">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="border-2 border-[#e71c24] text-[#e71c24] font-semibold py-3 px-8 rounded hover:bg-[#e71c24] hover:text-white transition-colors duration-300"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default DesignIdea;
