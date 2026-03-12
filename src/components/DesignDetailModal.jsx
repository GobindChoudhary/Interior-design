import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { scrollToForm } from '../utils/navigationUtils';

const DesignDetailModal = ({ item, onClose, onNext, onPrev, onSelectItem }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();

  if (!item) return null;

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this design: ${item.name}`;
    
    if (navigator.share && platform === 'native') {
      navigator.share({ title: item.name, text, url });
    } else {
      // Mock share/copy
      navigator.clipboard.writeText(url);
      alert(`${platform.charAt(0).toUpperCase() + platform.slice(1)}: Link copied to clipboard!`);
    }
  };

  const handleBookSession = () => {
    onClose();
    setTimeout(() => {
      scrollToForm(navigate);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-[#333] w-full max-w-[1280px] h-full max-h-[90vh] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors z-[110]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT COLUMN: Main Image Display */}
        <div className="md:w-3/5 bg-[#222] relative flex items-center justify-center group">
          <img 
            src={item.img} 
            alt={item.name} 
            className="w-full h-full object-contain"
          />
          
          {/* Internal Navigation Arrows */}
          <button 
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          >
            ‹
          </button>
          <button 
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          >
            ›
          </button>

          {/* WhatsApp Floating Icon (as per image) */}
          <div className="absolute bottom-6 right-6">
            <a href="#" className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolled details */}
        <div className="md:w-2/5 bg-white p-8 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col h-full">
            
            {/* Header info */}
            <div>
              <h2 className="text-[22px] font-bold text-[#212529] mb-2 leading-tight">
                {item.name}
              </h2>
              <p className="text-[13px] text-gray-500 mb-6 flex items-center gap-1">
                {item.description} <span className="text-[#e71c24] font-bold cursor-pointer hover:underline ml-1">More</span>
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Layout</p>
                  <p className="text-[14px] font-medium text-gray-800">{item.layout}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Dimension</p>
                  <p className="text-[14px] font-medium text-gray-800">{item.dimension}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Colour</p>
                  <p className="text-[14px] font-medium text-gray-800">{item.colour}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Material & Finish Details</p>
                  <p className="text-[14px] font-medium text-gray-800 leading-tight">{item.material}</p>
                </div>
              </div>

              {/* Badge strip (Warranty, Delivery, etc.) */}
              <div className="flex items-center justify-between py-6 border-t border-b border-gray-100 mb-8">
                <div className="flex flex-col items-center text-center px-2">
                  <div className="w-10 h-10 mb-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#e71c24" strokeWidth="1.5"><path d="M12 2l3 6 6 1-4.5 4.5L17.5 20l-5.5-3-5.5 3 1-6.5L3 9l6-1z" /></svg>
                  </div>
                  <span className="text-[10px] text-gray-500 leading-tight">Flat 10 year warranty</span>
                </div>
                <div className="flex flex-col items-center text-center px-2 border-l border-gray-100">
                  <div className="w-10 h-10 mb-2 flex items-center justify-center font-bold text-[#e71c24] border-2 border-[#e71c24] rounded-md text-sm">45</div>
                  <span className="text-[10px] text-gray-500 leading-tight">45-days delivery*</span>
                </div>
                <div className="flex flex-col items-center text-center px-2 border-l border-gray-100">
                  <div className="w-10 h-10 mb-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#e71c24" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                  </div>
                  <span className="text-[10px] text-gray-500 leading-tight">600+ design experts</span>
                </div>
                <div className="flex flex-col items-center text-center px-2 border-l border-gray-100">
                  <div className="w-10 h-10 mb-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#e71c24" strokeWidth="1.5"><path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" /><path d="M14 2v6h6M12 18l-2-2 2-2M15 16h-5" /></svg>
                  </div>
                  <span className="text-[10px] text-gray-500 leading-tight">Post-installation service</span>
                </div>
              </div>

              {/* Main CTAs */}
              <div className="space-y-4 mb-8">
                <button 
                  onClick={handleBookSession}
                  className="w-full bg-[#e71c24] hover:bg-[#c41920] text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-red-100 uppercase tracking-wider text-[14px]"
                >
                  Book Free Design Session
                </button>
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-full border font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 uppercase tracking-tight text-[14px] ${isWishlisted ? 'border-[#e71c24] text-[#e71c24] bg-red-50' : 'border-gray-300 text-gray-600 hover:border-[#e71c24] hover:text-[#e71c24]'}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                  {isWishlisted ? 'Wishlisted' : 'Wishlist'}
                </button>
              </div>

              {/* Social Sharing */}
              <div className="mb-10">
                <p className="text-[13px] font-bold text-gray-800 mb-4">Share this Design</p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="w-10 h-10 rounded-full bg-[#f8f8f8] hover:bg-blue-50 text-blue-600 flex items-center justify-center transition-colors"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                  </button>
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="w-10 h-10 rounded-full bg-[#f8f8f8] hover:bg-sky-50 text-sky-500 flex items-center justify-center transition-colors"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
                  </button>
                  <button 
                    onClick={() => handleShare('pinterest')}
                    className="w-10 h-10 rounded-full bg-[#f8f8f8] hover:bg-red-50 text-red-600 flex items-center justify-center transition-colors"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12c0 4.59 3.29 8.42 7.5 9.21v-2a6 6 0 01-2-1.29l1.41-1.42A4 4 0 1012 6c-2.21 0-4 1.79-4 4h2l-3 3-3-3h2c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6v2a8 8 0 110-16z" /></svg>
                  </button>
                  <button 
                    onClick={() => handleShare('whatsapp')}
                    className="w-10 h-10 rounded-full bg-[#f8f8f8] hover:bg-green-50 text-green-500 flex items-center justify-center transition-colors"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.03 5A9.97 9.97 0 002.05 15c0 1.9.46 3.7 1.28 5.3L2 22l1.9-1.28A9.87 9.87 0 0012.03 21c5.52 0 10-4.48 10-10S17.55 5 12.03 5z" /></svg>
                  </button>
                </div>
              </div>

              {/* Related Designs */}
              <div className="pb-8">
                <p className="text-[14px] font-bold text-gray-800 mb-6">Related Designs</p>
                <div className="grid grid-cols-2 gap-4">
                  {item.relatedItems?.map((rel, i) => (
                    <div 
                      key={i} 
                      onClick={() => onSelectItem && onSelectItem(rel)}
                      className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all"
                    >
                      <img src={rel} alt="Related" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DesignDetailModal;
