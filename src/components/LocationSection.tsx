import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';
import { businessInfo } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-[#EFE7DE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#8A7768]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A7768]">
              Localização Privilegiada
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C2522] font-normal tracking-wide uppercase">
            Onde Estamos
          </h2>
          <p className="text-sm text-[#5E4F43] mt-2 font-light">
            Localizada no coração financeiro e comercial de São Paulo, na Avenida Engenheiro Luís
            Carlos Berrini, com fácil acesso e estacionamento.
          </p>
        </div>

        {/* 2-Column Location Card + Interactive Map Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Card */}
          <div className="lg:col-span-5 bg-white/90 rounded-3xl p-6 sm:p-8 border border-[#8A7768]/20 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Endereço */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#D8C7B5]/50 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#8A7768]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7C6C61] font-semibold block">
                    Endereço
                  </span>
                  <p className="text-sm font-medium text-[#2C2522] mt-0.5 leading-snug">
                    {businessInfo.fullAddress}
                  </p>
                  <span className="text-xs text-[#7C6C61] block mt-1">
                    CEP: {businessInfo.cep} — São Paulo, SP
                  </span>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#D8C7B5]/50 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-[#8A7768]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7C6C61] font-semibold block">
                    Horário de Atendimento
                  </span>
                  <p className="text-sm font-medium text-[#2C2522] mt-0.5">
                    {businessInfo.hours}
                  </p>
                  <span className="text-xs text-[#7C6C61] block mt-1">
                    Segunda a Sábado, mediante consulta prévia
                  </span>
                </div>
              </div>

              {/* Telefone & WhatsApp */}
              <a
                href="https://wa.link/0qeobg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-2 -mx-2 rounded-2xl hover:bg-[#D8C7B5]/40 transition-colors group cursor-pointer"
                aria-label="Abrir conversa no WhatsApp"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#D8C7B5]/50 group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center shrink-0 mt-1 transition-all">
                  <Phone className="w-5 h-5 text-[#8A7768] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7C6C61] font-semibold block group-hover:text-[#25D366] transition-colors">
                    Contato & WhatsApp
                  </span>
                  <p className="text-sm font-medium text-[#2C2522] mt-0.5">
                    {businessInfo.phone}
                  </p>
                  <span className="text-xs text-[#7C6C61] block mt-1">
                    Atendimento ágil para agendamentos e esclarecimentos →
                  </span>
                </div>
              </a>
            </div>

            {/* "COMO CHEGAR" Primary Button */}
            <div className="pt-8 border-t border-[#8A7768]/20 mt-6">
              <a
                href={businessInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-[#8A7768] hover:bg-[#6E5D4F] active:scale-[0.98] text-[#F7F4EF] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2"
                aria-label="Abrir localização no Google Maps"
              >
                <Navigation className="w-4 h-4" />
                <span>Como Chegar (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Styled Map View */}
          <div className="lg:col-span-7 bg-[#D8C7B5]/60 rounded-3xl overflow-hidden border border-[#8A7768]/30 shadow-sm relative min-h-[360px] flex items-center justify-center">
            {/* Embed Google Maps Iframe */}
            <iframe
              title="Localização da Clínica Gabriella Rito na Avenida Berrini, São Paulo"
              src="https://maps.google.com/maps?q=Avenida+Engenheiro+Lu%C3%ADs+Carlos+Berrini+1748,+S%C3%A3o+Paulo+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
