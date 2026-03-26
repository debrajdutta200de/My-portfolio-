import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Layers, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Responsive Business Landing Page",
    description: "Designed and developed a mobile-first landing page optimized for performance and structured layout.",
    techStack: ["HTML", "CSS"],
    liveDemo: "https://app-90jj43caeio1.appmedo.com",
    github: "#",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_a632e9a3-5ef1-43dc-a8fa-07d4dd51ab5f.jpg",
    problemSolved: "Optimized performance and structured layout for seamless desktop and mobile navigation."
  },
  {
    title: "Modern E-Commerce UI Concept",
    description: "Created a structured e-commerce UI with product cards and responsive layout system.",
    techStack: ["HTML", "CSS"],
    liveDemo: "https://app-9cmpo0hw1k3l.appmedo.com/",
    github: "#",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_682175db-0b85-4919-89db-5b9b3afe4567.jpg",
    problemSolved: "Developed a consistent and high-performance product browsing experience with a modern UI approach."
  },
  {
    title: "SubshieldAI",
    description: "An AI-powered cybersecurity platform designed to protect and monitor digital assets with advanced threat detection and real-time security analytics.",
    techStack: ["AI", "Cybersecurity", "Web Development"],
    liveDemo: "https://app-9s91k6ml4o3l.appmedo.com",
    github: "#",
    image: "https://miaoda-conversation-file.s3cdn.medo.dev/user-8zy7wwpflo1s/conv-9rhy51ow5j41/20260222/file-9sz541s4ewhs.png",
    problemSolved: "Implemented intelligent security monitoring system with AI-driven threat detection to safeguard digital infrastructure."
  },
  {
    title: "The Ghost",
    description: "The Ghost is a modern dark-themed web interface designed with smooth transitions, structured layout, and immersive UI effects.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://app-8t2t3k39cvlt.appmedo.com",
    github: "#",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_88771ca5-d280-4256-a3bb-4b25b838af04.jpg",
    problemSolved: "Implemented smooth section-based navigation and high-quality UI effects to showcase skills effectively."
  },
  {
    title: "Interactive UI Landing Page",
    description: "Designed an interactive landing page with smooth scroll animations and structured UI layout focused on user engagement.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveDemo: "#",
    github: "#",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_4d1f7ec3-5114-4c63-ba35-dbddc1eed46f.jpg",
    problemSolved: "Created an engaging user experience with interactive elements and smooth animations for better conversion rates."
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair-display font-bold mb-6 text-glow"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            A selection of my best work, showcasing high-converting designs and technical expertise.
          </motion.p>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Mockup Display */}
              <div className="flex-1 w-full group cursor-pointer relative">
                <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-background/50 backdrop-blur-sm p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="bg-background rounded-2xl overflow-hidden border border-primary/10">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Floating Mockup Overlays */}
                  <div className="absolute top-8 right-8 flex gap-2">
                    <div className="p-3 bg-background/80 backdrop-blur-md rounded-xl border border-primary/20 shadow-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Monitor className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Display */}
              <div className="flex-1 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-primary/5 text-primary border-primary/20 font-bold px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-playfair-display font-bold text-glow">
                  {project.title}
                </h3>
                
                <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl border-l-4 border-l-primary">
                  <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Problem Solving
                  </p>
                  <p className="text-foreground/90 font-medium">
                    {project.problemSolved}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 font-bold px-8 py-6 rounded-full">
                    <a href={project.github}>
                      <Github className="w-4 h-4 mr-2" />
                      View Source
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
