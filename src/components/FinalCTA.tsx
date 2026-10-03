import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onScheduleClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onScheduleClick }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#D8C7B5] relative overflow-hidden border-t border-[#8A7768]/20">
      {/* Decorative backdrop glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#EFE7DE]/80 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-px bg-[#8A7768]" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#8A7768]">
            Harmonia & Proporção
          </span>
          <span className="w-8 h-px bg-[#8A7768]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#2C2522] font-normal tracking-wide uppercase leading-tight mb-4">
          Seu Próximo Visual
          <span className="block italic text-[#8A7768] font-light">Começa Aqui.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#5E4F43] font-light max-w-xl mx-auto mb-8 leading-relaxed">
          Permita-se uma avaliação minuciosa com olhar contemporâneo e inteligente. Reserve seu
          horário com comodidade e discrição.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScheduleClick}
            className="w-[85%] sm:w-auto min-h-[52px] sm:px-10 py-3.5 rounded-full bg-[#8A7768] hover:bg-[#6E5D4F] active:scale-[0.98] text-[#F7F4EF] font-medium text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_25px_rgba(138,119,104,0.35)] flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#8A7768]"
            aria-label="Agendar Agora na Clínica Gabriella Rito"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Agora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
