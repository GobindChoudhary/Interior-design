import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogData } from "../data/blogData";
import EndToEndSolutions from "../components/EndToEndSolutions";
import PromoBanner from "../components/PromoBanner";

const BlogPost = () => {
  const { categoryId, blogId } = useParams();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId, blogId]);

  // Find the category and the specific blog
  const categoryData = blogData[categoryId];

  // If category doesn't exist, show 404
  if (!categoryData) {
    return (
      <div className="bg-white min-h-screen py-20 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Category Not Found
        </h1>
        <Link
          to="/design-ideas/modular-kitchen-design-ideas"
          className="bg-[#e71c24] text-white px-6 py-2 rounded font-semibold hover:bg-[#c41920]"
        >
          Return to Kitchen Ideas
        </Link>
      </div>
    );
  }

  // Find the specific blog by ID
  const blog = categoryData.blogs.find((b) => b.id === parseInt(blogId));

  // If blog doesn't exist in that category, show 404
  if (!blog) {
    return (
      <div className="bg-white min-h-screen py-20 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-gray-500 mb-8">
          The post you are looking for might have been moved or deleted.
        </p>
        <Link
          to={`/design-ideas/${categoryId}`}
          className="bg-[#e71c24] text-white px-6 py-2 rounded font-semibold hover:bg-[#c41920]"
        >
          Back to {categoryData.title}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20 pt-10">
      {/* Header / Breadcrumb Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 mb-10 text-center">
        {/* Breadcrumb text */}
        <div className="flex justify-center flex-wrap items-center text-sm text-gray-400 gap-2 mb-8">
          <Link
            to="/design-ideas"
            className="hover:text-[#e71c24] transition-colors"
          >
            The Design Journal
          </Link>
          <span>»</span>
          <Link
            to={`/design-ideas/${categoryId}`}
            className="hover:text-[#e71c24] transition-colors"
          >
            {categoryData.title}
          </Link>
          <span>»</span>
          <span className="text-gray-500 truncate max-w-[200px] sm:max-w-xs">
            {blog.title}
          </span>
        </div>

        <p className="text-[11px] font-semibold text-gray-500 tracking-wider mb-4 uppercase">
          in <span className="text-[#e71c24]">{blog.category}</span> -{" "}
          {blog.date} - {blog.readTime}
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold text-[#1a1a1a] mb-6 tracking-tight leading-tight">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-500 italic mb-8">
          by{" "}
          <span className="uppercase text-gray-700 not-italic font-medium">
            {blog.author}
          </span>
        </p>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mb-16">
        <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 font-serif text-lg text-gray-700 leading-relaxed space-y-8">
        {blog.content ? (
          blog.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
        ) : (
          <p>{blog.snippet}</p> // Fallback if no full content
        )}
      </div>

      {/* Social Share / Footer area */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 mb-20">
        <Link
          to={`/design-ideas/${categoryId}`}
          className="text-sm font-semibold tracking-widest text-[#e71c24] border border-[#e71c24] px-6 py-2 rounded hover:bg-[#e71c24] hover:text-white transition-colors duration-300"
        >
          BACK TO IDEAS
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mr-2">
            Share:
          </span>
          <button
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                "_blank",
                "width=600,height=400",
              )
            }
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors"
            title="Share on Facebook"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`,
                "_blank",
                "width=600,height=400",
              )
            }
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"
            title="Share on Twitter"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </button>
          <button
            onClick={() =>
              window.open(
                `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(blog.image || "")}&description=${encodeURIComponent(blog.title)}`,
                "_blank",
                "width=600,height=400",
              )
            }
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#E60023] hover:text-white transition-colors"
            title="Save to Pinterest"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Added Promotional Block Sections */}
      <EndToEndSolutions />
      <PromoBanner />
    </div>
  );
};

export default BlogPost;
