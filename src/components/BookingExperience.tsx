import React, { useState, useEffect } from 'react';
import {
  User,
  Phone,
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  X,
  Clock,
  Calendar,
} from 'lucide-react';
import { servicesData, businessInfo } from '../data/clinicData';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { ClinicLogo } from './ClinicLogo';

interface BookingExperienceProps {
  initialServiceId?: string;
}

export const BookingExperience: React.FC<BookingExperienceProps> = ({ initialServiceId }) => {
  // Step state: 1 = Procedimento Desejado, 2 = Dados do Paciente
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || servicesData[0].id
  );
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [formErrors, setFormErrors] = useState<{ fullName?: string; phone?: string }>({});

  // Confirmation Modal
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  // Sync initialServiceId when changed externally (e.g. clicking on a service card)
  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  const selectedService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  // Phone input formatting (BR phone)
  const handlePhoneChange = (val: string) => {
    const digits = val.replace(/\D/g, '');
    let formatted = digits;
    if (digits.length <= 11) {
      if (digits.length > 2 && digits.length <= 7) {
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      } else if (digits.length > 7) {
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
      }
    } else {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    }
    setPhone(formatted);
    if (formErrors.phone) {
      setFormErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const validateForm = () => {
    const errors: { fullName?: string; phone?: string } = {};
    if (!fullName.trim()) {
      errors.fullName = 'Por favor, informe seu nome completo.';
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Por favor, informe um WhatsApp válido com DDD.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return false;
    }
    return true;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (validateForm()) {
        setShowConfirmation(true);
      }
    }
  };

  const handleConfirmToWhatsApp = () => {
    const url = createWhatsAppUrl({
      serviceTitle: selectedService.title,
      fullName: fullName,
      phone: phone,
      notes: notes,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendamento" className="py-20 sm:py-28 bg-[#EFE7DE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#8A7768]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A7768]">
              Experiência Exclusiva
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2C2522] font-normal tracking-wide uppercase">
            Agende Sua Consulta
          </h2>
          <p className="text-sm sm:text-base text-[#5E4F43] mt-2 font-light">
            Selecione o procedimento desejado e preencha seus dados. A data e o horário ideais serão
            alinhados diretamente com nosso atendimento no WhatsApp.
          </p>
        </div>

        {/* 2-Step Navigation */}
        <div className="mb-8 max-w-2xl">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Step 1 Tab */}
            <button
              onClick={() => setCurrentStep(1)}
              className={`p-3.5 rounded-2xl text-left transition-all border ${
                currentStep === 1
                  ? 'bg-[#D8C7B5] border-[#8A7768] shadow-sm'
                  : 'bg-white/60 border-transparent hover:bg-white/80'
              }`}
            >
              <span className="text-[10px] uppercase tracking-wider text-[#7C6C61] font-semibold block">
                Etapa 1
              </span>
              <span className="font-serif text-xs sm:text-sm text-[#2C2522] font-medium block truncate">
                Procedimento Desejado
              </span>
            </button>

            {/* Step 2 Tab */}
            <button
              onClick={() => setCurrentStep(2)}
              className={`p-3.5 rounded-2xl text-left transition-all border ${
                currentStep === 2
                  ? 'bg-[#D8C7B5] border-[#8A7768] shadow-sm'
                  : 'bg-white/60 border-transparent hover:bg-white/80'
              }`}
            >
              <span className="text-[10px] uppercase tracking-wider text-[#7C6C61] font-semibold block">
                Etapa 2
              </span>
              <span className="font-serif text-xs sm:text-sm text-[#2C2522] font-medium block truncate">
                Dados do Paciente
              </span>
            </button>
          </div>
        </div>

        {/* Main Grid: Form + Sticky Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form Column */}
          <div className="lg:col-span-8 bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#8A7768]/20 shadow-sm">
            {/* ETAPA 1: Procedimento Desejado */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A7768] block mb-1">
                    Selecione o Procedimento Desejado
                  </label>
                  <p className="text-xs text-[#5E4F43] font-light mb-4">
                    Escolha o procedimento para o qual você deseja realizar a avaliação ou aplicação.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {servicesData.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedServiceId(s.id)}
                        className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between min-h-[84px] ${
                          selectedServiceId === s.id
                            ? 'bg-[#D8C7B5] border-[#8A7768] shadow-sm ring-1 ring-[#8A7768]/40'
                            : 'bg-[#F7F4EF] border-[#8A7768]/15 hover:border-[#8A7768]/40'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-medium text-xs sm:text-sm text-[#2C2522] leading-snug">
                            {s.title}
                          </span>
                          {selectedServiceId === s.id ? (
                            <CheckCircle2 className="w-4 h-4 text-[#8A7768] shrink-0 mt-0.5" />
                          ) : (
                            <span className="w-4 h-4 rounded-full border border-[#8A7768]/30 shrink-0 mt-0.5" />
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#8A7768]/15 text-[11px] text-[#7C6C61]">
                          <span className="font-light">{s.duration}</span>
                          <span className="text-[10px] uppercase tracking-wider text-[#8A7768] font-medium">
                            {s.category}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Info Callout */}
                <div className="p-4 rounded-2xl bg-[#D8C7B5]/30 border border-[#8A7768]/20 flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-[#8A7768] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#5E4F43] font-light leading-relaxed">
                    <strong className="font-medium text-[#2C2522]">Data e horário flexíveis:</strong>{' '}
                    Após preencher seus dados, você será conectado ao nosso WhatsApp para combinar o
                    dia e o horário mais convenientes para sua rotina.
                  </p>
                </div>

                {/* Step 1 Actions */}
                <div className="pt-4 border-t border-[#8A7768]/20 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#8A7768] hover:bg-[#6E5D4F] active:scale-[0.98] text-[#F7F4EF] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Avançar para Dados do Paciente</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ETAPA 2: Dados do Paciente */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A7768] mb-1">
                    Informações do Paciente
                  </h3>
                  <p className="text-xs text-[#5E4F43] font-light">
                    Seus dados são confidenciais e utilizados exclusivamente para o contato e
                    atendimento da clínica.
                  </p>
                </div>

                {/* Selected procedure badge */}
                <div className="p-3.5 rounded-2xl bg-[#D8C7B5]/40 border border-[#8A7768]/25 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#8A7768]" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#7C6C61] block">
                        Procedimento Selecionado
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#2C2522]">
                        {selectedService.title}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-[11px] text-[#8A7768] underline hover:text-[#2C2522] transition-colors"
                  >
                    Alterar
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Nome Completo */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#2C2522] mb-1.5">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (formErrors.fullName) {
                            setFormErrors((prev) => ({ ...prev, fullName: undefined }));
                          }
                        }}
                        placeholder="Ex: Beatriz Albuquerque"
                        className={`w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#F7F4EF] border text-sm text-[#2C2522] placeholder-[#A5A5A5] focus:outline-none focus:ring-2 focus:ring-[#8A7768] transition-all ${
                          formErrors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#8A7768]/20'
                        }`}
                      />
                      <User className="w-4 h-4 text-[#8A7768] absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                    {formErrors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* WhatsApp / Telefone */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#2C2522] mb-1.5">
                      WhatsApp / Telefone com DDD *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder="(11) 98765-4321"
                        maxLength={15}
                        className={`w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#F7F4EF] border text-sm text-[#2C2522] placeholder-[#A5A5A5] focus:outline-none focus:ring-2 focus:ring-[#8A7768] transition-all ${
                          formErrors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#8A7768]/20'
                        }`}
                      />
                      <Phone className="w-4 h-4 text-[#8A7768] absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                    {formErrors.phone && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Observação / Dúvida */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#2C2522] mb-1.5">
                      Observação ou Dúvida (Opcional)
                    </label>
                    <div className="relative">
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Ex: Gostaria de alinhar um horário no período da tarde ou tirar dúvidas sobre o procedimento..."
                        rows={3}
                        className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#F7F4EF] border border-[#8A7768]/20 text-sm text-[#2C2522] placeholder-[#A5A5A5] focus:outline-none focus:ring-2 focus:ring-[#8A7768] transition-all resize-none"
                      />
                      <FileText className="w-4 h-4 text-[#8A7768] absolute left-4 top-4" />
                    </div>
                  </div>
                </div>

                {/* Direct Attendant Alignment Notice */}
                <div className="p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-[#128C7E] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#2C2522] font-light leading-relaxed">
                    <strong className="font-semibold text-[#128C7E]">Agendamento Personalizado:</strong>{' '}
                    A data e o horário da sua consulta serão definidos diretamente com nosso atendente
                    no WhatsApp, garantindo flexibilidade total para o seu dia a dia.
                  </p>
                </div>

                {/* Step 2 Actions */}
                <div className="pt-6 border-t border-[#8A7768]/20 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 rounded-full text-xs uppercase tracking-widest text-[#7C6C61] hover:text-[#2C2522] transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Voltar</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-8 py-3.5 rounded-full bg-[#8A7768] hover:bg-[#6E5D4F] active:scale-[0.98] text-[#F7F4EF] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Revisar e Agendar</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Summary Card ("SEU AGENDAMENTO") */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-[#D8C7B5] rounded-3xl p-6 sm:p-7 border border-[#8A7768]/30 shadow-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#8A7768]/20">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#7C6C61] font-semibold">
                  Resumo da Solicitação
                </span>
                <ClinicLogo variant="monogram" theme="taupe" size="sm" />
              </div>
              <h3 className="font-serif text-2xl text-[#2C2522] font-normal tracking-wide uppercase mb-4">
                Seu Agendamento
              </h3>

              <div className="space-y-4 py-4 border-y border-[#8A7768]/25 text-xs text-[#4A3E37]">
                {/* Procedimento */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7C6C61] block mb-0.5">
                    Procedimento Desejado
                  </span>
                  <span className="font-medium text-sm text-[#2C2522] block">
                    {selectedService.title}
                  </span>
                  <span className="text-[11px] text-[#5E4F43]">{selectedService.duration}</span>
                </div>

                {/* Paciente */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7C6C61] block mb-0.5">
                    Paciente
                  </span>
                  <span className="font-medium text-sm text-[#2C2522] block">
                    {fullName.trim() || 'A preencher'}
                  </span>
                  {phone.trim() && (
                    <span className="text-[11px] text-[#5E4F43] block mt-0.5">{phone}</span>
                  )}
                </div>

                {/* Data e Horário (Alinhados via WhatsApp) */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7C6C61] block mb-1">
                    Data & Horário
                  </span>
                  <div className="p-3 rounded-xl bg-white/60 border border-[#8A7768]/25 flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4 text-[#128C7E] shrink-0" />
                    <span className="text-xs text-[#2C2522] font-medium leading-tight">
                      A combinar pelo WhatsApp com o atendente
                    </span>
                  </div>
                </div>

                {/* Endereço */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7C6C61] block mb-0.5">
                    Local de Atendimento
                  </span>
                  <span className="text-xs text-[#2C2522] leading-tight block">
                    {businessInfo.addressShort}
                  </span>
                </div>
              </div>

              {/* Instant CTA Button */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => {
                    if (currentStep !== 2) {
                      setCurrentStep(2);
                    } else {
                      handleNextStep();
                    }
                  }}
                  className="w-full min-h-[50px] py-3.5 px-6 rounded-full bg-[#2C2522] hover:bg-[#1A1513] active:scale-[0.98] text-[#F7F4EF] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#D8C7B5]" />
                  <span>Agendar pelo WhatsApp</span>
                </button>

                <p className="text-[10px] text-center text-[#7C6C61] mt-3">
                  Ao avançar, seus dados e o procedimento escolhido serão enviados para combinar a data
                  e o horário ideais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1513]/75 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md bg-[#F7F4EF] rounded-3xl p-6 sm:p-8 text-[#2C2522] shadow-2xl border border-[#8A7768]/30">
            {/* Close Button */}
            <button
              onClick={() => setShowConfirmation(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EFE7DE] flex items-center justify-center hover:bg-[#D8C7B5] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Original Brand Header & Checkmark */}
            <div className="text-center mb-6 pt-2">
              <div className="mb-4 flex justify-center">
                <ClinicLogo variant="full" theme="taupe" size="sm" showSubtitle={true} />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8A7768]/15 text-[#8A7768] text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Dados Prontos para Envio</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#2C2522] font-normal tracking-wide uppercase mt-1">
                Solicitação de Agendamento
              </h3>
            </div>

            {/* Voucher Card */}
            <div className="bg-[#EFE7DE] rounded-2xl p-4 sm:p-5 border border-[#8A7768]/20 space-y-3 text-xs mb-6">
              <div className="flex justify-between items-center pb-2 border-b border-[#8A7768]/15">
                <span className="text-[#7C6C61]">Procedimento:</span>
                <span className="font-medium text-[#2C2522] text-right">{selectedService.title}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-[#8A7768]/15">
                <span className="text-[#7C6C61]">Paciente:</span>
                <span className="font-medium text-[#2C2522]">{fullName || 'Não informado'}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-[#8A7768]/15">
                <span className="text-[#7C6C61]">WhatsApp:</span>
                <span className="font-medium text-[#2C2522]">{phone || 'Não informado'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#7C6C61]">Data & Horário:</span>
                <span className="font-medium text-[#128C7E] flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  A combinar com o atendente
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <button
                onClick={handleConfirmToWhatsApp}
                className="w-full min-h-[50px] py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all shadow-md flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Conversar no WhatsApp e Escolher Horário</span>
              </button>

              <button
                onClick={() => setShowConfirmation(false)}
                className="w-full py-2.5 text-xs uppercase tracking-widest text-[#7C6C61] hover:text-[#2C2522] transition-colors"
              >
                Voltar e Editar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
