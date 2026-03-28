
import React from 'react';
import { ICONS } from '../constants';
import { useLanguage } from '../App';

const Process: React.FC = () => {
  const { language, t } = useLanguage();
  const steps = t.process.steps;

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full glass border border-white/10 flex items-center justify-center mb-6 group-hover:border-blue-500/50 transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-blue-500/20">
                  <div className="text-white opacity-50 group-hover:opacity-100 group-hover:text-blue-400 transition-all">
                    {ICONS[step.icon]}
                  </div>
                </div>
                <h5 className="text-xl font-space font-bold text-white mb-2">{step.title[language]}</h5>
                <p className="text-gray-500 text-sm">{step.desc[language]}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent z-[-1]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
