
import React, { useState } from 'react';
import { X, Plus, Trash2, Save, Image as ImageIcon, Lock, Check, Shield, Briefcase, LayoutGrid } from 'lucide-react';
import { useApp } from '../App';
import { PortfolioItem, Service, PortfolioExample } from '../types';

type AdminTab = 'general' | 'services';

const AdminDashboard: React.FC = () => {
  const { portfolio, setPortfolio, services, setServices, setIsAdminOpen, language } = useApp();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<AdminTab>('general');
  const [editingItems, setEditingItems] = useState<PortfolioItem[]>([...portfolio]);
  const [editingServices, setEditingServices] = useState<Service[]>([...services]);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(services[0].id);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'mundi2024') {
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta, viajante.');
    }
  };

  const addItem = () => {
    const newItem: PortfolioItem = {
      id: `p-${Date.now()}`,
      title: { pt: 'Novo Projeto', en: 'New Project', de: 'Neues Projekt' },
      category: { pt: 'Categoria', en: 'Category', de: 'Kategorie' },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600'
    };
    setEditingItems([newItem, ...editingItems]);
  };

  const removeItem = (id: string) => {
    setEditingItems(editingItems.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: keyof PortfolioItem, value: any) => {
    setEditingItems(editingItems.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const updateTranslation = (id: string, field: 'title' | 'category', lang: 'pt' | 'en' | 'de', value: string) => {
    setEditingItems(editingItems.map(item => {
      if (item.id === id) {
        return { 
          ...item, 
          [field]: { ...item[field], [lang]: value } 
        };
      }
      return item;
    }));
  };

  // Service Portfolio Management
  const addServiceExample = (serviceId: string) => {
    const newExample: PortfolioExample = {
      title: { pt: 'Exemplo de Serviço', en: 'Service Example', de: 'Servicebeispiel' },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600'
    };
    setEditingServices(editingServices.map(s => {
      if (s.id === serviceId) {
        return { ...s, portfolioExamples: [...(s.portfolioExamples || []), newExample] };
      }
      return s;
    }));
  };

  const removeServiceExample = (serviceId: string, index: number) => {
    setEditingServices(editingServices.map(s => {
      if (s.id === serviceId) {
        const examples = [...s.portfolioExamples];
        examples.splice(index, 1);
        return { ...s, portfolioExamples: examples };
      }
      return s;
    }));
  };

  const updateServiceExample = (serviceId: string, index: number, field: keyof PortfolioExample, value: any) => {
    setEditingServices(editingServices.map(s => {
      if (s.id === serviceId) {
        const examples = [...s.portfolioExamples];
        examples[index] = { ...examples[index], [field]: value };
        return { ...s, portfolioExamples: examples };
      }
      return s;
    }));
  };

  const updateServiceExampleTranslation = (serviceId: string, index: number, lang: 'pt' | 'en' | 'de', value: string) => {
    setEditingServices(editingServices.map(s => {
      if (s.id === serviceId) {
        const examples = [...s.portfolioExamples];
        examples[index] = { 
          ...examples[index], 
          title: { ...examples[index].title, [lang]: value } 
        };
        return { ...s, portfolioExamples: examples };
      }
      return s;
    }));
  };

  const saveChanges = () => {
    setStatus('saving');
    setTimeout(() => {
      setPortfolio(editingItems);
      setServices(editingServices);
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2000);
    }, 800);
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setIsAdminOpen(false)} />
        <div className="relative glass p-10 rounded-[2rem] border border-white/10 w-full max-w-md animate-in zoom-in-95 duration-300">
          <h2 className="text-2xl font-space font-bold text-white mb-6 flex items-center">
            <Lock className="mr-3 text-[#00D4FF]" size={24} />
            Acesso Restrito
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Chave de Acesso</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#00D4FF] transition-all"
                placeholder="Insira o código..."
              />
            </div>
            <button className="w-full bg-[#00D4FF] hover:bg-[#00D4FF]/80 text-black font-bold py-3 rounded-xl transition-all active:scale-95">
              Entrar no Centro de Comando
            </button>
            <p className="text-center text-[10px] text-gray-600">DICA: mundi2024</p>
          </form>
        </div>
      </div>
    );
  }

  const currentService = editingServices.find(s => s.id === selectedServiceId);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setIsAdminOpen(false)} />
      
      <div className="relative w-full max-w-6xl glass border border-white/10 rounded-[2rem] flex flex-col max-h-[90vh] shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#F59E0B] flex items-center justify-center">
              <Shield className="text-white" size={20} />
            </div>
            <div>
              <h2 className="text-xl font-space font-bold text-white uppercase tracking-wider">Centro de Comando</h2>
              <p className="text-[10px] text-[#00D4FF] uppercase tracking-widest">Agência Mundi Admin</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex bg-white/5 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab('general')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'general' ? 'bg-[#00D4FF] text-black' : 'text-gray-400 hover:text-white'}`}
            >
              <LayoutGrid size={14} />
              <span>Geral</span>
            </button>
            <button 
              onClick={() => setActiveTab('services')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'services' ? 'bg-[#00D4FF] text-black' : 'text-gray-400 hover:text-white'}`}
            >
              <Briefcase size={14} />
              <span>Serviços</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            {activeTab === 'general' && (
              <button 
                onClick={addItem}
                className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-xs font-bold text-white transition-all"
              >
                <Plus size={14} />
                <span>Novo Item</span>
              </button>
            )}
            
            <button 
              onClick={saveChanges}
              disabled={status !== 'idle'}
              className={`flex items-center space-x-2 rounded-full px-6 py-2 text-xs font-bold transition-all shadow-lg ${status === 'saved' ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-[#00D4FF] to-[#00A3C4] text-white'}`}
            >
              {status === 'saving' ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : status === 'saved' ? (
                <Check size={14} />
              ) : (
                <Save size={14} />
              )}
              <span>{status === 'saving' ? 'Salvando...' : status === 'saved' ? 'Salvo!' : 'Publicar'}</span>
            </button>
            
            <button 
              onClick={() => setIsAdminOpen(false)}
              className="p-2 rounded-full glass hover:bg-white/10 text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 custom-scrollbar bg-black/20">
          
          {activeTab === 'general' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
              {editingItems.map((item) => (
                <div key={item.id} className="glass border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row gap-8 group hover:border-[#00D4FF]/30 transition-all">
                  {/* Image Preview */}
                  <div className="md:w-1/4">
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 mb-4 group/img">
                      <img src={item.image} alt="Preview" className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40">
                        <ImageIcon className="text-white" size={32} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">URL da Imagem</label>
                      <input 
                        type="text" 
                        value={item.image}
                        onChange={(e) => updateItem(item.id, 'image', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-[10px] text-gray-400 focus:outline-none focus:border-[#00D4FF]"
                      />
                    </div>
                  </div>

                  {/* Data Fields */}
                  <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <label className="block text-[10px] uppercase tracking-widest text-[#00D4FF] font-bold">Títulos</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['pt', 'en', 'de'].map(lang => (
                          <div key={lang}>
                            <span className="text-[9px] text-gray-600 font-bold mb-1 block uppercase">{lang}</span>
                            <input 
                              type="text"
                              value={item.title[lang as 'pt' | 'en' | 'de']}
                              onChange={(e) => updateTranslation(item.id, 'title', lang as any, e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-[#00D4FF]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-[10px] uppercase tracking-widest text-[#F59E0B] font-bold">Categorias</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['pt', 'en', 'de'].map(lang => (
                          <div key={lang}>
                            <span className="text-[9px] text-gray-600 font-bold mb-1 block uppercase">{lang}</span>
                            <input 
                              type="text"
                              value={item.category[lang as 'pt' | 'en' | 'de']}
                              onChange={(e) => updateTranslation(item.id, 'category', lang as any, e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-[#00D4FF]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2 flex justify-end">
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="flex items-center space-x-2 text-red-500 hover:text-red-400 text-[10px] font-bold uppercase tracking-widest transition-colors"
                      >
                        <Trash2 size={12} />
                        <span>Remover Item</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
              {/* Service Selector */}
              <div className="flex flex-wrap gap-2 mb-8">
                {editingServices.map(s => (
                  <button 
                    key={s.id}
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${selectedServiceId === s.id ? 'bg-[#00D4FF]/20 border-[#00D4FF] text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                  >
                    {s.title[language]}
                  </button>
                ))}
              </div>

              {currentService && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-space font-bold text-white flex items-center">
                      <Briefcase className="mr-2 text-[#00D4FF]" size={20} />
                      Exemplos para: {currentService.title[language]}
                    </h3>
                    <button 
                      onClick={() => addServiceExample(currentService.id)}
                      className="flex items-center space-x-2 bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 border border-[#00D4FF]/30 rounded-full px-4 py-2 text-xs font-bold text-[#00D4FF] transition-all"
                    >
                      <Plus size={14} />
                      <span>Adicionar Exemplo</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentService.portfolioExamples.map((example, idx) => (
                      <div key={idx} className="glass border border-white/5 rounded-2xl p-6 group hover:border-[#F59E0B]/30 transition-all">
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 mb-4">
                          <img src={example.image} alt="Preview" className="w-full h-full object-cover opacity-80" />
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">URL da Imagem</label>
                            <input 
                              type="text" 
                              value={example.image}
                              onChange={(e) => updateServiceExample(currentService.id, idx, 'image', e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-[10px] text-gray-400 focus:outline-none focus:border-[#00D4FF]"
                            />
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2">
                            {['pt', 'en', 'de'].map(lang => (
                              <div key={lang}>
                                <span className="text-[9px] text-gray-600 font-bold mb-1 block uppercase">{lang}</span>
                                <input 
                                  type="text"
                                  value={example.title[lang as 'pt' | 'en' | 'de']}
                                  onChange={(e) => updateServiceExampleTranslation(currentService.id, idx, lang as any, e.target.value)}
                                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-[#00D4FF]"
                                />
                              </div>
                            ))}
                          </div>

                          <button 
                            onClick={() => removeServiceExample(currentService.id, idx)}
                            className="flex items-center space-x-2 text-red-500 hover:text-red-400 text-[10px] font-bold uppercase tracking-widest transition-colors"
                          >
                            <Trash2 size={12} />
                            <span>Remover Exemplo</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {currentService.portfolioExamples.length === 0 && (
                    <div className="text-center py-12 text-gray-500 border-2 border-dashed border-white/5 rounded-3xl">
                      Nenhum exemplo cadastrado para este serviço.
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 212, 255, 0.2); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
