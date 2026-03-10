import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogData } from '../data/blogData';
import EndToEndSolutions from '../components/EndToEndSolutions';
import PromoBanner from '../components/PromoBanner';

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
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Category Not Found</h1>
                <Link to="/design-ideas/modular-kitchen-design-ideas" className="bg-[#e71c24] text-white px-6 py-2 rounded font-semibold hover:bg-[#c41920]">
                    Return to Kitchen Ideas
                </Link>
            </div>
        );
    }

    // Find the specific blog by ID
    const blog = categoryData.blogs.find(b => b.id === parseInt(blogId));

    // If blog doesn't exist in that category, show 404
    if (!blog) {
        return (
            <div className="bg-white min-h-screen py-20 text-center">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Blog Post Not Found</h1>
                <p className="text-gray-500 mb-8">The post you are looking for might have been moved or deleted.</p>
                <Link to={`/design-ideas/${categoryId}`} className="bg-[#e71c24] text-white px-6 py-2 rounded font-semibold hover:bg-[#c41920]">
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
                    <Link to="/design-ideas" className="hover:text-[#e71c24] transition-colors">The Design Journal</Link>
                    <span>»</span>
                    <Link to={`/design-ideas/${categoryId}`} className="hover:text-[#e71c24] transition-colors">{categoryData.title}</Link>
                    <span>»</span>
                    <span className="text-gray-500 truncate max-w-[200px] sm:max-w-xs">{blog.title}</span>
                </div>

                <p className="text-[11px] font-semibold text-gray-500 tracking-wider mb-4 uppercase">
                    in <span className="text-[#e71c24]">{blog.category}</span> - {blog.date} - {blog.readTime}
                </p>
                <h1 className="text-3xl md:text-5xl font-semibold text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                    {blog.title}
                </h1>
                <p className="text-sm text-gray-500 italic mb-8">
                    by <span className="uppercase text-gray-700 not-italic font-medium">{blog.author}</span>
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
                    blog.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))
                ) : (
                    <p>{blog.snippet}</p> // Fallback if no full content
                )}
            </div>

            {/* Social Share / Footer area */}
            <div className="max-w-3xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 mb-20">
                <Link to={`/design-ideas/${categoryId}`} className="text-sm font-semibold tracking-widest text-[#e71c24] border border-[#e71c24] px-6 py-2 rounded hover:bg-[#e71c24] hover:text-white transition-colors duration-300">
                    BACK TO IDEAS
                </Link>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mr-2">Share:</span>
                    <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#E60023] hover:text-white transition-colors"><i className="fab fa-pinterest-p"></i></a>
                </div>
            </div>

            {/* Added Promotional Block Sections */}
            <EndToEndSolutions />
            <PromoBanner />
        </div>
    );
};

export default BlogPost;
