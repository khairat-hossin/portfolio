
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-28 pb-16 overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Badge variant="outline" className="bg-accent/10 text-accent px-4 py-1 text-sm mb-6">
              Full Stack Developer
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              I Build <span className="text-accent">Digital Solutions</span> That Solve Problems
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-xl">
              With 7+ years of experience, I specialize in solving complex, unique challenges 
              that others find difficult to tackle.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 group">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div>
                <p className="text-4xl font-bold text-accent">7+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <p className="text-4xl font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <p className="text-4xl font-bold text-accent">10+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/5 mt-12 md:mt-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-accent opacity-75 blur-2xl"></div>
              <div className="relative z-10 bg-card rounded-3xl shadow-xl overflow-hidden border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-accent/5 to-primary/5 p-6 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                    alt="Khairat Hossin"
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full overflow-hidden mt-16">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-xs mx-4 text-muted-foreground">PHP</span>
          <span className="text-xs mx-4 text-accent">Laravel</span>
          <span className="text-xs mx-4 text-muted-foreground">CodeIgniter</span>
          <span className="text-xs mx-4 text-accent">Vue.js</span>
          <span className="text-xs mx-4 text-muted-foreground">JavaScript</span>
          <span className="text-xs mx-4 text-accent">MySQL</span>
          <span className="text-xs mx-4 text-muted-foreground">MongoDB</span>
          <span className="text-xs mx-4 text-accent">API Development</span>
          <span className="text-xs mx-4 text-muted-foreground">Bootstrap</span>
          <span className="text-xs mx-4 text-accent">OOP & MVC</span>
          <span className="text-xs mx-4 text-muted-foreground">Payment Integration</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
