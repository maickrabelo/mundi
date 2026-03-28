
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { useLanguage } from '../App';

const ChatInterface: React.FC = () => {
  const { language, t } = useLanguage();
  const c = t.chat;

  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: c.welcome[language] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    setMessages([{ role: 'assistant', text: c.welcome[language] }]);
  }, [language]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: c.systemInstruction[language] + ' Você é o consultor galáctico da Agência Mundi. Sua voz é inspiradora, futurista e persuasiva.',
        }
      });

      const aiText = response.text || 'Error link failed.';
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', text: 'Error: Connection lost.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-chat" className="py-24 bg-gradient-to-b from-transparent to-black/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass rounded-3xl border border-[#00D4FF]/20 overflow-hidden shadow-2xl">
          <div className="bg-[#00D4FF]/5 p-6 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#F59E0B] flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold">{c.title[language]}</h4>
                <p className="text-xs text-[#00D4FF] uppercase tracking-widest font-bold">{c.status[language]}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
            </div>
          </div>

          <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 space-y-6 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[80%] space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-[#00D4FF]' : 'bg-gray-800'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-gradient-to-br from-[#00D4FF] to-[#00A3C4] text-white rounded-tr-none shadow-[0_0_15px_rgba(0,212,255,0.2)]' : 'glass text-gray-200 rounded-tl-none border-white/10'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <Loader2 size={16} className="animate-spin text-[#00D4FF]" />
                  </div>
                  <div className="glass p-4 rounded-2xl text-sm text-gray-400 border-white/10 rounded-tl-none italic">
                    Processando...
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-white/5">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={c.placeholder[language]}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-white focus:outline-none focus:border-[#00D4FF] transition-all placeholder:text-gray-600"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center hover:bg-[#00D4FF] hover:text-white transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;