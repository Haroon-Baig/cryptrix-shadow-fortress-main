
import React from 'react';
import { Shield, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-cyber-darker pt-16 pb-8 border-t border-cyber-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-cyber-accent" />
              <span className="text-xl font-bold text-white">CRYPTRIX</span>
            </div>
            <p className="text-cyber-gray-light mb-6">
              Advanced AI-powered cybersecurity solutions to protect your digital infrastructure against evolving threats.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyber-gray-light hover:text-cyber-accent">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyber-gray-light hover:text-cyber-accent">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyber-gray-light hover:text-cyber-accent">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyber-gray-light hover:text-cyber-accent">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyber-gray-light hover:text-cyber-accent">Threat Detection</a></li>
              <li><a href="#" className="text-cyber-gray-light hover:text-cyber-accent">Vulnerability Assessment</a></li>
              <li><a href="#" className="text-cyber-gray-light hover:text-cyber-accent">Security Audits</a></li>
              <li><a href="#" className="text-cyber-gray-light hover:text-cyber-accent">Incident Response</a></li>
              <li><a href="#" className="text-cyber-gray-light hover:text-cyber-accent">Managed Security</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyber-gray-light hover:text-cyber-accent">About Us</a></li>
              <li><a href="#" className="text-cyber-gray-light hover:text-cyber-accent">Careers</a></li>
              <li><a href="#" className="text-cyber-gray-light hover:text-cyber-accent">Partners</a></li>
              <li><a href="#" className="text-cyber-gray-light hover:text-cyber-accent">Blog</a></li>
              <li><a href="#" className="text-cyber-gray-light hover:text-cyber-accent">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Stay Updated</h3>
            <p className="text-cyber-gray-light mb-4">
              Subscribe to our security bulletin for the latest threat intelligence.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-cyber-blue border border-r-0 border-cyber-accent/20 rounded-l text-white px-3 py-2 w-full focus:outline-none focus:border-cyber-accent"
                />
                <Button className="bg-cyber-accent hover:bg-cyber-highlight text-black rounded-l-none">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-cyber-gray-light">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-cyber-accent/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cyber-gray-light text-sm">
            &copy; {new Date().getFullYear()} Cryptrix Security. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-cyber-gray-light hover:text-cyber-accent text-sm">Privacy Policy</a>
            <a href="#" className="text-cyber-gray-light hover:text-cyber-accent text-sm">Terms of Service</a>
            <a href="#" className="text-cyber-gray-light hover:text-cyber-accent text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
