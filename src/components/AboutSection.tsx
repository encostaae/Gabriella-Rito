import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/clinicData';
import { ClinicLogo } from './ClinicLogo';

interface AboutSectionProps {
  onScheduleClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onScheduleClick }) => {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#D8C7B5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Image Column with Real Clinic Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(44,37,34,0.18)] border border-[#8A7768]/30">
              <img
                src="https://i.postimg.cc/Bvh86Vd1/642038499-18562936447034323-8346439626662011021-n.jpg"
                alt="Dra. Gabriella Rito - Harmonização Facial e atendimento exclusivo em São Paulo"
                loading="lazy"
                decoding="async"
                className="w-full h-[420px] sm:h-[520px] object-cover object-top brightness-[0.98] contrast-[1.04]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2421]/65 via-transparent to-transparent" />

              {/* Floating Quote Stamp with Original Monogram */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#EFE7DE]/95 backdrop-blur-md border border-[#8A7768]/20 shadow-md flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#D8C7B5] border border-[#8A7768]/30 flex items-center justify-center shrink-0">
                  <ClinicLogo variant="monogram" theme="taupe" size="sm" />
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-[#2C2522]">
                  "Mais do que um atendimento, uma experiência única de valorização pessoal."
                </p>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-[#8A7768]/25 rounded-3xl -z-10 pointer-events-none" />
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-[#8A7768]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A7768]">
                Sobre
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C2522] font-normal tracking-wide leading-tight">
              Gabriella Rito
            </h2>

            <p className="text-sm sm:text-base text-[#4A3E37] font-light leading-relaxed">
              Gabriella Rito Harmonização Facial é uma clínica especializada em estética e
              harmonização facial, com uma proposta contemporânea voltada para a valorização da
              beleza e da individualidade de cada paciente.
            </p>

            <p className="text-sm sm:text-base text-[#4A3E37] font-light leading-relaxed">
              Com o conceito “Visão estética com inteligência de futuro”, a clínica busca oferecer
              uma abordagem planejada e personalizada, considerando as características faciais de
              cada pessoa e seus objetivos estéticos.
            </p>

            <p className="text-sm text-[#5E4F43] font-light leading-relaxed">
              O atendimento é realizado exclusivamente mediante consulta, permitindo que cada caso
              seja avaliado individualmente e que as informações sobre procedimentos sejam
              apresentadas de maneira personalizada.
            </p>

            {/* Pillars */}
            <div className="pt-4 border-t border-[#8A7768]/25 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8A7768]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#8A7768] stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2C2522]">
                    Planejamento & Precisão
                  </h4>
                  <p className="text-xs text-[#5E4F43] font-light">
                    Diagnóstico anatômico pautado em harmonia e bom gosto.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8A7768]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#8A7768] stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2C2522]">
                    Cuidado em Cada Detalhe
                  </h4>
                  <p className="text-xs text-[#5E4F43] font-light">
                    Ambiente privativo na Berrini com atendimento sob horário marcado.
                  </p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={onScheduleClick}
                className="px-8 py-3.5 rounded-full bg-[#8A7768] hover:bg-[#6E5D4F] active:scale-[0.98] text-[#F7F4EF] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center gap-2"
              >
                <span>Solicitar Avaliação</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
