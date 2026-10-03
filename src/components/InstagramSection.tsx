import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { businessInfo, galleryItems } from '../data/clinicData';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#D8C7B5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with profile handle and button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#8A7768]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A7768]">
                Acompanhe a Clínica
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C2522] font-normal tracking-wide uppercase">
              Nosso Instagram
            </h2>
            <p className="text-sm text-[#5E4F43] mt-2 font-light">
              Conteúdos, esclarecimento de dúvidas e o cotidiano da clínica na Berrini.
            </p>
          </div>

          <a
            href={businessInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto px-6 py-3.5 rounded-full bg-[#EFE7DE] hover:bg-white text-[#2C2522] border border-[#8A7768]/30 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 shadow-sm flex items-center gap-2.5 active:scale-[0.98]"
            aria-label="Acessar o perfil oficial no Instagram @gabriellaritoclinica"
          >
            <Instagram className="w-4 h-4 text-[#8A7768]" />
            <span>Ver Instagram</span>
            <span className="text-[11px] text-[#7C6C61] lowercase font-normal">
              ({businessInfo.instagramHandle})
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#8A7768]" />
          </a>
        </div>

        {/* Gallery Grid with Real Photos & Posts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item) => (
            <a
              key={item.id}
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-square bg-[#EFE7DE] border border-[#8A7768]/20 shadow-sm block focus:outline-none focus:ring-2 focus:ring-[#8A7768]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.98] contrast-[1.03]"
                referrerPolicy="no-referrer"
              />

              {/* Category Tag pill-free on bottom or hover */}
              <div className="absolute top-3 right-3 opacity-90 transition-opacity">
                <div className="w-7 h-7 rounded-full bg-[#2A2421]/60 backdrop-blur-md flex items-center justify-center text-[#F7F4EF] shadow-sm">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Subtle hover overlay with Instagram glyph and subtitle */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2421]/80 via-[#2A2421]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4 text-center">
                <span className="font-serif text-sm sm:text-base text-[#F7F4EF] font-medium leading-snug">
                  {item.title}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#E9DED2] mt-1 font-light">
                  {item.subtitle}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
