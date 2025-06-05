
import React from 'react';
import { Shield, Database, CircuitBoard, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: Shield,
    title: 'AI Threat Detection',
    description: 'Machine learning algorithms that identify and neutralize threats before they can breach your systems.',
  },
  {
    icon: Database,
    title: 'Secure Infrastructure',
    description: 'End-to-end encrypted data storage with multi-layer protections against unauthorized access.',
  },
  {
    icon: CircuitBoard,
    title: 'Vulnerability Analysis',
    description: 'Continuous scanning for weaknesses in your digital architecture with actionable remediation plans.',
  },
  {
    icon: Code,
    title: 'Secure Development',
    description: 'Implementation of security best practices within your development lifecycle.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-cyber-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-cyber-accent font-medium mb-3 uppercase tracking-wider">Our Services</h6>
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto cyber-text">
            Advanced Protection Solutions
          </h2>
          <div className="mt-4 max-w-3xl mx-auto text-cyber-gray-light">
            Our comprehensive security suite combines cutting-edge AI with proven cybersecurity methodologies to protect your digital assets.
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-cyber-darker border-cyber-accent/20 hover:border-cyber-accent/50 relative overflow-hidden group transition-all duration-300"
            >
              {/* Service indicator line */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-cyber-accent group-hover:w-full transition-all duration-500"></div>
              
              <div className="p-6">
                <div className="relative mb-6">
                  <div className="w-12 h-12 rounded shield-hex bg-cyber-blue/20 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-cyber-accent" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-cyber-accent/30"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-cyber-gray-light mb-6">{service.description}</p>
                
                <Button 
                  variant="ghost" 
                  className="px-0 text-cyber-accent hover:text-cyber-highlight hover:bg-transparent group"
                >
                  Learn More 
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </Button>
              </div>
              
              {/* Background accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-cyber-accent/5 rounded-tl-3xl"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
