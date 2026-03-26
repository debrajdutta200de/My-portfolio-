import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Smartphone, Search, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  { name: 'HTML', icon: <Code2 className="w-8 h-8" />, desc: 'Structured and semantic markup for SEO and accessibility.' },
  { name: 'CSS', icon: <Palette className="w-8 h-8" />, desc: 'Advanced styling, animations and responsive design.' },
  { name: 'JavaScript', icon: <Zap className="w-8 h-8" />, desc: 'Dynamic interactivity and modern ES6+ features.' },
  { name: 'Responsive Design', icon: <Smartphone className="w-8 h-8" />, desc: 'Mobile-first approach for all screen sizes.' },
  { name: 'UI Layout Structuring', icon: <Search className="w-8 h-8" />, desc: 'Precise and professional interface architecture.' },
  { name: 'Basic JS Interactivity', icon: <Database className="w-8 h-8" />, desc: 'DOM manipulation and functional user experiences.' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden px-6">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair-display font-bold mb-6 text-glow"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(var(--primary),0.6)]"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium"
          >
            I am a passionate frontend developer focused on building responsive, fast and visually clean websites using HTML, CSS, and JavaScript. I enjoy solving UI problems and creating modern user-friendly interfaces that impress both users and developers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Card className="h-full bg-background/40 backdrop-blur-sm border-primary/20 hover:border-primary transition-all duration-500 overflow-hidden relative">
                {/* Decorative Hover Background */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />
                
                <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-[0_0_15px_rgba(var(--primary),0.1)] group-hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-playfair-display group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                    {skill.desc}
                  </p>
                </CardContent>
                
                {/* Gold Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
