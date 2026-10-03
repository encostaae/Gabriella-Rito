import React, { useState, useEffect } from 'react';
import { Calendar, MessageCircle, Instagram } from 'lucide-react';
import { businessInfo } from '../data/clinicData';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { ClinicLogo } from './ClinicLogo';

interface HeaderProps {
  onNavigateBooking: () => void;
  onNavigateServices: () => void;
  onNavigateAbout: () => void;
  onNavigateLocation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateBooking,
  onNavigateServices,
  onNavigateAbout,
  onNavigateLocation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#D8C7B5]/95 backdrop-blur-md shadow-sm border-b border-[#8A7768]/20 py-3'
          : 'bg-gradient-to-b from-[#2A2421]/60 via-[#2A2421]/20 to-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Zone with Original Official Logo */}
        <a
          href="#"
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A7768] rounded-sm py-0.5 transition-opacity hover:opacity-90 shrink-0"
          aria-label="Clinica Gabriella Rito - Página Inicial"
        >
          <ClinicLogo
            variant="original"
            theme={isScrolled ? 'taupe' : 'dark'}
            size="md"
          />
        </a>

        {/* Desktop Nav Zone */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs uppercase tracking-[0.18em] font-medium">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`transition-colors duration-200 hover:text-[#8A7768] focus-visible:underline ${
              isScrolled ? 'text-[#4A3E37]' : 'text-[#F7F4EF]/90'
            }`}
          >
            Início
          </button>
          <button
            onClick={onNavigateAbout}
            className={`transition-colors duration-200 hover:text-[#8A7768] focus-visible:underline ${
              isScrolled ? 'text-[#4A3E37]' : 'text-[#F7F4EF]/90'
            }`}
          >
            Sobre
          </button>
          <button
            onClick={onNavigateServices}
            className={`transition-colors duration-200 hover:text-[#8A7768] focus-visible:underline ${
              isScrolled ? 'text-[#4A3E37]' : 'text-[#F7F4EF]/90'
            }`}
          >
            Procedimentos
          </button>
          <button
            onClick={onNavigateLocation}
            className={`transition-colors duration-200 hover:text-[#8A7768] focus-visible:underline ${
              isScrolled ? 'text-[#4A3E37]' : 'text-[#F7F4EF]/90'
            }`}
          >
            Localização
          </button>
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Instagram Link */}
          <a
            href={businessInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center ${
              isScrolled
                ? 'text-[#6E5D4F] hover:text-[#2C2522] hover:bg-[#8A7768]/10'
                : 'text-[#F7F4EF] hover:text-white hover:bg-white/10'
            }`}
            aria-label="Visite nosso Instagram @gabriellaritoclinica"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Quick WhatsApp Link */}
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center ${
              isScrolled
                ? 'text-[#6E5D4F] hover:text-[#2C2522] hover:bg-[#8A7768]/10'
                : 'text-[#F7F4EF] hover:text-white hover:bg-white/10'
            }`}
            aria-label="Fale conosco via WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Primary CTA (visible on desktop and tablet) */}
          <button
            onClick={onNavigateBooking}
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300 shadow-sm active:scale-[0.98] ${
              isScrolled
                ? 'bg-[#8A7768] hover:bg-[#6E5D4F] text-[#F7F4EF]'
                : 'bg-[#F7F4EF] hover:bg-white text-[#2C2522]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Horário</span>
          </button>
        </div>
      </div>
    </header>
  );
};
