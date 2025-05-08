
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with Laravel, MySQL and advanced payment integration. Features include product filtering, user authentication, and payment processing.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Laravel", "MySQL", "Bootstrap", "Stripe"],
    demoUrl: "#",
    codeUrl: "#",
    category: "fullstack"
  },
  {
    id: 2,
    title: "CRM System",
    description: "A customized business management CRM built with CodeIgniter and MySQL. Includes customer management, invoice generation, and reporting features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    tags: ["CodeIgniter", "MySQL", "JavaScript", "jQuery"],
    demoUrl: "#",
    codeUrl: "#",
    category: "backend"
  },
  {
    id: 3,
    title: "Real Estate Portal",
    description: "A comprehensive real estate listing application with property search, filtering, and agent management built using Laravel and Vue.js.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    tags: ["Laravel", "Vue.js", "Bootstrap", "MySQL"],
    demoUrl: "#",
    codeUrl: "#",
    category: "fullstack"
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "An advanced inventory tracking system with barcode scanning, stock alerts, and sales reporting developed with Laravel and JavaScript.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    tags: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    demoUrl: "#",
    codeUrl: "#",
    category: "fullstack"
  },
];

const categories = [
  { name: "all", label: "All Projects" },
  { name: "frontend", label: "Frontend" },
  { name: "backend", label: "Backend" },
  { name: "fullstack", label: "Full Stack" }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Portfolio</span>
          <h2 className="section-title section-title-large mt-2 text-center">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of my recent development work showcasing my technical skills 
            and problem-solving approach.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-2 bg-secondary/50 p-1.5 rounded-lg shadow-sm">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === category.name 
                    ? 'bg-primary text-white shadow-md' 
                    : 'hover:bg-white'
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-0 shadow-md rounded-xl card-hover">
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="bg-accent hover:bg-accent/90 gap-2">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Link className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <a href="#" className="px-8">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
