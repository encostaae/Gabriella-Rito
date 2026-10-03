import { BusinessInfo, Service, Testimonial, GalleryItem } from '../types';

export const businessInfo: BusinessInfo = {
  name: 'Clinica Gabriella Rito',
  shortName: 'Gabriella Rito',
  legalName: 'Clinica Gabriella Rito Harmonização Facial',
  segment: 'Harmonização Facial',
  tagline: 'Visão estética com inteligência de futuro.',
  description:
    'Gabriella Rito Harmonização Facial é uma clínica especializada em estética e harmonização facial, com uma proposta contemporânea voltada para a valorização da beleza e da individualidade de cada paciente. Com o conceito “Visão estética com inteligência de futuro”, a clínica busca oferecer uma abordagem planejada e personalizada, considerando as características faciais de cada pessoa e seus objetivos estéticos.',
  city: 'São Paulo',
  fullAddress: 'Avenida Engenheiro Luís Carlos Berrini, 1748, São Paulo SP, 04571-011, Brasil',
  addressShort: 'Av. Eng. Luís Carlos Berrini, 1748 — Berrini, SP',
  cep: '04571-011',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida+Engenheiro+Luís+Carlos+Berrini+1748+Sao+Paulo+SP',
  phone: '(11) 94763-8630',
  whatsappLink: 'https://wa.link/0qeobg',
  whatsappNumber: '+55 11 94763-8630',
  instagramUrl: 'https://www.instagram.com/gabriellaritoclinica/',
  instagramHandle: '@gabriellaritoclinica',
  hours: 'Atendimento com Horário Marcado',
  bookingPolicy: 'Consultas com avaliação prévia individualizada.',
};

export const clinicColors = {
  background: '#D8C7B5', // Nude Champagne
  surfaceLight: '#EFE7DE', // Nude Suave
  surfaceDark: '#2E2723', // Marrom Profundo
  surfaceCard: '#39302B', // Taupe Card
  marrom: '#8A7768', // Marrom Taupe
  marromDark: '#5E4F43',
  areia: '#E9DED2', // Areia
  text: '#F7F4EF', // Off-white
  textDark: '#2C2522', // Marrom Café Escuro
  textSecondary: '#7C6C61',
  border: 'rgba(138, 119, 104, 0.25)',
  gold: '#C5A880',
};

