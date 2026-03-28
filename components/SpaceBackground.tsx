
import React, { useEffect, useRef } from 'react';

const SpaceBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const count = 150;
    const container = containerRef.current;
    
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 3 + 'px';
      star.style.width = size;
      star.style.height = size;
      
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      
      star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
      star.style.animationDelay = Math.random() * 5 + 's';
      
      container.appendChild(star);
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030014]">
      {/* Stars Layer */}
      <div ref={containerRef} className="absolute inset-0" />
      
      {/* Nebula Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-orange-900/10 blur-[120px]" />
      <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-yellow-900/5 blur-[100px]" />
      
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
    </div>
  );
};

export default SpaceBackground;