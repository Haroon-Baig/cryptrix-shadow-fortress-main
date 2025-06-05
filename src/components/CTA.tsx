
import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-cyber-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyber-accent/10 via-transparent to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-40 h-40 border border-cyber-accent/20 rounded-full animate-pulse-glow opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 border border-cyber-accent/10 rounded-full animate-pulse-glow opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <ShieldCheck className="w-8 h-8 text-cyber-accent mr-2" />
            <span className="text-cyber-accent font-bold">PROTECTED BY CRYPTRIX</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 cyber-text">
            Ready to Secure Your Digital Infrastructure?
          </h2>
          
          <p className="text-lg text-cyber-gray-light mb-8">
            Join the growing network of organizations that trust Cryptrix AI to detect, analyze, and neutralize cyber threats in real-time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cyber-accent hover:bg-cyber-highlight text-black px-8 py-6 text-lg group">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-cyber-accent/40 text-white hover:bg-cyber-accent/5 px-8 py-6 text-lg">
              Request Demo
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-cyber-accent/20 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-cyber-gray-light">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyber-accent" />
              <span>30-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyber-accent" />
              <span>24/7 Expert Support</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyber-accent" />
              <span>No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
