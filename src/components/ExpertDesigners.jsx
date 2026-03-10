import React from 'react';
import { expertDesigners } from '../data/designersData';

const LocationIcon = () => (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0C2.68629 0 0 2.68629 0 6C0 10.5 6 14 6 14C6 14 12 10.5 12 6C12 2.68629 9.31371 0 6 0ZM6 8.5C4.61929 8.5 3.5 7.38071 3.5 6C3.5 4.61929 4.61929 3.5 6 3.5C7.38071 3.5 8.5 4.61929 8.5 6C8.5 7.38071 7.38071 8.5 6 8.5Z" fill="#7b7b7b" />
    </svg>
);

const DesignerCard = ({ designer }) => {
    return (
        <div className="flex flex-col group cursor-pointer w-full">
            {/* Image Container */}
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-[#f8f8f8] mb-4">
                <img
                    src={designer.img}
                    alt={designer.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Info */}
            <div className="flex flex-col px-1">
                <h3 className="text-[18px] font-bold text-[#212529] mb-1.5">{designer.name}</h3>

                <div className="flex items-center gap-1.5 mb-4">
                    <LocationIcon />
                    <span className="text-[12px] text-[#7b7b7b] uppercase tracking-wider">{designer.location}</span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                        <span className="text-[14px] font-bold text-[#212529] leading-tight">{designer.stats.projects}</span>
                        <span className="text-[9px] font-bold text-[#7b7b7b] uppercase tracking-wider leading-tight">COMPLETED<br />PROJECTS</span>
                    </div>

                    <div className="w-px h-8 bg-[#e0e0e0]" />

                    <div className="flex flex-col">
                        <span className="text-[14px] font-bold text-[#212529] leading-tight">{designer.stats.experience}</span>
                        <span className="text-[9px] font-bold text-[#7b7b7b] uppercase tracking-wider leading-tight">YEARS<br />EXPERIENCE</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExpertDesigners = ({ title = "Meet Our Expert Designers:", subtitle = "The Minds Behind the Magic" }) => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">

                <div className="text-center mb-12">
                    <h2 className="text-[32px] md:text-[38px] font-normal text-[#212529] leading-tight text-center flex flex-col items-center">
                        {title}
                        {subtitle && (
                            <span className="text-[#555] font-light mt-1 text-[28px] md:text-[32px]">{subtitle}</span>
                        )}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
                    {expertDesigners.map((designer) => (
                        <DesignerCard key={designer.id} designer={designer} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ExpertDesigners;
