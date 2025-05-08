
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-primary/95 text-white py-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-2">
              <span className="text-accent">K</span>hairat<span className="text-accent">.</span>
            </h3>
            <p className="text-white/70 max-w-md">
              Full Stack Developer specializing in solving complex problems with
              efficient and effective solutions.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="text-white/70 hover:text-accent transition">About</a>
                <a href="#skills" className="text-white/70 hover:text-accent transition">Skills</a>
                <a href="#projects" className="text-white/70 hover:text-accent transition">Projects</a>
                <a href="#contact" className="text-white/70 hover:text-accent transition">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-accent/80 p-3 rounded-full text-white transition-colors" aria-label="Github">
                  <Github size={20} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-accent/80 p-3 rounded-full text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:contact@khairathossin.com" className="bg-white/10 hover:bg-accent/80 p-3 rounded-full text-white transition-colors" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Khairat Hossin. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop} 
            className="mt-4 md:mt-0 bg-accent/20 hover:bg-accent/40 text-white p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
