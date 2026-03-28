
import React from 'react';
import { 
  Palette, 
  Share2, 
  Globe, 
  Layers, 
  Cpu, 
  Zap,
  Rocket,
  ShieldCheck,
  Smartphone,
  Search,
  LineChart,
  Target,
  BarChart
} from 'lucide-react';
import { Service, NavItem, Translations, Language, PortfolioItem } from './types';

export const ASSETS = {
  logo: "https://i.ibb.co/TqtDGNBg/hor-Logo-Ag-ncia-Mundi-f-b-RANCO.png",
  onca: "https://i.ibb.co/0SQ2zyh/ON-A-ASTRO.png"
};

export const NAV_ITEMS: NavItem[] = [
  { label: { pt: 'Início', en: 'Home', de: 'Start' }, href: '#home' },
  { label: { pt: 'Serviços', en: 'Services', de: 'Dienste' }, href: '#services' },
  { label: { pt: 'Portfólio', en: 'Portfolio', de: 'Portfolio' }, href: '#portfolio' },
  { label: { pt: 'Processo', en: 'Process', de: 'Prozess' }, href: '#process' },
  { label: { pt: 'Contato', en: 'Contact', de: 'Kontakt' }, href: '#contact' }
];

export const INITIAL_SERVICES: Service[] = [
  {
    id: 'visual-identity',
    title: { pt: 'Branding & Identidade', en: 'Branding & Identity', de: 'Branding' },
    description: { pt: 'Posicionamento visual estratégico.', en: 'Strategic visual positioning.', de: 'Visuelle Positionierung.' },
    longDescription: { 
      pt: 'Desenvolvemos a essência visual da sua marca com foco em diferenciação competitiva. Utilizamos psicologia do design e semiótica para criar sistemas de marca que transmitem autoridade, confiança e modernidade em todos os pontos de contato.',
      en: 'We develop your brand\'s visual essence focusing on competitive differentiation. We use design psychology to create brand systems that convey authority and trust.',
      de: 'Wir entwickeln die visuelle Essenz Ihrer Marke mit Fokus auf Wettbewerbsdiffernzierung.'
    },
    icon: 'palette',
    color: '#00D4FF',
    features: {
      pt: ['Logo Design Estratégico', 'Brandbook Corporativo', 'Sistemas Visuais Escaláveis', 'Tipografia Exclusiva', 'Direção de Arte'],
      en: ['Strategic Logo Design', 'Corporate Brandbook', 'Scalable Visual Systems', 'Exclusive Typography', 'Art Direction'],
      de: ['Strategisches Logo-Design', 'Brandbook', 'Skalierbare visuelle Systeme', 'Exklusive Typografie', 'Art Direction']
    },
    portfolioExamples: [
      { title: { pt: 'Identidade Corporativa Tech', en: 'Tech Corporate Identity', de: 'Tech-Identität' }, image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600' },
      { title: { pt: 'Rebranding Moderno', en: 'Modern Rebranding', de: 'Modernes Rebranding' }, image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  {
    id: 'social-media',
    title: { pt: 'Social Media Strategy', en: 'Social Media Strategy', de: 'Social Media' },
    description: { pt: 'Presença digital orientada a dados.', en: 'Data-driven digital presence.', de: 'Datengetriebene Präsenz.' },
    longDescription: {
      pt: 'Gestão estratégica de redes sociais focada em crescimento orgânico e autoridade de mercado. Criamos narrativas visuais que conectam sua marca ao público-alvo, utilizando análise de dados para otimizar o engajamento e a conversão.',
      en: 'Strategic social media management focused on organic growth and market authority. We create visual narratives that connect your brand to your target audience.',
      de: 'Strategisches Social-Media-Management mit Fokus auf organisches Wachstum.'
    },
    icon: 'share-2',
    color: '#F59E0B',
    features: {
      pt: ['Planejamento de Conteúdo', 'Performance & Tráfego Pago', 'Gestão de Comunidade', 'Design de Alto Impacto', 'Análise de Métricas IA'],
      en: ['Content Planning', 'Paid Performance Ads', 'Community Management', 'High Impact Design', 'AI Metric Analysis'],
      de: ['Content-Planung', 'Paid Performance', 'Community-Management', 'High Impact Design', 'KI-Metriken']
    },
    portfolioExamples: [
      { title: { pt: 'Campanha de Lançamento', en: 'Launch Campaign', de: 'Launch-Kampagne' }, image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600' },
      { title: { pt: 'Crescimento de Autoridade', en: 'Authority Growth', de: 'Autoritätswachstum' }, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  {
    id: 'web-dev',
    title: { pt: 'Plataformas Web', en: 'Web Platforms', de: 'Web-Plattformen' },
    description: { pt: 'Performance e alta conversão.', en: 'Performance and high conversion.', de: 'Leistung und Konversion.' },
    longDescription: {
      pt: 'Desenvolvimento de ecossistemas web robustos, otimizados para SEO e velocidade de carregamento. Criamos interfaces intuitivas (UX/UI) que guiam o usuário para a conversão, utilizando as stacks tecnológicas mais modernas do mercado.',
      en: 'Development of robust web ecosystems, optimized for SEO and loading speed. We create intuitive interfaces (UX/UI).',
      de: 'Entwicklung robuster Web-Ökosysteme, optimiert für SEO und Ladegeschwindigkeit.'
    },
    icon: 'globe',
    color: '#00FF94',
    features: {
      pt: ['Landing Pages de Performance', 'E-commerce Customizado', 'Sistemas Web Progressivos', 'Integrações de API', 'Otimização Core Web Vitals'],
      en: ['Performance Landing Pages', 'Custom E-commerce', 'Progressive Web Systems', 'API Integrations', 'Core Web Vitals Optimization'],
      de: ['Performance Landing Pages', 'Custom E-Commerce', 'Progressive Web-Systeme', 'API-Integrationen', 'Core Web Vitals']
    },
    portfolioExamples: [
      { title: { pt: 'Dashboard Corporativo', en: 'Corporate Dashboard', de: 'Unternehmens-Dashboard' }, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600' },
      { title: { pt: 'E-commerce High-End', en: 'High-End E-commerce', de: 'High-End E-Commerce' }, image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  {
    id: 'saas-dev',
    title: { pt: 'Engenharia de SaaS', en: 'SaaS Engineering', de: 'SaaS-Engineering' },
    description: { pt: 'Sistemas escaláveis em nuvem.', en: 'Scalable cloud systems.', de: 'Skalierbare Cloud-Systeme.' },
    longDescription: {
      pt: 'Arquitetura de software planejada para alta escala e segurança. Desenvolvemos produtos digitais (SaaS) com foco em experiência do usuário e eficiência operacional, garantindo uma infraestrutura resiliente e segura.',
      en: 'Software architecture planned for high scale and security. We develop digital products (SaaS) focusing on user experience.',
      de: 'Software-Architektur für hohe Skalierbarkeit und Sicherheit.'
    },
    icon: 'layers',
    color: '#FBBF24',
    features: {
      pt: ['Arquitetura Microservices', 'Infraestrutura em Nuvem', 'Segurança de Dados', 'Sistemas de Assinatura', 'Painéis Administrativos'],
      en: ['Microservices Architecture', 'Cloud Infrastructure', 'Data Security', 'Subscription Systems', 'Admin Panels'],
      de: ['Mikroservices', 'Cloud-Infrastruktur', 'Datensicherheit', 'Abonnementsysteme', 'Admin-Panels']
    },
    portfolioExamples: [
      { title: { pt: 'Plataforma B2B', en: 'B2B Platform', de: 'B2B-Plattform' }, image: 'https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=600' },
      { title: { pt: 'Software de Gestão', en: 'Management Software', de: 'Management-Software' }, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  {
    id: 'ai-saas',
    title: { pt: 'Soluções com IA', en: 'AI Solutions', de: 'KI-Lösungen' },
    description: { pt: 'Inteligência aplicada ao negócio.', en: 'Applied business intelligence.', de: 'Angewandte Business-Inteligz.' },
    longDescription: {
      pt: 'Implementação de modelos de Inteligência Artificial para otimização de processos e tomada de decisão. Criamos agentes inteligentes e fluxos automatizados que transformam dados em vantagem competitiva real.',
      en: 'Implementation of AI models for process optimization and decision making. We create intelligent agents.',
      de: 'Implementierung von KI-Modellen zur Prozessoptimierung und Entscheidungshilfe.'
    },
    icon: 'cpu',
    color: '#FFF500',
    features: {
      pt: ['Implementação de LLMs', 'Análise Preditiva de Dados', 'Agentes de Atendimento IA', 'Visão Computacional', 'Automação Inteligente'],
      en: ['LLM Implementation', 'Predictive Data Analysis', 'AI Support Agents', 'Computer Vision', 'Intelligent Automation'],
      de: ['LLM-Implementierung', 'Prädiktive Datenanalyse', 'KI-Support-Agenten', 'Computer Vision', 'Intelligente Automatisierung']
    },
    portfolioExamples: [
      { title: { pt: 'Análise de Dados IA', en: 'AI Data Analysis', de: 'KI-Datenanalyse' }, image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600' },
      { title: { pt: 'Core de Automação', en: 'Automation Core', de: 'Automatisierungskern' }, image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600' }
    ]
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 'p1', title: { pt: 'Ecosystem Tech', en: 'Ecosystem Tech', de: 'Ecosystem Tech' }, category: { pt: 'Desenvolvimento SaaS', en: 'SaaS Development', de: 'SaaS-Entwicklung' }, image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
  { id: 'p2', title: { pt: 'Rebranding Alpha', en: 'Alpha Rebranding', de: 'Alpha Rebranding' }, category: { pt: 'Identidade Visual', en: 'Visual Identity', de: 'Visuelle Identität' }, image: 'https://images.unsplash.com/photo-1635339001026-6194d622ed4b?auto=format&fit=crop&q=80&w=800' },
  { id: 'p3', title: { pt: 'Fintech Portal', en: 'Fintech Portal', de: 'Fintech Portal' }, category: { pt: 'Plataforma Web', en: 'Web Platform', de: 'Web-Plattform' }, image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800' },
  { id: 'p4', title: { pt: 'Insight Analytics', en: 'Insight Analytics', de: 'Insight Analytics' }, category: { pt: 'Inteligência Artificial', en: 'Artificial Intelligence', de: 'Künstliche Inteligz' }, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800' },
  { id: 'p5', title: { pt: 'Sentinel Cloud', en: 'Sentinel Cloud', de: 'Sentinel Cloud' }, category: { pt: 'Software de Segurança', en: 'Security Software', de: 'Sicherheitssoftware' }, image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' },
  { id: 'p6', title: { pt: 'Nexus Interface', en: 'Nexus Interface', de: 'Nexus Interface' }, category: { pt: 'Design de Experiência', en: 'Experience Design', de: 'Erlebnisdesign' }, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
];

export const TRANSLATIONS: Translations = {
  hero: {
    badge: { pt: 'Estratégia & Tecnologia', en: 'Strategy & Technology', de: 'Strategie & Technologie' },
    titlePart1: { pt: 'Agência', en: 'Agency', de: 'Agentur' },
    titlePart2: { pt: 'Mundi.', en: 'Mundi.', de: 'Mundi.' },
    subtitle: { 
      pt: 'Impulsionamos marcas através de design estratégico e soluções avançadas em inteligência artificial. Criamos produtos digitais de alta performance para empresas que buscam liderança.',
      en: 'We drive brands through strategic design and advanced AI solutions. We create high-performance digital products for leaders.',
      de: 'Wir führen Marken durch strategisches Design und KI-Lösungen.'
    },
    cta1: { pt: 'Conhecer Soluções', en: 'See Solutions', de: 'Lösungen Sehen' },
    cta2: { pt: 'Ver Projetos', en: 'View Projects', de: 'Projekte Sehen' },
    stats: [
      { label: { pt: 'Projetos', en: 'Projects', de: 'Projekte' }, value: '250+' },
      { label: { pt: 'Eficiência IA', en: 'AI Efficiency', de: 'KI-Effiziz' }, value: '98%' },
      { label: { pt: 'Performance', en: 'Performance', de: 'Leistung' }, value: '10x' }
    ]
  },
  services: {
    badge: { pt: 'Especialidades', en: 'Expertise', de: 'Expertise' },
    title: { pt: 'Design & Tecnologia', en: 'Design & Technology', de: 'Design & Technologie' },
    subtitle: {
      pt: 'Nossa stack de serviços foca na intersecção entre estética e funcionalidade para garantir resultados escaláveis.',
      en: 'Our service stack focuses on the intersection of aesthetics and functionality to ensure scalable results.',
      de: 'Unser Service-Stack konzentriert sich auf Ästhetik und Funktionalität.'
    },
    closeBtn: { pt: 'Fechar Detalhes', en: 'Close Details', de: 'Details Schließen' },
    projectsTitle: { pt: 'PROJETOS DE REFERÊNCIA', en: 'REFERENCE PROJECTS', de: 'REFERENZPROJEKTE' }
  },
  portfolio: {
    badge: { pt: 'Cases', en: 'Cases', de: 'Cases' },
    title: { pt: 'Projetos Recentes', en: 'Recent Projects', de: 'Aktuelle Projekte' },
    subtitle: {
      pt: 'Soluções desenvolvidas para marcas que buscam inovação e solidez no ecossistema digital.',
      en: 'Solutions developed for brands seeking innovation and solidity in the digital ecosystem.',
      de: 'Lösungen für Marken, die Innovation und Solidität suchen.'
    }
  },
  process: {
    steps: [
      { title: { pt: 'Imersão', en: 'Immersion', de: 'Immersion' }, desc: { pt: 'Entendimento do negócio.', en: 'Business understanding.', de: 'Geschäftsverständnis.' }, icon: 'target' },
      { title: { pt: 'Estratégia', en: 'Strategy', de: 'Strategie' }, desc: { pt: 'Planejamento e arquitetura.', en: 'Planning & architecture.', de: 'Planung & Architektur.' }, icon: 'line-chart' },
      { title: { pt: 'Execução', en: 'Execution', de: 'Ausführung' }, desc: { pt: 'Desenvolvimento ágil.', en: 'Agile development.', de: 'Agile Entwicklung.' }, icon: 'zap' },
      { title: { pt: 'Escala', en: 'Scale', de: 'Skalierung' }, desc: { pt: 'Lançamento e otimização.', en: 'Launch & optimization.', de: 'Start & Optimierung.' }, icon: 'bar-chart' }
    ]
  },
  ctaSection: {
    title: { pt: 'Pronto para elevar seu', en: 'Ready to elevate your', de: 'Bereit, Ihr' },
    titleHighlight: { pt: 'negócio ao próximo nível?', en: 'business to the next level?', de: 'Business zu heben?' },
    subtitle: {
      pt: 'Combinamos inteligência humana e artificial para construir o futuro da sua marca hoje.',
      en: 'We combine human and artificial intelligence to build the future of your brand today.',
      de: 'Wir kombinieren menschliche und künstliche Inteligz.'
    },
    button: { pt: 'Solicitar Diagnóstico Grátis', en: 'Request Free Diagnostic', de: 'Diagnose Anfordern' }
  },
  chat: {
    title: { pt: 'Consultor Mundi IA', en: 'Mundi AI Advisor', de: 'Mundi KI-Berater' },
    status: { pt: 'Online • IA Disponível', en: 'Online • AI Available', de: 'Online • KI Verfügbar' },
    placeholder: { pt: 'Como podemos escalar seu negócio?', en: 'How can we scale your business?', de: 'Wie können wir Ihr Business skalieren?' },
    welcome: { 
      pt: 'Olá. Sou o consultor IA da Mundi. Como posso ajudar com sua estratégia digital hoje?',
      en: 'Hello. I am Mundi\'s AI advisor. How can I help with your digital strategy today?',
      de: 'Hallo. Ich bin der KI-Berater von Mundi.'
    },
    systemInstruction: {
      pt: 'Você é o consultor de negócios da Agência Mundi. Responda de forma profissional, direta e executiva.',
      en: 'You are the business consultant of Mundi Agency. Answer professionally, directly and executive.',
      de: 'Sie sind der Business-Berater der Agentur Mundi.'
    }
  },
  footer: {
    desc: { 
      pt: 'Hub de inovação digital e design estratégico. Projetamos tecnologias focadas em performance e escala.',
      en: 'Digital innovation and strategic design hub. We design technologies focused on performance and scale.',
      de: 'Hub für digitale Innovation und Design.'
    },
    explore: { pt: 'Menu', en: 'Menu', de: 'Menü' },
    connection: { pt: 'Contato', en: 'Contact', de: 'Kontakt' },
    privacy: { pt: 'Privacidade', en: 'Privacy', de: 'Datenschutz' },
    terms: { pt: 'Termos', en: 'Terms', de: 'Bedingungen' }
  }
};

export const ICONS: Record<string, React.ReactNode> = {
  'palette': <Palette className="w-8 h-8" />,
  'share-2': <Share2 className="w-8 h-8" />,
  'globe': <Globe className="w-8 h-8" />,
  'layers': <Layers className="w-8 h-8" />,
  'cpu': <Cpu className="w-8 h-8" />,
  'zap': <Zap className="w-8 h-8" />,
  'rocket': <Rocket className="w-8 h-8" />,
  'shield': <ShieldCheck className="w-8 h-8" />,
  'smartphone': <Smartphone className="w-8 h-8" />,
  'target': <Target className="w-8 h-8" />,
  'line-chart': <LineChart className="w-8 h-8" />,
  'bar-chart': <BarChart className="w-8 h-8" />
};

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
];
