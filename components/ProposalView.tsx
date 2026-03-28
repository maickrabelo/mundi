
import React from 'react';
import { useApp, useLanguage } from '../App';
import { Download, ChevronLeft, CheckCircle2, Globe, Mail, MapPin } from 'lucide-react';
import { ASSETS } from '../constants';

const ProposalView: React.FC = () => {
  const { services, language, setView } = useApp();
  const { t } = useLanguage();

  const handleDownloadPDF = () => {
    const element = document.getElementById('proposal-content');
    if (!element) return;

    const opt = {
      margin: 0,
      filename: `Proposta_Mundi_Agencia_${new Date().getFullYear()}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        backgroundColor: '#030014',
        logging: false,
        letterRendering: true
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // @ts-ignore
    window.html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#030014]">
      {/* Navigation Controls - Hidden during Print/PDF */}
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 no-print">
        <button 
          onClick={() => setView('home')}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group font-bold"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>{language === 'pt' ? 'Voltar ao Site' : 'Back to Website'}</span>
        </button>

        <div className="flex items-center space-x-4">
          <button 
            onClick={handleDownloadPDF}
            className="flex items-center space-x-2 bg-gradient-to-r from-[#00D4FF] to-[#F59E0B] text-black px-8 py-3 rounded-full font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            <Download size={20} />
            <span>{language === 'pt' ? 'Gerar PDF Oficial' : 'Generate Official PDF'}</span>
          </button>
        </div>
      </div>

      {/* Actual PDF Content Area */}
      <div 
        id="proposal-content" 
        className="mx-auto w-full max-w-[210mm] bg-[#030014] text-white overflow-hidden shadow-2xl"
        style={{ minHeight: '297mm' }}
      >
        {/* Cover Page */}
        <div className="p-16 md:p-24 border-b border-white/10 relative h-[297mm] flex flex-col justify-between overflow-hidden">
          {/* Imagem da Onça de fundo na proposta */}
          <img 
            src={ASSETS.onca} 
            alt="" 
            className="absolute top-1/2 right-[-100px] w-[500px] opacity-20 pointer-events-none -translate-y-1/2 grayscale"
          />
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F59E0B]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="flex justify-between items-start relative z-10">
            <img 
              src={ASSETS.logo} 
              alt="Agência Mundi" 
              className="h-14 md:h-20 w-auto brightness-125 object-contain"
            />
            <div className="text-right">
              <p className="text-[#00D4FF] font-bold text-xs uppercase tracking-[0.4em] mb-1">Portfolio & Services</p>
              <p className="text-gray-500 text-xs font-mono">{new Date().getFullYear()} Edition</p>
            </div>
          </div>

          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-space font-extrabold leading-none mb-10">
              MUNDI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#F59E0B]">AGENCY.</span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-2xl leading-relaxed mb-16">
              {t.hero.subtitle[language]}
            </p>
            <div className="h-2 w-32 bg-gradient-to-r from-[#00D4FF] to-[#F59E0B] rounded-full" />
          </div>

          <div className="flex flex-col md:flex-row gap-12 relative z-10 border-t border-white/5 pt-12">
            <div>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-3">Estratégia Digital</p>
              <p className="text-sm text-gray-300">Design Futurista & Soluções em IA</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-3">Missão</p>
              <p className="text-sm text-gray-300">Escalando marcas além do horizonte.</p>
            </div>
          </div>
        </div>

        {/* Services Detail Pages */}
        <div className="p-16 md:p-24 space-y-40">
          {services.map((service, index) => (
            <div key={service.id} className="service-page-block relative">
              {/* Header for service */}
              <div className="flex items-center space-x-6 mb-12">
                <span className="text-6xl font-space font-black text-white/5">0{index + 1}</span>
                <div>
                  <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-2">{service.title[language]}</h2>
                  <div className="h-1 w-20 rounded-full" style={{ backgroundColor: service.color }} />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-5 space-y-10">
                  <div className="space-y-6">
                    <p className="text-xs font-bold text-[#00D4FF] uppercase tracking-[0.3em]">Conceito & Entrega</p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {service.longDescription[language]}
                    </p>
                  </div>

                  <div className="space-y-4">
                     <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-4">Core Features</p>
                     <div className="grid grid-cols-1 gap-4">
                       {service.features[language].map((feature, fIdx) => (
                         <div key={fIdx} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                            <CheckCircle2 size={16} style={{ color: service.color }} className="flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-200">{feature}</span>
                         </div>
                       ))}
                     </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-8">
                  <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest text-right">Projetos de Referência</p>
                  <div className="grid grid-cols-1 gap-8">
                    {service.portfolioExamples.map((example, eIdx) => (
                      <div key={eIdx} className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
                         <div className="aspect-video">
                            <img 
                              src={example.image} 
                              alt={example.title[language]} 
                              className="w-full h-full object-cover opacity-90" 
                            />
                         </div>
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                            <p className="text-[9px] uppercase font-bold text-[#00D4FF] tracking-[0.3em] mb-1">Portfolio Case</p>
                            <h4 className="text-xl text-white font-bold">{example.title[language]}</h4>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact / Back Cover */}
        <div className="p-16 md:p-24 bg-white/5 mt-20 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.03] pointer-events-none select-none uppercase">
            MUNDI
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-4xl font-space font-bold text-white mb-8">Conecte-se com o amanhã.</h3>
            <p className="text-gray-400 mb-16 leading-relaxed">
              Estamos prontos para transformar sua visão em uma realidade digital de alto impacto. 
              Entre em contato para uma consultoria técnica detalhada.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 rounded-3xl bg-black/40 border border-white/5">
                <Mail className="mx-auto mb-4 text-[#00D4FF]" size={24} />
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Email</p>
                <p className="text-white font-bold text-sm">contato@mundi.ag</p>
              </div>
              <div className="p-6 rounded-3xl bg-black/40 border border-white/5">
                <Globe className="mx-auto mb-4 text-[#F59E0B]" size={24} />
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Web</p>
                <p className="text-white font-bold text-sm">www.mundi.ag</p>
              </div>
              <div className="p-6 rounded-3xl bg-black/40 border border-white/5">
                <MapPin className="mx-auto mb-4 text-green-400" size={24} />
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Base</p>
                <p className="text-white font-bold text-sm">São Paulo, Brasil</p>
              </div>
            </div>

            <img 
              src={ASSETS.logo} 
              alt="Agência Mundi" 
              className="h-10 mx-auto opacity-30 grayscale brightness-200"
            />
            <p className="text-[10px] text-gray-700 uppercase tracking-[0.6em] mt-10">
              © {new Date().getFullYear()} AGÊNCIA MUNDI • ALL SYSTEMS NOMINAL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalView;
