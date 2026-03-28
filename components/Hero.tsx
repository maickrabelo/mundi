
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../App';
import { ASSETS } from '../constants';

const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const hero = t.hero;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 lg:pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Lado do Texto */}
        <div className="z-10 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 glass rounded-full border border-[#00D4FF]/30 mb-8 mx-auto lg:mx-0">
            <Star className="w-3.5 h-3.5 text-[#00D4FF] fill-[#00D4FF]" />
            <span className="text-[10px] font-black text-[#00D4FF] uppercase tracking-[0.3em]">{hero.badge[language]}</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-space font-extrabold leading-[1.1] mb-8">
            <span className="text-white">{hero.titlePart1[language]}</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#00D4FF] to-[#F59E0B]">{hero.titlePart2[language]}</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-400 max-w-lg mb-12 leading-relaxed opacity-80 mx-auto lg:mx-0">
            {hero.subtitle[language]}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button className="group relative bg-[#CCFF00] hover:bg-white text-black px-10 py-5 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(204,255,0,0.2)] flex items-center justify-center">
              {hero.cta1[language]} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-full font-bold text-lg border border-white/10 text-white hover:bg-white/5 transition-all glass">
              {hero.cta2[language]}
            </button>
          </div>

          <div className="mt-16 lg:mt-20 grid grid-cols-3 gap-6 lg:gap-12 border-t border-white/5 pt-12">
            {hero.stats.map((stat) => (
              <div key={stat.label[language]}>
                <div className="text-2xl lg:text-3xl font-space font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[9px] lg:text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">{stat.label[language]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lado Visual (Onça e Orbe) */}
        <div className="relative flex items-center justify-center lg:block">
          <div className="relative w-[320px] h-[320px] lg:w-[550px] lg:h-[550px] mx-auto flex items-center justify-center transition-all duration-500">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00D4FF]/20 via-transparent to-[#F59E0B]/10 blur-[80px] lg:blur-[120px] animate-pulse" />
            
            <div className="relative w-[280px] h-[280px] lg:w-[450px] lg:h-[450px] group">
              <div className="absolute inset-0 rounded-full glass border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,212,255,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                  alt="Global Tech" 
                  className="w-full h-full object-cover opacity-20 grayscale scale-110 group-hover:scale-125 transition-all duration-[3000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/40 to-[#030014]/90" />
              </div>

              <img 
                src={ASSETS.onca} 
                alt="Mundi Performance" 
                className="absolute -top-24 lg:-top-40 left-[10%] lg:left-[5%] -translate-x-1/2 w-[400px] lg:w-[600px] max-w-none h-auto z-30 animate-[float_6s_ease-in-out_infinite] drop-shadow-[20px_30px_50px_rgba(0,0,0,1)] lg:drop-shadow-[40px_60px_80px_rgba(0,0,0,1)] pointer-events-none"
              />

              <div className="absolute -bottom-10 lg:-bottom-16 left-0 w-full text-center z-40 pointer-events-none">
                <div className="text-[9px] lg:text-[11px] font-space font-bold tracking-[0.5em] lg:tracking-[0.8em] text-[#F59E0B] uppercase opacity-60">AGÊNCIA MUNDI • GLOBAL HQ</div>
                <div className="h-[1px] w-12 lg:w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-3 lg:mt-4" />
              </div>
            </div>

            <div className="absolute inset-[-10px] lg:inset-[-20px] rounded-full border border-white/[0.02] animate-[spin_50s_linear_infinite] pointer-events-none" />
            <div className="absolute inset-[-20px] lg:inset-[-40px] rounded-full border border-white/[0.01] animate-[spin_35s_linear_infinite_reverse] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
