
import React from 'react';
import Navbar from '@/components/Navbar';
import { Book } from 'lucide-react';

const BlogCard = ({ title, date, excerpt, category }: { 
  title: string; 
  date: string; 
  excerpt: string; 
  category: string;
}) => {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden card-hover">
      <div className="h-48 bg-muted flex items-center justify-center">
        <Book size={64} className="text-accent/30" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full font-medium">
            {category}
          </span>
          <span className="text-muted-foreground text-sm">
            {date}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <button className="text-accent font-medium hover:underline">
          Read More →
        </button>
      </div>
    </div>
  );
};

const BlogPage = () => {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React and TypeScript",
      date: "June 15, 2024",
      excerpt: "Learn how to set up a new project with React and TypeScript to build type-safe applications.",
      category: "Development"
    },
    {
      id: 2,
      title: "The Power of Tailwind CSS",
      date: "May 28, 2024",
      excerpt: "Discover how Tailwind CSS can help you build beautiful interfaces without writing custom CSS.",
      category: "Design"
    },
    {
      id: 3,
      title: "Building Accessible Web Applications",
      date: "April 10, 2024",
      excerpt: "Tips and best practices for creating web applications that everyone can use.",
      category: "Accessibility"
    },
    {
      id: 4,
      title: "State Management in Modern React",
      date: "March 22, 2024",
      excerpt: "Comparing different state management solutions for your React applications.",
      category: "Development"
    },
    {
      id: 5,
      title: "Responsive Design Strategies",
      date: "February 15, 2024",
      excerpt: "Techniques for creating websites that work well on all devices and screen sizes.",
      category: "Design"
    },
    {
      id: 6,
      title: "Web Performance Optimization",
      date: "January 5, 2024",
      excerpt: "Learn how to make your web applications faster and more efficient.",
      category: "Performance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="section-container">
          <div className="text-center mb-16">
            <h1 className="section-title section-title-large">My Blog</h1>
            <p className="section-subtitle mx-auto">
              Thoughts, tips, and insights about web development and design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogCard 
                key={post.id}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                category={post.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
