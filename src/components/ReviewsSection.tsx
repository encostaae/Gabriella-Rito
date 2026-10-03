import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { testimonialsData } from '../data/clinicData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#EFE7DE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#8A7768]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A7768]">
              Experiência Compartilhada
            </span>
            <span className="w-6 h-px bg-[#8A7768]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2522] font-normal tracking-wide uppercase">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xs sm:text-sm text-[#5E4F43] mt-2 font-light">
            Depoimentos de pacientes que vivenciaram a abordagem personalizada da clínica.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 rounded-3xl p-6 sm:p-8 border border-[#8A7768]/20 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#C5A880]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A880] stroke-[#C5A880]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="font-serif italic text-sm sm:text-base text-[#4A3E37] leading-relaxed mb-6 font-light">
                  "{item.comment}"
                </p>
              </div>

              {/* Author & Tag */}
              <div className="pt-4 border-t border-[#8A7768]/15 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-xs sm:text-sm text-[#2C2522]">
                    {item.author}
                  </h4>
                  <span className="text-[11px] text-[#7C6C61]">{item.date}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A7768] font-medium bg-[#D8C7B5]/40 px-2.5 py-1 rounded-full border border-[#8A7768]/15">
                  {item.procedureTag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
