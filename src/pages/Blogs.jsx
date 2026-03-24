import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import HorizontalBlogCard from '../components/HorizontalBlogCard';
import EndToEndSolutions from '../components/EndToEndSolutions';
import PromoBanner from '../components/PromoBanner';

// Define the tabs and which category slugs they display
const filterTabs = [
    {
        displayName: "The Design Journal",
        categories: "ALL"
    },
    {
        displayName: "Home Decor Ideas",
        categories: ["home-decor-trends"]
    },
    {
        displayName: "Interior Design Buying Guide",
        categories: ["modular-kitchen-design-ideas", "wardrobe-design-ideas"]
    },
    {
        displayName: "Interiors By Leonex Interio",
        categories: ["home-interior-design-ideas"]
    },
    {
        displayName: "Interior Design Tips",
        categories: ["bedroom-design-ideas", "bathroom-design-ideas", "living-room-interior-design-ideas"]
    }
];

const Blogs = () => {
    // State to track the currently active tab by its displayName
    const [activeTab, setActiveTab] = useState("The Design Journal");

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter the categories based on the active tab
    const getFilteredCategories = () => {
        const allCategories = Object.entries(blogData);

        // Find the configuration for the currently active tab
        const tabConfig = filterTabs.find(tab => tab.displayName === activeTab);

        if (!tabConfig || tabConfig.categories === "ALL") {
            return allCategories;
        }

        // Filter the object entries where the slug (key) is in the tab's categories array
        return allCategories.filter(([slug]) => tabConfig.categories.includes(slug));
    };

    const categoriesToRender = getFilteredCategories();

    return (
        <div className="bg-transparent min-h-screen pt-8">
            {/* Top Sub-Navigation Filter */}
            <div className="border-b border-gray-200 mb-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <ul className="flex items-center gap-8 overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide text-sm font-medium text-gray-500">
                        {filterTabs.map((tab) => (
                            <li key={tab.displayName}>
                                <button
                                    onClick={() => setActiveTab(tab.displayName)}
                                    className={`transition-colors relative pb-4 tracking-wide font-medium
                                        ${activeTab === tab.displayName
                                            ? "text-[#e0b855] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:bg-[#e0b855]"
                                            : "hover:text-[#e0b855]"
                                        }`}
                                >
                                    {tab.displayName}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
                <div className="flex flex-col gap-16">
                    {/* Map through filtered categories */}
                    {categoriesToRender.length > 0 ? (
                        categoriesToRender.map(([slug, categoryData]) => (
                            <div key={slug} className="group">
                                {/* Category Subheading */}
                                <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b-2 border-gray-100 pb-2">
                                    {categoryData.title}
                                </h2>

                                {/* List of horizontal blogs within this category */}
                                <div className="flex flex-col">
                                    {categoryData.blogs.map((blog) => (
                                        <HorizontalBlogCard
                                            key={blog.id}
                                            blog={blog}
                                            categoryId={slug}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 text-gray-500">
                            No articles found for this category.
                        </div>
                    )}
                </div>
            </div>

            {/* Added Promotional Block Sections */}
            <EndToEndSolutions />
            <PromoBanner />
        </div>
    );
};

export default Blogs;
