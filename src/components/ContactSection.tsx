
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Contact Me</span>
          <h2 className="section-title section-title-large mt-2 text-center">Let's Work Together</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or need help solving a complex problem? 
            I'm currently accepting new projects and would love to hear from you.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="space-y-8">
              <Card className="overflow-hidden card-hover border-0 shadow-md">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-accent/10 p-4 rounded-full text-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-muted-foreground">contact@khairathossin.com</p>
                    <a href="mailto:contact@khairathossin.com" className="text-sm text-accent mt-1 inline-flex items-center hover:underline">
                      Send an email
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden card-hover border-0 shadow-md">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-accent/10 p-4 rounded-full text-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <p className="text-muted-foreground">+1 (123) 456-7890</p>
                    <a href="tel:+11234567890" className="text-sm text-accent mt-1 inline-flex items-center hover:underline">
                      Call me
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden card-hover border-0 shadow-md">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-accent/10 p-4 rounded-full text-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Location</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                    <span className="text-sm text-accent mt-1 inline-flex items-center">
                      Available for remote work
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="border-border/50 focus:border-accent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="border-border/50 focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="border-border/50 focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={6}
                      required
                      className="border-border/50 focus:border-accent"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
