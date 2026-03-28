
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, LANGUAGES, ASSETS } from '../constants';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage, useApp } from '../App';

const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { setView, view } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToHome = () => {
    setView('home');
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[150] transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-full px-8 py-3 flex items-center justify-between border border-white/10 transition-all duration-300 ${isScrolled ? 'mx-4 lg:mx-20' : ''}`}>
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={navigateToHome} className="block hover:scale-105 transition-transform outline-none">
              <img 
                src={ASSETS.logo} 
                alt="Agência Mundi" 
                className="h-10 md:h-12 w-auto object-contain brightness-110 contrast-125 block"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent && !parent.querySelector('.fallback-logo')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-logo w-10 h-10 bg-gradient-to-tr from-[#00D4FF] to-[#F59E0B] rounded-lg transform rotate-45 flex items-center justify-center';
                    fallback.innerHTML = '<span class="text-white font-bold text-lg -rotate-45">M</span>';
                    parent.prepend(fallback);
                  }
                }}
              />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {view === 'home' ? (
              NAV_ITEMS.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {item.label[language]}
                </a>
              ))
            ) : (
              <button 
                onClick={navigateToHome}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {language === 'pt' ? 'Voltar ao Início' : 'Back to Home'}
              </button>
            )}

            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-400 hover:text-white transition-colors bg-white/5 px-3 py-1 rounded-full border border-white/10"
              >
                <Globe size={14} className="mr-1" />
                <span>{language.toUpperCase()}</span>
                <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 glass rounded-xl border border-white/10 overflow-hidden shadow-xl py-2 animate-in fade-in zoom-in-95">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-xs font-bold hover:bg-white/10 transition-colors flex items-center justify-between ${language === lang.code ? 'text-orange-400' : 'text-gray-400'}`}
                    >
                      <span>{lang.label}</span>
                      <span>{lang.flag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-orange-400 transition-all">
              {language === 'pt' ? 'Bora Decolar?' : language === 'de' ? 'Bereit?' : 'Let\'s Go?'}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass mt-2 p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
          <button onClick={navigateToHome} className="text-lg font-medium text-gray-400 hover:text-white text-left">
            {language === 'pt' ? 'Início' : 'Home'}
          </button>
          
          <div className="flex space-x-4 py-2 border-t border-white/5">
             {LANGUAGES.map((lang) => (
                <button 
                  key={lang.code} 
                  onClick={() => setLanguage(lang.code)}
                  className={`text-sm ${language === lang.code ? 'text-orange-400 font-bold' : 'text-gray-500'}`}
                >
                  {lang.label}
                </button>
             ))}
          </div>
          <button className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            {language === 'pt' ? 'Contato' : 'Contact'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
