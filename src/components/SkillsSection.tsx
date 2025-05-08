
import React, { useEffect, useRef } from 'react';
import { Code, Database, Server, Github, Trello, Laptop } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<any>;
  category: string;
}

const skills: Skill[] = [
  // Backend Skills
  { name: "PHP", level: 95, icon: Code, category: "backend" },
  { name: "Laravel", level: 90, icon: Code, category: "backend" },
  { name: "CodeIgniter", level: 92, icon: Code, category: "backend" },
  { name: "MySQL", level: 88, icon: Database, category: "backend" },
  { name: "MongoDB", level: 85, icon: Database, category: "backend" },
  { name: "API Development", level: 90, icon: Server, category: "backend" },
  
  // Frontend Skills
  { name: "HTML/CSS", level: 95, icon: Code, category: "frontend" },
  { name: "Bootstrap", level: 92, icon: Code, category: "frontend" },
  { name: "JavaScript", level: 90, icon: Code, category: "frontend" },
  { name: "jQuery", level: 88, icon: Code, category: "frontend" },
  { name: "Vue.js", level: 85, icon: Code, category: "frontend" },
  
  // Programming Languages
  { name: "C", level: 80, icon: Code, category: "language" },
  { name: "C++", level: 82, icon: Code, category: "language" },
  { name: "Java", level: 75, icon: Code, category: "language" },
  { name: "Python", level: 78, icon: Code, category: "language" },
  
  // Tools & Others
  { name: "Git/GitHub", level: 90, icon: Github, category: "tools" },
  { name: "Trello", level: 85, icon: Trello, category: "tools" },
  { name: "OOP & MVC", level: 92, icon: Laptop, category: "tools" },
  { name: "PayPal Integration", level: 88, icon: Database, category: "payment" },
  { name: "Stripe Integration", level: 86, icon: Database, category: "payment" },
];

const categories = [
  { id: "all", name: "All Skills" },
  { id: "backend", name: "Backend" },
  { id: "frontend", name: "Frontend" },
  { id: "language", name: "Languages" },
  { id: "tools", name: "Tools" },
  { id: "payment", name: "Payment" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const skillsRef = useRef<HTMLDivElement>(null);

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = document.querySelectorAll('.skill-progress');
          elements.forEach(el => {
            el.classList.add('animated');
          });
        }
      });
    }, { threshold: 0.1 });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">My Expertise</span>
          <h2 className="section-title section-title-large mt-2 text-center">Professional Skills</h2>
          <p className="section-subtitle mx-auto">
            With 7+ years of experience, I've mastered various technologies to deliver
            exceptional web solutions and solve complex problems.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-2 bg-white p-1.5 rounded-lg shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === category.id 
                    ? 'bg-accent text-white shadow-md' 
                    : 'hover:bg-secondary'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <Card key={skill.name} className="overflow-hidden card-hover border border-border/50">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="p-2.5 rounded-lg bg-accent/10 text-accent mr-3">
                      <skill.icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <Badge variant="outline" className="bg-primary/5">
                    {skill.level}%
                  </Badge>
                </div>
                
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden skill-progress">
                  <div 
                    className="bg-accent h-full rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-end mt-2">
                  <span className="text-xs text-muted-foreground capitalize">
                    {skill.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
