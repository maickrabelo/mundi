
import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Service } from '../types';
import { useLanguage } from '../App';
import { ICONS } from '../constants';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const { language, t } = useLanguage();

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-[#030014]/95 backdrop-blur-2xl" 
        onClick={onClose} 
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl glass border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500 flex flex-col lg:flex-row max-h-[95vh]">
        
        {/* Animated Side Panel */}
        <div 
          className="lg:w-[35%] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden"
          style={{ backgroundColor: `${service.color}08` }}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[120px]" style={{ backgroundColor: service.color }} />
          </div>
          
          <div 
            className="w-28 h-28 rounded-[2.5rem] flex items-center justify-center mb-10 relative z-10 shadow-2xl border border-white/5"
            style={{ backgroundColor: `${service.color}15`, color: service.color }}
          >
            {ICONS[service.icon]}
          </div>
          
          <h2 className="text-4xl font-space font-extrabold text-white relative z-10 tracking-tight leading-tight">
            {service.title[language]}
          </h2>
          
          <div className="mt-6 h-1 w-16 rounded-full mx-auto" style={{ backgroundColor: service.color }} />
          
          <div className="mt-20 relative z-10">
            <p className="text-gray-500 text-xs uppercase tracking-[0.5em] font-black opacity-60">MUNDI GALAXY</p>
          </div>
        </div>

        {/* Info Panel */}
        <div className="lg:w-[65%] p-8 lg:p-20 overflow-y-auto custom-scrollbar bg-black/30">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-3 rounded-full glass hover:bg-white/10 transition-all z-20 group"
          >
            <X size={20} className="text-white group-hover:rotate-90 transition-transform" />
          </button>

          <div className="space-y-16">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features[language].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-5 rounded-2xl bg-[#ffffff03] border border-white/[0.04] group hover:border-white/[0.1] transition-all">
                  <div className="flex-shrink-0">
                    <CheckCircle2 size={20} style={{ color: service.color }} />
                  </div>
                  <span className="text-gray-200 text-sm font-semibold tracking-wide">{feature}</span>
                </div>
              ))}
            </div>

            {/* Success Cases Section */}
            <div>
              <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-10">
                {t.services.projectsTitle[language]}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.portfolioExamples.map((example, idx) => (
                  <div key={idx} className="group relative rounded-[2.5rem] overflow-hidden aspect-[1.4/1] border border-white/[0.08] shadow-2xl">
                    <img 
                      src={example.image} 
                      alt={example.title[language]} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform">{example.title[language]}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Action */}
            <div className="pt-10">
              <button 
                className="w-full py-6 rounded-3xl font-black text-lg transition-all hover:scale-[1.01] active:scale-[0.98] shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center space-x-3 group relative overflow-hidden"
                style={{ backgroundColor: service.color, color: '#000' }}
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                <span className="relative z-10">Solicitar Orçamento</span>
                <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-center text-gray-600 text-[10px] font-bold mt-6 uppercase tracking-[0.5em] opacity-60">
                TEMPO DE RESPOSTA MÉDIO: &lt; 24H
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default ServiceModal;
