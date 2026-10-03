import { businessInfo } from '../data/clinicData';

interface GenerateWhatsAppMessageOptions {
  serviceTitle?: string;
  date?: string;
  time?: string;
  fullName?: string;
  phone?: string;
  notes?: string;
}

export const OFFICIAL_WA_LINK = 'https://wa.link/0qeobg';
export const OFFICIAL_WA_PHONE = '5511947638630';

export function createWhatsAppUrl(options?: GenerateWhatsAppMessageOptions): string {
  // If no specific booking parameters are passed, go directly to the official clinic link
  if (!options || (!options.serviceTitle && !options.fullName)) {
    return OFFICIAL_WA_LINK;
  }

  const { serviceTitle, date, time, fullName, phone, notes } = options;
  let message = `Olá! Vim pelo site da Clínica Gabriella Rito e gostaria de agendar uma consulta.`;

  if (serviceTitle) {
    message += `\n\n• Procedimento de interesse: ${serviceTitle}`;
  }
  if (fullName) {
    message += `\n• Nome do paciente: ${fullName}`;
  }
  if (phone) {
    message += `\n• Contato/WhatsApp: ${phone}`;
  }
  if (notes && notes.trim().length > 0) {
    message += `\n• Observações/Dúvidas: ${notes.trim()}`;
  }

  // Date and time alignment directly with attendant
  if (date && time) {
    message += `\n• Preferência de horário: ${date} às ${time}`;
  } else {
    message += `\n\nGostaria de verificar com o atendente as opções de data e horário disponíveis para agendamento!`;
  }

  return `https://api.whatsapp.com/send?phone=${OFFICIAL_WA_PHONE}&text=${encodeURIComponent(message)}`;
}
