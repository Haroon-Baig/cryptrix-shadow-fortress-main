
import React from 'react';
import { ShieldCheck, Lock, Server, Key } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-20 bg-cyber-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-cyber-accent font-medium mb-3 uppercase tracking-wider">Why Choose Cryptrix</h6>
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto cyber-text">
            Security Built on Trust
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative bg-cyber-darker p-6 rounded-lg border border-cyber-accent/10">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyber-accent/10 mb-4">
              <ShieldCheck className="w-6 h-6 text-cyber-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">ISO 27001 Certified</h3>
            <p className="text-cyber-gray-light">Adhering to international standards for information security management systems.</p>
            <div className="absolute top-0 right-0 border-t-8 border-r-8 border-cyber-accent/20 w-8 h-8"></div>
          </div>
          
          <div className="relative bg-cyber-darker p-6 rounded-lg border border-cyber-accent/10">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyber-accent/10 mb-4">
              <Lock className="w-6 h-6 text-cyber-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">GDPR Compliant</h3>
            <p className="text-cyber-gray-light">Full adherence to data protection regulations with regular compliance audits.</p>
            <div className="absolute top-0 right-0 border-t-8 border-r-8 border-cyber-accent/20 w-8 h-8"></div>
          </div>
          
          <div className="relative bg-cyber-darker p-6 rounded-lg border border-cyber-accent/10">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyber-accent/10 mb-4">
              <Server className="w-6 h-6 text-cyber-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">99.99% Uptime SLA</h3>
            <p className="text-cyber-gray-light">Ensuring your security systems are always operating and monitoring threats.</p>
            <div className="absolute top-0 right-0 border-t-8 border-r-8 border-cyber-accent/20 w-8 h-8"></div>
          </div>
          
          <div className="relative bg-cyber-darker p-6 rounded-lg border border-cyber-accent/10">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyber-accent/10 mb-4">
              <Key className="w-6 h-6 text-cyber-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">SOC 2 Type II</h3>
            <p className="text-cyber-gray-light">Independent verification of our security, availability, and confidentiality controls.</p>
            <div className="absolute top-0 right-0 border-t-8 border-r-8 border-cyber-accent/20 w-8 h-8"></div>
          </div>
        </div>
        
        <div className="mt-16 bg-cyber-darker border border-cyber-accent/20 rounded-lg p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-accent/5 to-transparent"></div>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-2">Security Partnership</h3>
              <p className="text-cyber-gray-light mb-4">
                At Cryptrix, we don't just sell security products—we form lasting partnerships to protect your most valuable digital assets. Our team works alongside yours, providing continuous support and expertise.
              </p>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-cyber-accent"></span>
                  <span>24/7 Expert Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-cyber-accent"></span>
                  <span>Regular Security Audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-cyber-accent"></span>
                  <span>Threat Intelligence Sharing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-cyber-accent"></span>
                  <span>Customized Security Roadmap</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-cyber-accent/10 border border-cyber-accent/30 flex items-center justify-center p-2">
                <div className="w-full h-full border-4 border-dashed border-cyber-accent/40 rounded-full animate-spin-slow flex items-center justify-center">
                  <ShieldCheck className="w-12 h-12 text-cyber-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
