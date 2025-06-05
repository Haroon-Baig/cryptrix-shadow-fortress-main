
import React, { useState, useEffect } from 'react';
import { CircuitBoard, ShieldCheck, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    quote: "Cryptrix transformed our security posture. Their AI detection caught several zero-day vulnerabilities our previous solution missed.",
    author: "Sarah Chen",
    title: "CTO, TechVision Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    quote: "We've reduced security incidents by 85% since implementing Cryptrix across our enterprise network infrastructure.",
    author: "Michael Rodriguez",
    title: "CISO, Global Financial",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    quote: "Their response team is exceptional. When we faced a potential breach, Cryptrix detected, contained and neutralized the threat within minutes.",
    author: "Jessica Ndahimana",
    title: "Security Director, HealthTech",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-24 relative bg-cyber-darker overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzM0MzRjAiIGZpbGwtb3BhY2l0eT0iLjAzIj48cGF0aCBkPSJNMzAgMzBjMC0xNi41NyAxMy40My0zMCAzMC0zMHYzMHoiLz48cGF0aCBkPSJNMzAgMzBjMC0xNi41NyAxMy40My0zMCAzMC0zMHYzMHoiIHRyYW5zZm9ybT0icm90YXRlKDkwIDMwIDMwKSIvPjxwYXRoIGQ9Ik0zMCAzMGMwLTE2LjU3IDEzLjQzLTMwIDMwLTMwdjMweiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDMwIDMwKSIvPjxwYXRoIGQ9Ik0zMCAzMGMwLTE2LjU3IDEzLjQzLTMwIDMwLTMwdjMweiIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDMwIDMwKSIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h6 className="text-cyber-accent font-medium mb-3 uppercase tracking-wider">Testimonials</h6>
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto cyber-text">
            Trusted by Security Professionals
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className={`bg-cyber-blue p-8 cyber-border relative overflow-hidden transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {/* Quote icon */}
            <div className="absolute -top-6 -left-6">
              <div className="w-16 h-16 rounded-full bg-cyber-accent/10 flex items-center justify-center">
                <Quote className="w-8 h-8 text-cyber-accent/30" />
              </div>
            </div>
            
            {/* Circuit board icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <CircuitBoard className="w-24 h-24 text-cyber-accent" />
            </div>
            
            {/* Content */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-cyber-accent shrink-0">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-lg md:text-xl italic mb-4 text-white">
                  "{testimonials[activeIndex].quote}"
                </p>
                
                <div className="flex items-center">
                  <ShieldCheck className="w-4 h-4 text-cyber-accent mr-2" />
                  <div>
                    <h4 className="font-bold text-white">{testimonials[activeIndex].author}</h4>
                    <p className="text-cyber-gray-light text-sm">{testimonials[activeIndex].title}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyber-accent to-transparent opacity-30"></div>
          </Card>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveIndex(index);
                    setIsAnimating(false);
                  }, 500);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-cyber-accent w-6' 
                    : 'bg-cyber-accent/30 hover:bg-cyber-accent/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
