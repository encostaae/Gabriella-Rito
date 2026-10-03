import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-40"
    >
      <a
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/40 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
        aria-label="Abrir conversa no WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs uppercase tracking-wider font-semibold pr-1">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