export const servicesData: Service[] = [
  {
    id: 'harmonizacao-full-face',
    title: 'Planejamento Full Face',
    tagline: 'Equilíbrio e proporção anatômica sob medida',
    description:
      'Avaliação tridimensional da arquitetura da face com planejamento global estruturado. Visa realçar a beleza única, suavizar sombras e harmonizar proporções de forma sutil e sofisticada.',
    duration: '60 a 90 min',
    priceNote: 'Sob consulta após avaliação presencial',
    category: 'Harmonização Global',
    benefits: [
      'Análise personalizada das proporções áureas faciais',
      'Plano de tratamento em etapas respeitando sua individualidade',
      'Resultados naturais sem excessos ou artificialismos',
    ],
    indications: ['Perda de contorno facial', 'Assimetrias', 'Busca por rejuvenescimento integrado'],
    image: '/images/real/real_doctor_01.jpg',
  },
  {
    id: 'preenchimento-acido-hialuronico',
    title: 'Preenchimento com Ácido Hialurônico',
    tagline: 'Lábios, malar, mento e olheiras com acabamento refinado',
    description:
      'Aplicação estratégica de ácido hialurônico de alta biocompatibilidade para restabelecer volumes perdidos, projetar pontos de luz e definir contornos com refinamento cirúrgico e precisão milimétrica.',
    duration: '45 a 60 min',
    priceNote: 'Definido de acordo com o plano facial',
    category: 'Volumização & Contorno',
    benefits: [
      'Hidratação profunda e restauração estrutural',
      'Definição elegante de lábios e maçãs do rosto',
      'Procedimento minimamente invasivo com retorno imediato',
    ],
    indications: ['Lábios finos ou desidratados', 'Olheiras profundas', 'Mento retroposicionado'],
    image: '/images/real/real_treatment_04.jpg',
  },
  {
    id: 'bioestimuladores-colageno',
    title: 'Bioestimuladores de Colágeno',
    tagline: 'Firmeza dérmica progressiva e revitalização tecidual',
    description:
      'Substâncias que estimulam a produção biológica do colágeno autólogo pelo próprio organismo, promovendo melhora gradativa da espessura cutânea, firmeza e sustentação dos tecidos.',
    duration: '45 min',
    priceNote: 'Sob consulta clínica',
    category: 'Firmeza & Estímulo',
    benefits: [
      'Aumento expressivo da densidade e elasticidade da pele',
      'Ação contínua e gradual ao longo de meses',
      'Combate preventivo e curativo da flacidez tissular',
    ],
    indications: ['Flacidez dérmica', 'Perda de elasticidade', 'Prevenção do envelhecimento'],
    image: '/images/real/real_procedure_06.jpg',
  },
  {
    id: 'toxina-botulinica',
    title: 'Toxina Botulínica Preventiva & Reparadora',
    tagline: 'Suavização de linhas de expressão preservando a naturalidade',
    description:
      'Tratamento direcionado à musculatura mímica facial para atenuar rugas dinâmicas da testa, glabela e pés de galinha, mantendo a expressividade elegante e evitando o aspecto estático.',
    duration: '30 a 45 min',
    priceNote: 'Avaliação personalizada',
    category: 'Miopodulação',
    benefits: [
      'Olhar descansado e jovialidade imediata',
      'Prevenção de linhas estáticas permanentes',
      'Preservação total da sua expressividade natural',
    ],
    indications: ['Linhas de expressão na testa', 'Rugas perioculares', 'Bruxismo ou hipertrofia de masseter'],
    image: '/images/real/real_doctor_02.jpg',
  },
  {
    id: 'rinomodelacao-estruturada',
    title: 'Rinomodelação Estruturada',
    tagline: 'Harmonia do perfil nasal sem intervenção cirúrgica',
    description:
      'Correção anatômica não-cirúrgica de pequenas gibas dorsais, elevação sutil da ponta nasal e alinhamento do dorso através de preenchedores selecionados com alto poder de sustentação.',
    duration: '45 min',
    priceNote: 'Sob avaliação técnica prévia',
    category: 'Perfiloplastia',
    benefits: [
      'Refinamento imediato do ângulo nasolabial',
      'Sem repouso cirúrgico ou cicatrizes',
      'Projeção milimetricamente planejada',
    ],
    indications: ['Ponta nasal caída', 'Pequenas irregularidades no dorso nasal', 'Perfil desarmônico'],
    image: '/images/real/real_instapost_03.png',
  },
  {
    id: 'contorno-mandibular',
    title: 'Contorno Mandibular & Mento',
    tagline: 'Definição marcante da linha da mandíbula e transição cervical',
    description:
      'Definição da linha do queixo e ângulo mandibular, criando uma separação nítida e sofisticada entre a face e o pescoço, proporcionando uma estrutura facial mais esculpida.',
    duration: '50 min',
    priceNote: 'Avaliação clínica prévia',
    category: 'Estruturação Óssea',
    benefits: [
      'Linha do pescoço mais alongada e bem delineada',
      'Atenuação da papada por sustentação estrutural',
      'Harmonia equilibrada entre terço superior e inferior',
    ],
    indications: ['Mandíbula indefinida', 'Queixo retraído', 'Perda de sustentação do contorno'],
    image: '/images/real/real_clinic_05.jpg',
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Mariana S.',
    rating: 5,
    comment:
      'A Gabriella tem um olhar único e refinado. O medo de ficar artificial desapareceu na primeira conversa com o planejamento detalhado. O resultado foi natural, elegante e exatamente o que eu desejava.',
    procedureTag: 'Planejamento Full Face',
    date: 'São Paulo',
  },
  {
    id: 'test-2',
    author: 'Camila R.',
    rating: 5,
    comment:
      'Ambiente impecável na Berrini, pontualidade no horário marcado e muita segurança técnica. O conceito de inteligência estética se traduz no cuidado minucioso com cada traço.',
    procedureTag: 'Preenchimento Labial',
    date: 'São Paulo',
  },
  {
    id: 'test-3',
    author: 'Beatriz L.',
    rating: 5,
    comment:
      'Experiência impecável do agendamento até o pós-procedimento. O atendimento individualizado faz toda a diferença para quem busca discrição e sofisticação.',
    procedureTag: 'Bioestimulador de Colágeno',
    date: 'São Paulo',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Consultório & Suíte Berrini',
    subtitle: 'Espaço planejado para conforto e privacidade',
    imageUrl: '/images/real/real_clinic_05.jpg',
    category: 'Espaço',
  },
  {
    id: 'gal-2',
    title: 'Dra. Gabriella Rito',
    subtitle: 'Visão estética e planejamento exclusivo',
    imageUrl: '/images/real/real_doctor_01.jpg',
    category: 'Especialista',
  },
  {
    id: 'gal-3',
    title: 'Harmonização de Precisão',
    subtitle: 'Técnicas avançadas e naturalidade',
    imageUrl: '/images/real/real_treatment_04.jpg',
    category: 'Procedimentos',
  },
  {
    id: 'gal-4',
    title: 'Atendimento Personalizado',
    subtitle: 'Cuidado e atenção em cada detalhe',
    imageUrl: '/images/real/real_doctor_02.jpg',
    category: 'Experiência',
  },
  {
    id: 'gal-5',
    title: 'Conteúdo & Esclarecimentos',
    subtitle: 'Harmonização Facial explicada',
    imageUrl: '/images/real/real_instapost_01.png',
    category: 'Instagram',
  },
  {
    id: 'gal-6',
    title: 'Resultados & Feedbacks',
    subtitle: 'Comentários de pacientes reais',
    imageUrl: '/images/real/real_instapost_02.png',
    category: 'Instagram',
  },
  {
    id: 'gal-7',
    title: 'Estruturação Anatômica',
    subtitle: 'Abordagem equilibrada e sutil',
    imageUrl: '/images/real/real_instapost_03.png',
    category: 'Instagram',
  },
  {
    id: 'gal-8',
    title: 'Procedimentos & Cuidados',
    subtitle: 'Acompanhamento do início ao fim',
    imageUrl: '/images/real/real_instapost_04.png',
    category: 'Instagram',
  },
];

export const availableHoursList = [
  { time: '09:00', period: 'morning' as const, available: true },
  { time: '10:30', period: 'morning' as const, available: true },
  { time: '11:45', period: 'morning' as const, available: false },
  { time: '14:00', period: 'afternoon' as const, available: true },
  { time: '15:30', period: 'afternoon' as const, available: true },
  { time: '17:00', period: 'afternoon' as const, available: true },
  { time: '18:15', period: 'evening' as const, available: true },
];
