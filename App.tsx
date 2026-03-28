
import React, { useState, useEffect, createContext, useContext } from 'react';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import ProposalView from './components/ProposalView';
import { Language, PortfolioItem, Service } from './types';
import { TRANSLATIONS, PORTFOLIO as INITIAL_PORTFOLIO, INITIAL_SERVICES } from './constants';

type AppView = 'home' | 'proposal';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof TRANSLATIONS;
  portfolio: PortfolioItem[];
  setPortfolio: React.Dispatch<React.SetStateAction<PortfolioItem[]>>;
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  view: AppView;
  setView: (view: AppView) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

export const useLanguage = () => {
  const { language, setLanguage, t } = useApp();
  return { language, setLanguage, t };
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('pt');
  const [view, setView] = useState<AppView>('home');
  
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem('mundi_portfolio');
    return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO;
  });

  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('mundi_services');
    return saved ? JSON.parse(saved) : INITIAL_SERVICES;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('mundi_portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  useEffect(() => {
    localStorage.setItem('mundi_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    const detectLanguage = () => {
      const browserLang = navigator.language.split('-')[0];
      if (['pt', 'en', 'de'].includes(browserLang)) {
        setLanguage(browserLang as Language);
      }
    };
    detectLanguage();
  }, []);

  return (
    <AppContext.Provider value={{ 
      language, 
      setLanguage, 
      t: TRANSLATIONS, 
      portfolio, 
      setPortfolio,
      services,
      setServices,
      isAdminOpen,
      setIsAdminOpen,
      view,
      setView
    }}>
      <main className="relative selection:bg-[#00D4FF] selection:text-white">
        <SpaceBackground />
        <Navbar />
        
        {view === 'home' ? (
          <div className="relative z-0">
            <Hero />
            
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" />
            
            <Services />
            
            <Portfolio />
            
            <Process />

            {/* Feature Section */}
            <section className="py-20 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase">
                {language === 'pt' ? 'MUNDI' : language === 'de' ? 'GALAXIE' : 'GALAXY'}
              </div>
              <div className="container mx-auto px-6 text-center relative z-10">
                <div className="glass p-12 rounded-[3rem] border border-[#00D4FF]/10 max-w-5xl mx-auto shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-[#F59E0B]/5 rounded-[3rem] pointer-events-none" />
                  <h2 className="text-3xl md:text-5xl font-space font-bold mb-8">
                    {TRANSLATIONS.ctaSection.title[language]} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#F59E0B]">{TRANSLATIONS.ctaSection.titleHighlight[language]}</span>
                  </h2>
                  <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                    {TRANSLATIONS.ctaSection.subtitle[language]}
                  </p>
                  <button className="relative group bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(0,212,255,0.3)]">
                    <span className="relative z-10">{TRANSLATIONS.ctaSection.button[language]}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  </button>
                </div>
              </div>
            </section>
            
            <Footer />
          </div>
        ) : (
          <ProposalView />
        )}

        {isAdminOpen && <AdminDashboard />}
      </main>
    </AppContext.Provider>
  );
};

export default App;
