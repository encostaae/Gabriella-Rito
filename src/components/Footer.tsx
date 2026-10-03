import React from 'react';
import { Instagram, MessageCircle, MapPin, Clock, ArrowUp } from 'lucide-react';
import { businessInfo } from '../data/clinicData';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { ClinicLogo } from './ClinicLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241E1B] text-[#F7F4EF] pt-16 pb-28 md:pb-16 border-t border-[#8A7768]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#F7F4EF]/10">
          {/* Logo & Brand Info with Original Logo */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex flex-col items-start">
              <ClinicLogo
                variant="full"
                theme="dark"
                size="md"
                showSubtitle={true}
                className="!items-start !text-left"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#E9DED2]/80 font-light leading-relaxed max-w-sm pt-1">
              "{businessInfo.tagline}"
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#332C28] hover:bg-[#8A7768] text-[#F7F4EF] flex items-center justify-center transition-colors border border-[#8A7768]/30"
                aria-label="Instagram Oficial"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#332C28] hover:bg-[#8A7768] text-[#F7F4EF] flex items-center justify-center transition-colors border border-[#8A7768]/30"
                aria-label="WhatsApp Oficial"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
              Navegação
            </h3>
            <ul className="space-y-2 text-xs font-light text-[#E9DED2]/80">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-[#F7F4EF] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#F7F4EF] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F7F4EF] transition-colors">
                  Procedimentos Faciais
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-[#F7F4EF] transition-colors">
                  Agendar Consulta
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#F7F4EF] transition-colors">
                  Localização na Berrini
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
              Atendimento & Endereço
            </h3>
            <div className="space-y-2.5 text-xs font-light text-[#E9DED2]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{businessInfo.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>{businessInfo.hours}</span>
              </div>
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                aria-label="Chamar no WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>WhatsApp: {businessInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E9DED2]/60 font-light gap-4">
          <p>© {new Date().getFullYear()} {businessInfo.name}. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#F7F4EF] transition-colors text-[11px] uppercase tracking-wider"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
