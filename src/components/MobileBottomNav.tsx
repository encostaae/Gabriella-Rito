import React, { useState } from 'react';
import { Home, Star } from 'lucide-react';
import { businessInfo } from '../data/clinicData';
import { createWhatsAppUrl } from '../utils/whatsapp';

export type NavTab = 'home' | 'services' | 'booking' | 'instagram' | 'whatsapp';

interface MobileBottomNavProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, onSelectTab }) => {
  const [touchTab, setTouchTab] = useState<NavTab | null>(null);

  const handleTouchStart = (tab: NavTab) => {
    setTouchTab(tab);
  };

  const handleTouchEnd = () => {
    // Keep color visible briefly after tap so the user clearly sees the authentic color feedback
    setTimeout(() => {
      setTouchTab(null);
    }, 450);
  };

  const isServicesHighlighted = activeTab === 'services' || touchTab === 'services';
  const isInstagramHighlighted = touchTab === 'instagram';
  const isWhatsAppHighlighted = touchTab === 'whatsapp';

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#D8C7B5]/95 backdrop-blur-xl border-t border-[#8A7768]/25 shadow-[0_-8px_24px_rgba(44,37,34,0.08)] pb-[calc(env(safe-area-inset-bottom,0px)+8px)] pt-2 select-none"
      aria-label="Navegação móvel principal"
    >
      {/* SVG Defs for Real Brand Gradients */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="instagram-real-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="25%" stopColor="#FD1D1D" />
            <stop offset="60%" stopColor="#E1306C" />
            <stop offset="100%" stopColor="#833AB4" />
          </linearGradient>
        </defs>
      </svg>

      <div className="grid grid-cols-5 items-center max-w-md mx-auto px-2 relative">
        {/* 1. INÍCIO */}
        <button
          onClick={() => {
            onSelectTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onTouchStart={() => handleTouchStart('home')}
          onTouchEnd={handleTouchEnd}
          className={`group flex flex-col items-center justify-center py-1 transition-all duration-200 active:scale-95 min-h-[48px] focus:outline-none ${
            activeTab === 'home' || touchTab === 'home'
              ? 'text-[#2C2522]'
              : 'text-[#7C6C61] hover:text-[#2C2522]'
          }`}
          aria-label="Ir para o Início"
        >
          <Home
            className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 group-active:scale-110 ${
              activeTab === 'home' ? 'stroke-[2.2]' : 'stroke-[1.8]'
            }`}
          />
          <span
            className={`text-[10px] tracking-wider uppercase mt-1 font-medium transition-colors duration-200 ${
              activeTab === 'home' ? 'font-semibold text-[#2C2522]' : ''
            }`}
          >
            Início
          </span>
          {activeTab === 'home' && (
            <span className="w-1 h-1 rounded-full bg-[#8A7768] mt-0.5" />
          )}
        </button>

        {/* 2. SERVIÇOS (A ESTRELA EM DOURADO) */}
        <button
          onClick={() => onSelectTab('services')}
          onTouchStart={() => handleTouchStart('services')}
          onTouchEnd={handleTouchEnd}
          className={`group flex flex-col items-center justify-center py-1 transition-all duration-200 active:scale-95 min-h-[48px] focus:outline-none ${
            isServicesHighlighted
              ? 'text-[#D4AF37]'
              : 'text-[#7C6C61] hover:text-[#D4AF37]'
          }`}
          aria-label="Ver Procedimentos e Serviços"
        >
          <Star
            className={`w-5 h-5 transition-all duration-200 group-hover:scale-110 group-active:scale-110 ${
              isServicesHighlighted
                ? 'text-[#D4AF37] fill-[#D4AF37] drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)] stroke-[1.8]'
                : 'text-[#7C6C61] group-hover:text-[#D4AF37] group-active:text-[#D4AF37] group-hover:fill-[#D4AF37] group-active:fill-[#D4AF37] group-hover:drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)] group-active:drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)] stroke-[1.8]'
            }`}
          />
          <span
            className={`text-[10px] tracking-wider uppercase mt-1 font-medium transition-colors duration-200 ${
              isServicesHighlighted
                ? 'text-[#B8922C] font-semibold'
                : 'group-hover:text-[#B8922C] group-active:text-[#B8922C]'
            }`}
          >
            Serviços
          </span>
          {activeTab === 'services' && (
            <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-0.5" />
          )}
        </button>

        {/* 3. AGENDAR (ELEVATED CIRCULAR GOLD/TAUPE BUTTON) */}
        <div className="flex flex-col items-center justify-center relative -top-3">
          <button
            onClick={() => onSelectTab('booking')}
            onTouchStart={() => handleTouchStart('booking')}
            onTouchEnd={handleTouchEnd}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#78614E] via-[#947D6A] to-[#C5A880] text-[#F7F4EF] shadow-[0_6px_20px_rgba(120,97,78,0.45)] border-2 border-[#F7F4EF] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#8A7768]"
            aria-label="Agendar Horário na Clínica"
          >
            <span className="font-serif text-lg font-light tracking-wide leading-none -mt-0.5">GR</span>
            <span className="text-[7px] tracking-widest uppercase font-semibold text-[#E9DED2] mt-0.5">Agendar</span>
          </button>
        </div>

        {/* 4. INSTAGRAM (COR REAL - GRADIENTE OFICIAL) */}
        <a
          href={businessInfo.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onTouchStart={() => handleTouchStart('instagram')}
          onTouchEnd={handleTouchEnd}
          className="group flex flex-col items-center justify-center py-1 transition-all duration-200 active:scale-95 min-h-[48px] text-[#7C6C61] focus:outline-none"
          aria-label="Acessar Instagram Oficial"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-5 h-5 transition-all duration-200 group-hover:scale-110 group-active:scale-110 ${
              isInstagramHighlighted
                ? 'drop-shadow-[0_2px_8px_rgba(225,48,108,0.55)]'
                : 'group-hover:drop-shadow-[0_2px_8px_rgba(225,48,108,0.55)] group-active:drop-shadow-[0_2px_8px_rgba(225,48,108,0.55)]'
            }`}
          >
            <rect
              width="20"
              height="20"
              x="2"
              y="2"
              rx="5"
              ry="5"
              className={`transition-all duration-200 ${
                isInstagramHighlighted
                  ? 'stroke-[url(#instagram-real-gradient)]'
                  : 'stroke-[#7C6C61] group-hover:stroke-[url(#instagram-real-gradient)] group-active:stroke-[url(#instagram-real-gradient)]'
              }`}
            />
            <path
              d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
              className={`transition-all duration-200 ${
                isInstagramHighlighted
                  ? 'stroke-[url(#instagram-real-gradient)]'
                  : 'stroke-[#7C6C61] group-hover:stroke-[url(#instagram-real-gradient)] group-active:stroke-[url(#instagram-real-gradient)]'
              }`}
            />
            <line
              x1="17.5"
              x2="17.51"
              y1="6.5"
              y2="6.5"
              strokeWidth="2.5"
              className={`transition-all duration-200 ${
                isInstagramHighlighted
                  ? 'stroke-[url(#instagram-real-gradient)]'
                  : 'stroke-[#7C6C61] group-hover:stroke-[url(#instagram-real-gradient)] group-active:stroke-[url(#instagram-real-gradient)]'
              }`}
            />
          </svg>
          <span
            className={`text-[10px] tracking-wider uppercase mt-1 font-medium transition-colors duration-200 ${
              isInstagramHighlighted
                ? 'text-[#E1306C] font-semibold'
                : 'group-hover:text-[#E1306C] group-active:text-[#E1306C]'
            }`}
          >
            Instagram
          </span>
        </a>

        {/* 5. WHATSAPP (COR REAL - VERDE OFICIAL #25D366) */}
        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onTouchStart={() => handleTouchStart('whatsapp')}
          onTouchEnd={handleTouchEnd}
          className="group flex flex-col items-center justify-center py-1 transition-all duration-200 active:scale-95 min-h-[48px] text-[#7C6C61] focus:outline-none"
          aria-label="Abrir WhatsApp da Clínica"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-5 h-5 transition-all duration-200 group-hover:scale-110 group-active:scale-110 ${
              isWhatsAppHighlighted
                ? 'drop-shadow-[0_2px_8px_rgba(37,211,102,0.6)]'
                : 'group-hover:drop-shadow-[0_2px_8px_rgba(37,211,102,0.6)] group-active:drop-shadow-[0_2px_8px_rgba(37,211,102,0.6)]'
            }`}
          >
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              className={`transition-all duration-200 ${
                isWhatsAppHighlighted
                  ? 'stroke-[#25D366] fill-[#25D366]/20'
                  : 'stroke-[#7C6C61] group-hover:stroke-[#25D366] group-active:stroke-[#25D366] group-hover:fill-[#25D366]/20 group-active:fill-[#25D366]/20'
              }`}
            />
          </svg>
          <span
            className={`text-[10px] tracking-wider uppercase mt-1 font-medium transition-colors duration-200 ${
              isWhatsAppHighlighted
                ? 'text-[#25D366] font-semibold'
                : 'group-hover:text-[#25D366] group-active:text-[#25D366]'
            }`}
          >
            WhatsApp
          </span>
        </a>
      </div>
    </nav>
  );
};
