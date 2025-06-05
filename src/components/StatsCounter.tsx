
import React, { useState, useEffect } from 'react';
import { ShieldCheck, KeySquare, CircuitBoard, Globe } from 'lucide-react';

const statItems = [
  {
    icon: ShieldCheck,
    value: 10489,
    prefix: '~',
    label: 'Threats Neutralized Daily',
    suffix: '+',
  },
  {
    icon: KeySquare,
    value: 995,
    prefix: '',
    label: 'Client Systems Protected',
    suffix: '+',
  },
  {
    icon: CircuitBoard,
    value: 99.99,
    prefix: '',
    label: 'Uptime Performance',
    suffix: '%',
  },
  {
    icon: Globe,
    value: 78,
    prefix: '',
    label: 'Countries Served',
    suffix: '',
  },
];

const Counter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = value / 40;
    const timer = setInterval(() => {
      start += increment;
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, duration / 40);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return <span>{count}</span>;
};

const StatsCounter = () => {
  // Track if element is visible in viewport
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={statsRef} className="py-20 bg-cyber-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      
      {/* Top angular edge */}
      <div className="absolute top-[-50px] left-0 right-0 h-[50px] bg-cyber-blue z-10 skewed-top"></div>
      
      {/* Bottom angular edge */}
      <div className="absolute bottom-[-50px] left-0 right-0 h-[50px] bg-cyber-blue z-10 skewed-bottom"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-3xl font-bold text-center mb-12 cyber-text">Security By The Numbers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, index) => (
            <div key={index} className="relative cyber-border bg-cyber-darker/60 rounded-lg p-6 text-center group hover:border-cyber-accent transition-all duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-cyber-blue border border-cyber-accent/40">
                <item.icon className="h-6 w-6 text-cyber-accent group-hover:text-cyber-highlight transition-colors" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mt-6 mb-2 text-white">
                {item.prefix}
                {isVisible ? <Counter value={item.value} /> : 0}
                {item.suffix}
              </h3>
              
              <p className="text-cyber-gray-light">{item.label}</p>
              
              {/* Accent corner */}
              <div className="absolute bottom-0 right-0 w-6 h-6 border-t border-l border-cyber-accent/40 -translate-x-0.5 -translate-y-0.5"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
