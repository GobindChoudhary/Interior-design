import React from 'react';

// Reusable SVG Icon Wrapper to enforce size and styling consistency
const IconWrapper = ({ children }) => (
    <div className="w-[80px] h-[80px] flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
        {children}
    </div>
);

// SVG replicas for the "End-to-end home interior solutions" section
const ModularKitchenIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outline */}
        <path d="M12 40H68M12 60H68M12 40V60M68 40V60" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="16" y="24" width="48" height="16" fill="white" stroke="#212529" strokeWidth="2.5" />
        <path d="M30 46H50M30 54H50" stroke="#212529" strokeWidth="2.5" strokeLinecap="round" />
        {/* Hood (Red accent) */}
        <path d="M40 8L28 24H52L40 8Z" fill="white" stroke="#e71c24" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
);

const WardrobeIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="16" width="40" height="48" fill="white" stroke="#212529" strokeWidth="2.5" />
        <line x1="40" y1="16" x2="40" y2="64" stroke="#212529" strokeWidth="2.5" />
        <line x1="20" y1="36" x2="60" y2="36" stroke="#212529" strokeWidth="2.5" />
        {/* Handles (Red) */}
        <rect x="34" y="40" width="2" height="8" fill="#e71c24" />
        <rect x="44" y="40" width="2" height="8" fill="#e71c24" />
    </svg>
);

const CrockeryIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="16" width="40" height="48" fill="white" stroke="#212529" strokeWidth="2.5" />
        <line x1="20" y1="32" x2="60" y2="32" stroke="#212529" strokeWidth="2.5" />
        <line x1="20" y1="48" x2="60" y2="48" stroke="#212529" strokeWidth="2.5" />
        <line x1="40" y1="16" x2="40" y2="32" stroke="#212529" strokeWidth="2.5" />
        {/* Plates/Cups */}
        <circle cx="30" cy="24" r="4" fill="white" stroke="#212529" strokeWidth="2" />
        <path d="M26 44C26 44 26 48 30 48C34 48 34 44 34 44H26Z" fill="#e71c24" />
        <rect x="44" y="20" width="8" height="12" fill="white" stroke="#212529" strokeWidth="2" />
    </svg>
);

const SpaceSavingIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 60V36H64V60" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="36" y="24" width="8" height="12" fill="#e71c24" />
        <path d="M28 36V16H52V36" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" fill="white" />
        <line x1="20" y1="36" x2="20" y2="28" stroke="#212529" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="60" y1="36" x2="60" y2="28" stroke="#212529" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

const TVUnitIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="20" width="32" height="20" fill="white" stroke="#212529" strokeWidth="2.5" rx="2" />
        <rect x="16" y="44" width="48" height="16" fill="white" stroke="#212529" strokeWidth="2.5" />
        <line x1="32" y1="44" x2="32" y2="60" stroke="#212529" strokeWidth="2.5" />
        <line x1="48" y1="44" x2="48" y2="60" stroke="#212529" strokeWidth="2.5" />
        {/* Detail Red */}
        <line x1="22" y1="52" x2="26" y2="52" stroke="#e71c24" strokeWidth="2" strokeLinecap="round" />
        <line x1="54" y1="52" x2="58" y2="52" stroke="#e71c24" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const StudyIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Desk */}
        <path d="M44 40H68V44H56V60M44 44V60M68 60V52" stroke="#212529" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Drawers */}
        <rect x="44" y="44" width="12" height="8" fill="white" stroke="#212529" strokeWidth="2" />
        <rect x="44" y="52" width="12" height="8" fill="white" stroke="#212529" strokeWidth="2" />
        {/* Chair */}
        <rect x="24" y="24" width="12" height="16" fill="white" stroke="#212529" strokeWidth="2.5" />
        <path d="M20 40H36M24 40V60M32 40V60M28 50H44" stroke="#212529" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Laptop */}
        <path d="M48 40L52 32H60L56 40" fill="white" stroke="#e71c24" strokeWidth="2" strokeLinejoin="round" />
    </svg>
);

const FalseCeilingIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 28L28 40H52L64 28" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
        <line x1="16" y1="28" x2="64" y2="28" stroke="#212529" strokeWidth="2.5" strokeLinecap="round" />
        {/* Lights hanging down */}
        <line x1="32" y1="40" x2="32" y2="48" stroke="#212529" strokeWidth="2" />
        <line x1="48" y1="40" x2="48" y2="48" stroke="#212529" strokeWidth="2" />
        <path d="M30 48H34L36 54H28L30 48Z" fill="white" stroke="#e71c24" strokeWidth="2" strokeLinejoin="round" />
        <path d="M46 48H50L52 54H44L46 48Z" fill="white" stroke="#e71c24" strokeWidth="2" strokeLinejoin="round" />
    </svg>
);

const LightIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="16" x2="40" y2="28" stroke="#212529" strokeWidth="2.5" />
        <path d="M36 28H44L48 40H32L36 28Z" fill="white" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M24 52C24 44 32 40 40 40C48 40 56 44 56 52H24Z" fill="white" stroke="#e71c24" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M36 52V56C36 58 38 60 40 60C42 60 44 58 44 56V52" stroke="#212529" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

const WallpaperIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="24" width="32" height="32" fill="white" stroke="#212529" strokeWidth="2.5" />
        {/* Peeling effect */}
        <path d="M24 24L40 40H24V24Z" fill="#e71c24" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Roll */}
        <rect x="16" y="16" width="48" height="8" rx="2" fill="white" stroke="#212529" strokeWidth="2.5" />
        <circle cx="34" cy="46" r="2" fill="#212529" />
        <circle cx="46" cy="34" r="2" fill="#212529" />
        <circle cx="46" cy="46" r="2" fill="#212529" />
    </svg>
);

const WallPaintIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Roller */}
        <rect x="24" y="20" width="32" height="12" rx="4" fill="white" stroke="#212529" strokeWidth="2.5" />
        <path d="M20 26H16V44H36V52" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
        {/* Handle */}
        <rect x="32" y="52" width="8" height="16" rx="2" fill="white" stroke="#e71c24" strokeWidth="2.5" />
        {/* Paint drop */}
        <path d="M52 32C52 32 52 40 56 40C60 40 60 36 60 36" stroke="#212529" strokeWidth="2" strokeLinecap="round" />
        <circle cx="56" cy="46" r="2" fill="#e71c24" />
    </svg>
);

const BathroomIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shower head */}
        <path d="M24 16V20H36V16H24Z" fill="white" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" />
        <line x1="30" y1="20" x2="30" y2="28" stroke="#212529" strokeWidth="2.5" />
        <path d="M24 28H36L38 32H22L24 28Z" fill="#e71c24" stroke="#212529" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Shower enclosure */}
        <path d="M16 16V64M44 64V36H64" stroke="#212529" strokeWidth="2.5" fill="none" />
        <line x1="40" y1="28" x2="40" y2="64" stroke="#212529" strokeWidth="2.5" />
        {/* Water drops */}
        <circle cx="28" cy="40" r="1.5" fill="#212529" />
        <circle cx="32" cy="44" r="1.5" fill="#212529" />
        <circle cx="28" cy="48" r="1.5" fill="#212529" />
    </svg>
);

const PoojaIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Base */}
        <rect x="24" y="56" width="32" height="8" fill="white" stroke="#212529" strokeWidth="2.5" />
        {/* Mandir outline */}
        <path d="M28 56V36L40 24L52 36V56" stroke="#212529" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="30" y="44" width="20" height="12" fill="white" stroke="#212529" strokeWidth="2.5" />
        {/* Temple Top / Bells */}
        <path d="M40 16L36 24H44L40 16Z" fill="#e71c24" />
        <circle cx="28" cy="40" r="2" fill="#e71c24" />
        <circle cx="52" cy="40" r="2" fill="#e71c24" />
    </svg>
);

const FoyerIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cabinet */}
        <rect x="20" y="40" width="20" height="24" fill="white" stroke="#212529" strokeWidth="2.5" />
        <rect x="20" y="40" width="20" height="8" fill="white" stroke="#212529" strokeWidth="2.5" />
        {/* Coat Rack/Mirror combo */}
        <rect x="44" y="16" width="16" height="48" fill="white" stroke="#212529" strokeWidth="2.5" />
        <circle cx="52" cy="24" r="2" fill="#e71c24" />
        <circle cx="52" cy="32" r="2" fill="#e71c24" />
        <circle cx="52" cy="40" r="2" fill="#e71c24" />
        {/* Planter */}
        <path d="M26 32H34L32 40H28L26 32Z" fill="white" stroke="#e71c24" strokeWidth="2" strokeLinejoin="round" />
        <path d="M30 32C30 32 28 24 30 20C32 20 30 32 30 32Z" stroke="#212529" strokeWidth="1.5" />
    </svg>
);

const MovableIcon = () => (
    <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dining Chair */}
        <path d="M24 24H32V40H48V48M48 40V60M32 40V60" stroke="#212529" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="28" y1="52" x2="48" y2="52" stroke="#212529" strokeWidth="2.5" />
        {/* End Table */}
        <rect x="52" y="32" width="16" height="4" fill="white" stroke="#e71c24" strokeWidth="2" />
        <line x1="56" y1="36" x2="56" y2="60" stroke="#212529" strokeWidth="2.5" />
        <line x1="64" y1="36" x2="64" y2="60" stroke="#212529" strokeWidth="2.5" />
    </svg>
);

const solutions = [
    { Icon: ModularKitchenIcon, label: 'Modular Kitchen' },
    { Icon: WardrobeIcon, label: 'Storage and wardrobe' },
    { Icon: CrockeryIcon, label: 'Crockery Units' },
    { Icon: SpaceSavingIcon, label: 'Space Saving Furniture' },
    { Icon: TVUnitIcon, label: 'TV Units' },
    { Icon: StudyIcon, label: 'Study Tables' },
    { Icon: FalseCeilingIcon, label: 'False Ceiling' },
    { Icon: LightIcon, label: 'Light' },
    { Icon: WallpaperIcon, label: 'Wallpaper' },
    { Icon: WallPaintIcon, label: 'Wall Paint' },
    { Icon: BathroomIcon, label: 'Bathroom' },
    { Icon: PoojaIcon, label: 'Pooja Units' },
    { Icon: FoyerIcon, label: 'Foyer Designs' },
    { Icon: MovableIcon, label: 'Movable furniture' },
];

export default function EndToEndSolutions() {
    return (
        <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#212529] mb-16">
                    End-to-end home interior solutions
                </h2>

                {/* Responsive Grid matching the HomeLane aesthetic */}
                <div className="flex flex-wrap items-start justify-center gap-y-12 gap-x-6 md:gap-x-12 lg:gap-x-16 max-w-5xl mx-auto">
                    {solutions.map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-3 cursor-pointer group w-[100px] sm:w-[130px]"
                        >
                            {/* Icon Container */}
                            <IconWrapper>
                                <item.Icon />
                            </IconWrapper>

                            {/* Label */}
                            <p className="text-[13px] md:text-[14px] font-medium text-gray-700 text-center leading-snug group-hover:text-[#e71c24] transition-colors">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
