
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/5">
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent to-primary opacity-30 blur-xl"></div>
                <div className="relative z-10 overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Khairat Hossin Working" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <div className="mb-8">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Me</span>
              <h2 className="section-title section-title-large mt-2">FullStack Developer with Problem-Solving Expertise</h2>
            </div>
            
            <p className="text-lg mb-6">
              I am a full-stack web developer with 7+ years of experience in the software industry. 
              I specialize in solving complex, unique, and delicate problems that others struggle with.
            </p>
            
            <p className="text-lg mb-6">
              My services range from R&D to designing and implementing applications. I have strong 
              problem-solving skills with expertise in Laravel, CodeIgniter, Bootstrap, JavaScript, 
              Vue.js, database management, and API integration.
            </p>
            
            <p className="text-lg mb-8">
              I hold a Bachelor's Degree in Computer Science and Engineering with a strong 
              understanding of Algorithms and Data Structures. I prioritize timely delivery and 
              effective communication throughout project development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="border border-border rounded-xl p-6 bg-secondary/30 card-hover">
                <div className="text-3xl font-bold mb-1 text-primary">7+</div>
                <h3 className="text-lg font-medium mb-2">Years Experience</h3>
                <p className="text-muted-foreground">Professional web development expertise</p>
              </div>
              
              <div className="border border-border rounded-xl p-6 bg-secondary/30 card-hover">
                <div className="text-3xl font-bold mb-1 text-primary">50+</div>
                <h3 className="text-lg font-medium mb-2">Projects Delivered</h3>
                <p className="text-muted-foreground">Successfully completed projects</p>
              </div>
              
              <div className="border border-border rounded-xl p-6 bg-secondary/30 card-hover">
                <div className="text-3xl font-bold mb-1 text-primary">10+</div>
                <h3 className="text-lg font-medium mb-2">Technologies</h3>
                <p className="text-muted-foreground">Full-stack tech expertise</p>
              </div>
              
              <div className="border border-border rounded-xl p-6 bg-secondary/30 card-hover">
                <div className="text-3xl font-bold mb-1 text-primary">BSc</div>
                <h3 className="text-lg font-medium mb-2">Computer Science</h3>
                <p className="text-muted-foreground">Strong algorithm & DSA background</p>
              </div>
            </div>
            
            <Button asChild className="group">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Download My Resume
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
