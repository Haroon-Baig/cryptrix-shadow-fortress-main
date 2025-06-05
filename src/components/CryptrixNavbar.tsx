
import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const CryptrixNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-cyber-darker/95 border-b border-cyber-accent/20 backdrop-blur-sm py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-white">
          <Shield size={28} className="text-cyber-accent" />
          <span className="text-xl tracking-tight">CRYPTRIX</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-cyber-accent transition-colors">
            Solutions
          </a>
          <a href="#" className="text-white hover:text-cyber-accent transition-colors">
            Technologies
          </a>
          <a href="#" className="text-white hover:text-cyber-accent transition-colors">
            Testimonials
          </a>
          <a href="#" className="text-white hover:text-cyber-accent transition-colors">
            About
          </a>
          <Button className="bg-cyber-accent hover:bg-cyber-highlight text-black font-medium">
            Get Protected
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-cyber-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-cyber-darker border-y border-cyber-accent/20 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-cyber-accent transition-colors py-2">
              Solutions
            </a>
            <a href="#" className="text-white hover:text-cyber-accent transition-colors py-2">
              Technologies
            </a>
            <a href="#" className="text-white hover:text-cyber-accent transition-colors py-2">
              Testimonials
            </a>
            <a href="#" className="text-white hover:text-cyber-accent transition-colors py-2">
              About
            </a>
            <Button className="bg-cyber-accent hover:bg-cyber-highlight text-black font-medium w-full">
              Get Protected
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default CryptrixNavbar;
