import React from 'react';
import { X, Calendar, Check, Clock, Sparkles } from 'lucide-react';
import { Service } from '../types';
import { ClinicLogo } from './ClinicLogo';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onSelectForBooking: (service: Service) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForBooking,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1513]/70 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="relative w-full max-w-xl bg-[#EFE7DE] text-[#2C2522] rounded-3xl shadow-2xl border border-[#8A7768]/30 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="relative p-6 sm:p-8 bg-[#D8C7B5] border-b border-[#8A7768]/20 flex items-start justify-between">
          <div className="pr-8">
            <div className="mb-2">
              <ClinicLogo variant="horizontal" theme="taupe" size="sm" showSubtitle={true} />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7C6C61] font-semibold">
              {service.category}
            </span>
            <h2
              id="service-modal-title"
              className="font-serif text-2xl sm:text-3xl text-[#2C2522] font-normal tracking-wide mt-1"
            >
              {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5E4F43] mt-1 font-light italic">
              {service.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#EFE7DE] hover:bg-white text-[#2C2522] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#8A7768] shrink-0"
            aria-label="Fechar detalhes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Real Procedure Photograph */}
          {service.image && (
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-[#8A7768]/20 shadow-sm">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center brightness-[0.98] contrast-[1.04]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2421]/40 via-transparent to-transparent" />
            </div>
          )}

          {/* Main Description */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A7768] mb-2">
              Sobre o Procedimento
            </h3>
            <p className="text-sm leading-relaxed text-[#4A3E37] font-light">
              {service.description}
            </p>
          </div>

          {/* Key Meta Details */}
          <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#8A7768]/20 text-xs">
            <div className="flex items-center gap-2 text-[#4A3E37]">
              <Clock className="w-4 h-4 text-[#8A7768]" />
              <span>Duração: <strong className="font-medium text-[#2C2522]">{service.duration}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-[#4A3E37]">
              <Sparkles className="w-4 h-4 text-[#8A7768]" />
              <span>Atendimento individualizado</span>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A7768] mb-3">
              Diferenciais & Benefícios
            </h3>
            <ul className="space-y-2.5">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3E37] font-light">
                  <div className="w-4 h-4 rounded-full bg-[#8A7768]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#8A7768] stroke-[2.5]" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Indications */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A7768] mb-2">
              Principais Indicações
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.indications.map((ind, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-[#D8C7B5]/60 text-[#2C2522] border border-[#8A7768]/20"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-6 bg-[#D8C7B5]/50 border-t border-[#8A7768]/20 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onSelectForBooking(service);
              onClose();
            }}
            className="w-full sm:flex-1 min-h-[48px] px-6 py-3 rounded-full bg-[#8A7768] hover:bg-[#6E5D4F] active:scale-[0.98] text-[#F7F4EF] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Este Procedimento</span>
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-widest text-[#7C6C61] hover:text-[#2C2522] transition-colors"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};
