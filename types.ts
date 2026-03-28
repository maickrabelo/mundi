
export type Language = 'pt' | 'en' | 'de';

export interface PortfolioExample {
  title: Record<Language, string>;
  image: string;
}

export interface Service {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  longDescription: Record<Language, string>;
  icon: string;
  color: string;
  features: Record<Language, string[]>;
  portfolioExamples: PortfolioExample[];
}

export interface PortfolioItem {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  image: string;
}

export interface NavItem {
  label: Record<Language, string>;
  href: string;
}

export interface Translations {
  hero: {
    badge: Record<Language, string>;
    titlePart1: Record<Language, string>;
    titlePart2: Record<Language, string>;
    subtitle: Record<Language, string>;
    cta1: Record<Language, string>;
    cta2: Record<Language, string>;
    stats: { label: Record<Language, string>; value: string }[];
  };
  services: {
    badge: Record<Language, string>;
    title: Record<Language, string>;
    subtitle: Record<Language, string>;
    closeBtn: Record<Language, string>;
    projectsTitle: Record<Language, string>;
  };
  portfolio: {
    badge: Record<Language, string>;
    title: Record<Language, string>;
    subtitle: Record<Language, string>;
  };
  process: {
    steps: { title: Record<Language, string>; desc: Record<Language, string>; icon: string }[];
  };
  ctaSection: {
    title: Record<Language, string>;
    titleHighlight: Record<Language, string>;
    subtitle: Record<Language, string>;
    button: Record<Language, string>;
  };
  chat: {
    title: Record<Language, string>;
    status: Record<Language, string>;
    placeholder: Record<Language, string>;
    welcome: Record<Language, string>;
    systemInstruction: Record<Language, string>;
  };
  footer: {
    desc: Record<Language, string>;
    explore: Record<Language, string>;
    connection: Record<Language, string>;
    privacy: Record<Language, string>;
    terms: Record<Language, string>;
  };
}
