
import React from 'react';
import { Mail, Github, Instagram, Linkedin, Globe, Shield } from 'lucide-react';
import { useApp } from '../App';

const Footer: React.FC = () => {
  const { language, t, setIsAdminOpen } = useApp();
  const f = t.footer;

  return (
    <footer id="contact" className="pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://i.ibb.co/TqtDGNBg/hor-Logo-Ag-ncia-Mundi-f-b-RANCO.png" 
                alt="Agência Mundi" 
                className="h-16 md:h-20 w-auto object-contain brightness-110 contrast-125 block"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent && !parent.querySelector('.fallback-logo')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-logo w-12 h-12 bg-gradient-to-tr from-[#00D4FF] to-[#F59E0B] rounded-lg flex items-center justify-center';
                    fallback.innerHTML = '<span class="text-white font-bold text-xl">M</span>';
                    parent.prepend(fallback);
                  }
                }}
              />
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              {f.desc[language]}
            </p>
            <div className="flex space-x-4">
              {[Instagram, Linkedin, Github, Globe].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h6 className="text-white font-bold mb-6">{f.explore[language]}</h6>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#services" className="hover:text-orange-400">Services</a></li>
              <li><a href="#process" className="hover:text-orange-400">Stack</a></li>
              <li><a href="#" className="hover:text-orange-400">Cases</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-bold mb-6">{f.connection[language]}</h6>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="flex items-center"><Mail size={16} className="mr-2 text-orange-400" /> contato@mundi.ag</li>
              <li>Sede Galáctica: São Paulo, BR</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5">
          <p className="text-gray-600 text-xs mb-4 md:mb-0">
            &copy; 2024 Agência Mundi. Design by the future.
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-6 text-gray-600 text-xs uppercase tracking-widest">
              <a href="#" className="hover:text-white">{f.privacy[language]}</a>
              <a href="#" className="hover:text-white">{f.terms[language]}</a>
            </div>
            {/* Admin entry point - subtle */}
            <button 
              onClick={() => setIsAdminOpen(true)}
              className="w-6 h-6 rounded-full flex items-center justify-center text-gray-800 hover:text-gray-400 transition-colors"
              title="Acesso Administrativo"
            >
              <Shield size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
