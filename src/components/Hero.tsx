import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface HeroProps {
  onScheduleClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleClick, onExploreServices }) => {
  return (
    <section className="relative min-h-[85vh] sm:h-screen sm:min-h-0 sm:max-h-screen flex flex-col justify-end items-center overflow-hidden pb-8 sm:pb-8 pt-20 sm:pt-16 bg-[#35271E]">
      {/* Scoped CSS: Radial mask applied exclusively to mobile entrance photo */}
      <style>{`
        .hero-feathered-image-mobile {
          -webkit-mask-image: radial-gradient(
            ellipse 88% 82% at 50% 50%,
            black 45%,
            rgba(0, 0, 0, 0.85) 68%,
            rgba(0, 0, 0, 0.3) 85%,
            transparent 98%
          );
          mask-image: radial-gradient(
            ellipse 88% 82% at 50% 50%,
            black 45%,
            rgba(0, 0, 0, 0.85) 68%,
            rgba(0, 0, 0, 0.3) 85%,
            transparent 98%
          );
        }
      `}</style>

      {/* Real Clinic Photography with Seamless Color-Complementary Canvas */}
      <div className="absolute inset-0 z-0">
        {/* Mobile ambient fill (instant local asset) */}
        <img
          src="/images/real/real_consultation_03.jpg"
          alt=""
          aria-hidden="true"
          className="sm:hidden absolute inset-0 w-full h-full object-cover blur-3xl scale-125 opacity-75 brightness-[0.88] contrast-[1.08] pointer-events-none"
        />

        {/* Desktop ambient luxury backdrop (0 network requests, instantaneous render) */}
        <div className="hidden sm:block absolute inset-0 bg-[#35271E] pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(85,60,45,0.45)_0%,_rgba(53,39,30,1)_85%)] pointer-events-none" />

        {/* Mobile entrance photo: preserved uncropped */}
        <img
          src="/images/real/real_consultation_03.jpg"
          alt="Dra. Gabriella Rito na clínica em São Paulo"
          loading="eager"
          decoding="async"
          className="sm:hidden hero-feathered-image-mobile w-full h-full object-contain object-center scale-100 transition-transform duration-700 ease-out brightness-[0.96] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />

        {/* Desktop entrance photo: direct, robust image from user link with priority loading */}
        <img
          src="https://i.postimg.cc/x1Nw4JPv/entrada-do-site.png"
          alt="Clínica Gabriella Rito - Harmonização Facial e Estética"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="hidden sm:block w-full h-full object-contain object-center scale-100 transition-opacity duration-300"
          referrerPolicy="no-referrer"
        />

        {/* Atmospheric color integration: soft ambient warmth */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-[#35271E]/30 via-transparent to-[#241710]/70 pointer-events-none z-[1]" />
        <div className="sm:hidden absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(38,24,17,0.60)_100%)] pointer-events-none z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#241710]/80 via-[#241710]/30 to-transparent pointer-events-none z-[1]" />
      </div>

      {/* Content Container - Ultra Clean & Minimalist */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        {/* Large Tactile CTA Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScheduleClick}
            className="w-[85%] sm:w-auto min-h-[52px] sm:px-10 py-3.5 rounded-full bg-[#D8C7B5] hover:bg-[#EFE7DE] active:scale-[0.98] text-[#2C2522] font-medium text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_30px_rgba(44,37,34,0.35)] flex items-center justify-center gap-3 border border-[#F7F4EF]/50 focus:outline-none focus:ring-2 focus:ring-[#8A7768]"
            aria-label="Agendar Horário na Clínica Gabriella Rito"
          >
            <Calendar className="w-4 h-4 text-[#8A7768] stroke-[2.2]" />
            <span>Agendar Horário</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#8A7768]" />
          </button>

          <button
            onClick={onExploreServices}
            className="w-[85%] sm:w-auto min-h-[48px] px-8 py-3 rounded-full bg-[#2A2421]/40 hover:bg-[#2A2421]/60 active:scale-[0.98] text-[#F7F4EF] font-normal text-xs uppercase tracking-[0.18em] transition-all duration-300 border border-[#F7F4EF]/35 focus:outline-none backdrop-blur-md"
          >
            Conhecer Procedimentos
          </button>
        </div>
      </div>
    </section>
  );
};
