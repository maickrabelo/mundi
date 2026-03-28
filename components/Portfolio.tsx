
import React from 'react';
import { useApp } from '../App';
import { ExternalLink, ZoomIn } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { language, t, portfolio } = useApp();
  const p = t.portfolio;

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-[#F59E0B] uppercase tracking-[0.5em] mb-4">{p.badge[language]}</h2>
            <h3 className="text-4xl md:text-6xl font-space font-bold text-white mb-6">{p.title[language]}</h3>
            <p className="text-gray-400 text-lg">
              {p.subtitle[language]}
            </p>
          </div>
          <div>
            <button className="px-8 py-4 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all flex items-center space-x-2 group font-bold">
              <span>{language === 'pt' ? 'Ver no Behance' : 'View on Behance'}</span>
              <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item) => (
            <div key={item.id} className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden glass border border-white/5 hover:border-[#00D4FF]/30 transition-all duration-500">
              <img 
                src={item.image} 
                alt={item.title[language]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-bold text-[#00D4FF] uppercase tracking-widest mb-2 block">
                    {item.category[language]}
                  </span>
                  <h4 className="text-2xl font-space font-bold text-white mb-4">
                    {item.title[language]}
                  </h4>
                  <div className="flex items-center space-x-4">
                     <button className="p-3 rounded-full bg-white text-black hover:bg-[#00D4FF] transition-colors">
                       <ZoomIn size={20} />
                     </button>
                     <button className="p-3 rounded-full glass border border-white/10 text-white hover:bg-white/20 transition-colors">
                       <ExternalLink size={20} />
                     </button>
                  </div>
                </div>
              </div>

              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] animate-[scan_20s_linear_infinite]" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;