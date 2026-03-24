import React from 'react';
import { Link } from 'react-router-dom';
import { guarantees } from '../data/homeData';
import { imageAssets } from '../data/imageAssets';

const guaranteeIcons = [
    <svg key={0} width="32" height="32" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L6 10V20C6 28 12 35 20 37C28 35 34 28 34 20V10L20 4Z" fill="none" stroke="#e0b855" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13 20L17 24L27 14" stroke="#e0b855" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key={1} width="32" height="32" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="26" rx="2" stroke="#e0b855" strokeWidth="1.5" fill="none" />
        <line x1="4" y1="18" x2="36" y2="18" stroke="#e0b855" strokeWidth="1.5" />
        <text x="20" y="30" textAnchor="middle" fontSize="10" fontWeight="900" fill="#e0b855" fontFamily="Cinzel">45</text>
    </svg>,
    <svg key={2} width="32" height="32" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="7" stroke="#e0b855" strokeWidth="1.5" fill="none" />
        <path d="M10 32C10 26 14 22 20 22C26 22 30 26 30 32" stroke="#e0b855" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>,
    <svg key={3} width="32" height="32" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="5" width="32" height="30" rx="2" stroke="#e0b855" strokeWidth="1.5" fill="none" />
        <path d="M12 20L18 26L28 14" stroke="#e0b855" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
];

export default function CTABanner() {
    return (
        <section className="relative overflow-hidden bg-[#1b1c19]">
            {/* Cinematic Background */}
            <div className="absolute inset-0">
                <img 
                    src={imageAssets.luxuryInterior} 
                    alt="Luxury Interior" 
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c19] via-transparent to-[#1b1c19]/60" />
            </div>

            <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48 flex flex-col items-center text-center">
                <span className="uppercase tracking-[0.5em] text-[10px] md:text-[12px] font-bold text-[#e0b855] mb-8 block">
                    Your Vision, Our Craft
                </span>
                <h2 className="text-5xl md:text-8xl font-cinzel font-black leading-[0.9] tracking-tighter text-white mb-12 max-w-4xl">
                    Transcend the <br />
                    <span className="italic font-normal serif text-[#e0b855] opacity-90">Ordinary.</span>
                </h2>
                <div className="w-24 h-px bg-[#e0b855] mb-12" />
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-16 max-w-2xl italic">
                    "Connect with our master architects to translate your aesthetic desires into a living masterpiece. Complimentary consultation awaits."
                </p>
                <Link 
                    to="/price-calculator/home-interior" 
                    className="group flex items-center gap-6 bg-[#e0b855] hover:bg-[#c4a14a] text-white px-12 py-5 font-black uppercase tracking-[0.3em] text-[11px] transition-all shadow-2xl shadow-gold-500/20"
                >
                    Consult an Architect
                    <span className="w-12 h-px bg-white group-hover:w-20 transition-all duration-500"></span>
                </Link>
            </div>

            {/* Premium Guarantee strip */}
            <div className="relative border-t border-white/5 bg-[#1b1c19]/80 backdrop-blur-sm">
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4">
                    {guarantees.map((g, i) => (
                        <div
                            key={i}
                            className={`flex items-start gap-6 px-8 py-10 transition-all duration-500 hover:bg-white/5 ${i < 3 ? "lg:border-r lg:border-white/5" : ""}`}
                        >
                            <div className="flex-shrink-0 opacity-80 group-hover:opacity-100">{guaranteeIcons[i]}</div>
                            <div>
                                <p className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-2 leading-tight">
                                    {g.label}
                                </p>
                                <p className="text-[12px] text-white/40 font-light leading-relaxed">
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
