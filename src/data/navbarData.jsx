import React from "react";

export const galleryItems = [
    {
        name: "Home Interiors",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
            >
                <path
                    d="M3 9.5L12 3l9 6.5"
                    stroke="#103a68"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5"
                    stroke="#103a68"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M9 21V12h6v9"
                    stroke="#e71c24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        name: "Modular Kitchen",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
            >
                <rect x="3" y="15" width="18" height="6" rx="0.5" stroke="#103a68" />
                <path d="M3 15h18" stroke="#103a68" />
                <rect x="4" y="5" width="7" height="6" rx="0.5" stroke="#e71c24" />
                <rect x="13" y="5" width="7" height="6" rx="0.5" stroke="#e71c24" />
            </svg>
        ),
    },
    {
        name: "Living Room",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
            >
                <path d="M3 13v4a1 1 0 001 1h16a1 1 0 001-1v-4" stroke="#103a68" />
                <path d="M3 13V9a1 1 0 011-1h16a1 1 0 011 1v4" stroke="#103a68" />
                <path d="M6 18v2m12-2v2" stroke="#103a68" strokeLinecap="round" />
                <rect x="6" y="10" width="4" height="3" rx="0.5" stroke="#e71c24" />
                <rect x="14" y="10" width="4" height="3" rx="0.5" stroke="#e71c24" />
            </svg>
        ),
    },
    {
        name: "Bedroom",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
            >
                <rect x="2" y="14" width="20" height="4" rx="0.5" stroke="#103a68" />
                <path d="M4 14V8a1 1 0 011-1h14a1 1 0 011 1v6" stroke="#103a68" />
                <path d="M4 18v2m16-2v2" stroke="#103a68" strokeLinecap="round" />
                <rect x="7" y="10" width="4" height="3" rx="0.5" stroke="#e71c24" />
                <rect x="13" y="10" width="4" height="3" rx="0.5" stroke="#e71c24" />
            </svg>
        ),
    },
    {
        name: "Wardrobe",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
            >
                <rect x="5" y="3" width="14" height="18" rx="0.5" stroke="#103a68" />
                <line x1="12" y1="3" x2="12" y2="21" stroke="#103a68" />
                <line
                    x1="10"
                    y1="11"
                    x2="10"
                    y2="14"
                    stroke="#e71c24"
                    strokeLinecap="round"
                />
                <line
                    x1="14"
                    y1="11"
                    x2="14"
                    y2="14"
                    stroke="#e71c24"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
    {
        name: "Space Saving Furniture",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
            >
                <rect x="2" y="11" width="20" height="3" rx="0.5" stroke="#103a68" />
                <path d="M5 14v6m14-6v6" stroke="#103a68" strokeLinecap="round" />
                <path
                    d="M9 7L5 11m10-4l4 4H9"
                    stroke="#e71c24"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        name: "Home Office",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
            >
                <rect x="2" y="14" width="20" height="2" stroke="#103a68" />
                <path d="M4 16v6m16-6v6" stroke="#103a68" strokeLinecap="round" />
                <rect x="6" y="4" width="12" height="7" rx="0.5" stroke="#e71c24" />
                <path d="M10 11v3h4v-3" stroke="#e71c24" />
            </svg>
        ),
    },
    {
        name: "Bathroom",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
            >
                <path d="M3 13h18v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3z" stroke="#103a68" />
                <path d="M5 20l-1 2m15-2l1 2" stroke="#103a68" strokeLinecap="round" />
                <path
                    d="M7 13V5a1 1 0 011-1h2"
                    stroke="#e71c24"
                    strokeLinecap="round"
                />
                <circle cx="12" cy="4" r="1.5" fill="#e71c24" />
            </svg>
        ),
    },
];

export const navLinks = [
    { name: "Design Gallery", hasDropdown: true },
    { name: "Guides", hasDropdown: true },
    { name: "Cities", hasDropdown: true },
    { name: "Offerings", hasDropdown: true },
    { name: "Price Calculators", hasDropdown: true },
    { name: "More", hasDropdown: true },
];
