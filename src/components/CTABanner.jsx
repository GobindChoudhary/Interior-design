import React from 'react';
import { guarantees } from '../data/homeData';

const guaranteeIcons = [
    <svg key={0} width="36" height="36" viewBox="0 0 40 40" fill="none">
        <path
            d="M20 4L6 10V20C6 28 12 35 20 37C28 35 34 28 34 20V10L20 4Z"
            fill="none"
            stroke="#e71c24"
            strokeWidth="2"
            strokeLinejoin="round"
        />
        <path
            d="M13 20L17 24L27 14"
            stroke="#e71c24"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>,
    <svg key={1} width="36" height="36" viewBox="0 0 40 40" fill="none">
        <rect
            x="4"
            y="8"
            width="32"
            height="26"
            rx="3"
            stroke="#e71c24"
            strokeWidth="2"
            fill="none"
        />
        <line x1="4" y1="16" x2="36" y2="16" stroke="#e71c24" strokeWidth="2" />
        <text
            x="20"
            y="29"
            textAnchor="middle"
            fontSize="10"
            fontWeight="900"
            fill="#e71c24"
            fontFamily="Lato"
        >
            45
        </text>
    </svg>,
    <svg key={2} width="36" height="36" viewBox="0 0 40 40" fill="none">
        <circle
            cx="14"
            cy="14"
            r="7"
            stroke="#e71c24"
            strokeWidth="2"
            fill="none"
        />
        <circle
            cx="27"
            cy="14"
            r="7"
            stroke="#e71c24"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
        />
        <path
            d="M4 36C4 29 8 25 14 25"
            stroke="#e71c24"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
        />
        <path
            d="M14 25C22 25 36 28 36 36"
            stroke="#e71c24"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
        />
    </svg>,
    <svg key={3} width="36" height="36" viewBox="0 0 40 40" fill="none">
        <rect
            x="4"
            y="5"
            width="32"
            height="30"
            rx="3"
            stroke="#e71c24"
            strokeWidth="2"
            fill="none"
        />
        <path
            d="M12 22L16 18L20 22L28 14"
            stroke="#e71c24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>,
];

export default function CTABanner() {
    return (
        <section className="bg-[#f8f8f8]">
            <div className="max-w-[1400px] mx-auto px-8 py-14">
                <h2 className="text-[26px] font-bold text-[#212529] leading-tight mb-3">
                    Confused Between Styles,
                    <br />
                    Layouts, and Costs?
                </h2>
                <p className="text-[14px] text-[#7b7b7b] mb-6 max-w-md">
                    Meet a designer who'll bring it all together—free.
                </p>
                <button className="bg-[#e71c24] hover:bg-[#c41920] text-white font-bold text-[14px] px-8 py-3 rounded-[4px] uppercase tracking-wide transition-colors">
                    Meet a Designer
                </button>
            </div>
            {/* Guarantee strip */}
            <div className="bg-white" style={{ borderTop: "1px solid #f0f0f0" }}>
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4">
                    {guarantees.map((g, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 px-6 py-6 hover:bg-[#f8f8f8] transition-colors"
                            style={{ borderRight: i < 3 ? "1px solid #f0f0f0" : "none" }}
                        >
                            <div className="flex-shrink-0 mt-0.5">{guaranteeIcons[i]}</div>
                            <div>
                                <p className="text-[13px] font-bold text-[#212529] mb-1">
                                    {g.label}
                                </p>
                                <p className="text-[12px] text-[#7b7b7b] leading-relaxed">
                                    {g.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
