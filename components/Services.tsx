
import React, { useState } from 'react';
import { ICONS } from '../constants';
import { ArrowUpRight, Search } from 'lucide-react';
import { useApp, useLanguage } from '../App';
import ServiceModal from './ServiceModal';
import { Service } from '../types';

const Services: React.FC = () => {
  const { language, t } = useLanguage();
  const { services } = useApp();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const s = t.services;

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#00D4FF] uppercase tracking-[0.5em] mb-4">{s.badge[language]}</h2>
          <h3 className="text-4xl md:text-6xl font-space font-bold text-white mb-6">{s.title[language]}</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {s.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              onClick={() => setSelectedService(service)}
              className={`group cursor-pointer relative p-8 glass rounded-[2rem] border border-white/5 hover:border-[#00D4FF]/30 transition-all duration-500 hover:-translate-y-2 ${idx === 4 ? 'lg:col-span-2' : ''}`}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[2rem]" 
                style={{ background: `linear-gradient(135deg, #00D4FF, #F59E0B)` }}
              />
              
              <div className="relative z-10">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                >
                  {ICONS[service.icon]}
                </div>
                
                <h4 className="text-2xl font-space font-bold text-white mb-4 flex items-center group-hover:text-[#00D4FF] transition-colors">
                  {service.title[language]}
                  <ArrowUpRight className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-300" />
                </h4>
                
                <p className="text-gray-400 mb-8 leading-relaxed line-clamp-2">
                  {service.longDescription[language]}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {service.features[language].slice(0, 3).map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border border-black glass flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#F59E0B]" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#00D4FF] uppercase tracking-widest flex items-center">
                    Ver Detalhes <Search size={12} className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
};

export default Services;
