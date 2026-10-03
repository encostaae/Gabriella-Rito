import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Calendar, Info, Clock } from 'lucide-react';
import { servicesData } from '../data/clinicData';
import { Service } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Procedimentos' },
    { id: 'Harmonização Global', label: 'Harmonização Global' },
    { id: 'Volumização & Contorno', label: 'Volumização & Lábios' },
    { id: 'Firmeza & Estímulo', label: 'Bioestimuladores' },
    { id: 'Miopodulação', label: 'Toxina Botulínica' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-[#D8C7B5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#8A7768]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A7768]">
              Tratamentos de Alta Precisão
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C2522] font-normal tracking-wide uppercase">
            Procedimentos & Harmonização Facial
          </h2>
          <p className="text-sm sm:text-base text-[#5E4F43] mt-3 font-light max-w-2xl leading-relaxed">
            Abordagem planejada e personalizada. Cada intervenção é desenhada respeitando as
            proporções áureas e as particularidades exclusivas da sua face.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-[#8A7768] text-[#F7F4EF] border-[#8A7768] shadow-sm'
                  : 'bg-[#EFE7DE]/70 text-[#5E4F43] border-[#8A7768]/20 hover:bg-[#EFE7DE] hover:text-[#2C2522]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#EFE7DE] rounded-2xl p-6 sm:p-7 border border-[#8A7768]/20 hover:border-[#8A7768]/60 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(44,37,34,0.08)] flex flex-col justify-between"
            >
              <div>
                {/* Clean unboxed category header */}
                <div className="flex items-center justify-between text-xs text-[#7C6C61] mb-3">
                  <span className="uppercase tracking-[0.2em] font-medium text-[11px]">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-[#8A7768]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#2C2522] font-normal tracking-wide group-hover:text-[#8A7768] transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs sm:text-sm text-[#5E4F43] font-light leading-relaxed mb-4 line-clamp-2">
                  {service.tagline}
                </p>

                {/* Benefits Bullet points */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-[#8A7768]/15">
                  {service.benefits.slice(0, 2).map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#4A3E37] font-light">
                      <span className="w-1 h-1 rounded-full bg-[#8A7768] shrink-0" />
                      <span className="truncate">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#8A7768]/20 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs uppercase tracking-wider text-[#7C6C61] hover:text-[#2C2522] flex items-center gap-1.5 transition-colors py-1.5 focus:outline-none"
                >
                  <Info className="w-3.5 h-3.5 text-[#8A7768]" />
                  <span>Saber Mais</span>
                </button>

                <button
                  onClick={() => onSelectServiceForBooking(service)}
                  className="px-4 py-2 rounded-full bg-[#8A7768] hover:bg-[#6E5D4F] active:scale-[0.97] text-[#F7F4EF] text-xs uppercase tracking-widest font-medium transition-all duration-200 flex items-center gap-1.5 shadow-sm"
                  aria-label={`Agendar ${service.title}`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agendar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Evaluation Note */}
        <div className="mt-12 text-center max-w-xl mx-auto px-4 py-3 rounded-2xl bg-[#EFE7DE]/80 border border-[#8A7768]/20 text-xs text-[#5E4F43]">
          ✦ O atendimento é realizado mediante consulta individualizada para diagnóstico facial minucioso antes de qualquer procedimento.
        </div>
      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForBooking={onSelectServiceForBooking}
      />
    </section>
  );
};
