
import React, { useRef, useEffect } from 'react';
import { Globe, Shield, Lock, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const globeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create random threat detection pings
    const createPing = () => {
      if (!globeRef.current) return;
      
      // Create ping element
      const ping = document.createElement('div');
      
      // Random position
      const posX = Math.random() * 80 + 10; // 10-90%
      const posY = Math.random() * 80 + 10; // 10-90%
      
      // Apply styles
      ping.className = 'absolute w-3 h-3 rounded-full bg-cyber-warning';
      ping.style.left = `${posX}%`;
      ping.style.top = `${posY}%`;
      
      // Add to globe
      globeRef.current.appendChild(ping);
      
      // Add ping animation after a small delay to ensure rendering
      setTimeout(() => {
        ping.className = 'absolute w-3 h-3 rounded-full bg-cyber-warning before:absolute before:inset-0 before:rounded-full before:bg-cyber-warning before:animate-ping-slow';
      }, 10);
      
      // Remove ping after animation completes
      setTimeout(() => {
        if (ping && ping.parentNode === globeRef.current) {
          globeRef.current.removeChild(ping);
        }
      }, 3000);
    };
    
    // Start interval for creating pings
    const pingInterval = setInterval(createPing, 1000);
    
    // Clean up interval
    return () => clearInterval(pingInterval);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyber-accent/5 clip-path-angular z-0"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 md:pr-12">
          <div className="inline-block border border-cyber-accent/30 rounded bg-cyber-darker/50 px-4 py-1 text-sm text-cyber-accent font-medium">
            AI-Powered Cybersecurity
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight cyber-text">
            Next Generation <br />Security Defense
          </h1>
          <p className="text-lg text-cyber-gray-light">
            Cryptrix leverages artificial intelligence to detect, analyze, and neutralize threats in real-time, providing unparalleled protection for your digital infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-cyber-accent hover:bg-cyber-highlight text-black px-8 py-6 text-lg">
              Get Protected
            </Button>
            <Button variant="outline" className="border-cyber-accent/40 text-white hover:bg-cyber-accent/5 px-8 py-6 text-lg">
              See Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyber-accent" />
              <span>24/7 Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-cyber-accent" />
              <span>Encrypted Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-cyber-accent" />
              <span>Secure Infrastructure</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Rotating globe effect */}
            <div 
              ref={globeRef}
              className="absolute inset-0 rounded-full border-2 border-cyber-accent/30 animate-rotate-slow"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'smallGrid\' width=\'10\' height=\'10\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 10 0 L 0 0 0 10\' fill=\'none\' stroke=\'rgba(51, 195, 240, 0.3)\' stroke-width=\'0.5\'/%3E%3C/pattern%3E%3Cpattern id=\'grid\' width=\'50\' height=\'50\' patternUnits=\'userSpaceOnUse\'%3E%3Crect width=\'50\' height=\'50\' fill=\'url(%23smallGrid)\'/%3E%3Cpath d=\'M 50 0 L 0 0 0 50\' fill=\'none\' stroke=\'rgba(51, 195, 240, 0.5)\' stroke-width=\'1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\' /%3E%3C/svg%3E")'
              }}
            >
              {/* Threat pings will be dynamically added here */}
            </div>
            
            {/* Glowing core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-cyber-accent/20 animate-pulse-glow flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-cyber-accent"></div>
              </div>
            </div>
            
            {/* Outer rings */}
            <div className="absolute inset-0 border-4 border-dashed border-cyber-accent/10 rounded-full"></div>
            <div className="absolute inset-[-15px] border border-cyber-accent/20 rounded-full"></div>
            <div className="absolute inset-[-30px] border border-cyber-accent/10 rounded-full"></div>
          </div>
          
          {/* Status indicators */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-cyber-darker/80 backdrop-blur-sm border border-cyber-accent/30 rounded-lg p-3 text-xs">
            <div>Status: <span className="text-cyber-accent">ACTIVE MONITORING</span></div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-accent"></span>
              </span>
              <span>Live</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom design element */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cyber-darker to-transparent"></div>
    </section>
  );
};

export default HeroSection;
