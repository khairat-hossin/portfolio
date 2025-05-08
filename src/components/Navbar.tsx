
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-accent">K</span>hairat<span className="text-accent">.</span>
        </Link>
        
        <div className={`md:flex space-x-8 items-center ${isMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-white shadow-lg py-4 space-y-4 space-x-0 md:space-y-0 md:relative md:bg-transparent md:shadow-none md:flex-row md:space-x-8 md:py-0' : 'hidden'}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium hover:text-accent transition">Home</Link>
          <a href="#about" className="text-foreground font-medium hover:text-accent transition">About</a>
          <a href="#skills" className="text-foreground font-medium hover:text-accent transition">Skills</a>
          <a href="#projects" className="text-foreground font-medium hover:text-accent transition">Projects</a>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium hover:text-accent transition">Blog</Link>
          <a href="#contact" className="text-foreground font-medium hover:text-accent transition">Contact</a>
          
          <Button asChild className="bg-accent hover:bg-accent/90 md:ml-8">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
        
        <button className="md:hidden text-foreground p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
