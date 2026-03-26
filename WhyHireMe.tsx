import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Rocket, Palette, Sparkles, Moon, Sun, MousePointer2, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const whyHireMe = [
  { 
    title: 'Clean Code Architecture', 
    icon: <Code className="w-10 h-10" />, 
    desc: 'Writing maintainable, scalable and semantic code that adheres to industry standards and best practices.' 
  },
  { 
    title: 'Fully Responsive Design', 
    icon: <Smartphone className="w-10 h-10" />, 
    desc: 'Ensuring your website looks perfect on every device, from mobile to ultra-wide desktops with pixel-perfect precision.' 
  },
  { 
    title: 'Performance Optimization', 
    icon: <Rocket className="w-10 h-10" />, 
    desc: 'Focusing on fast load times, smooth transitions and minimal bundle sizes for better SEO and user experience.' 
  },
  { 
    title: 'Structured Layout System', 
    icon: <Palette className="w-10 h-10" />, 
    desc: 'Building organized, scalable layout architectures that are easy to maintain and extend for future growth.' 
  },
  { 
    title: 'Problem Solving Approach', 
    icon: <Sparkles className="w-10 h-10" />, 
    desc: 'Analytical thinking to identify issues quickly and implement effective solutions that improve user experience.' 
  },
  { 
    title: 'Fast Delivery & Clear Communication', 
    icon: <MousePointer2 className="w-10 h-10" />, 
    desc: 'Meeting deadlines consistently while maintaining transparent communication throughout the project lifecycle.' 
  },
];

export const WhyHireMe: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <section id="why-hire" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Particle Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [Math.random() * 1000, Math.random() * 1000],
              x: [Math.random() * 1000, Math.random() * 1000],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair-display font-bold mb-6 text-glow"
          >
            Why Hire Me?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {whyHireMe.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <Card className="h-full bg-background/40 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-500 rounded-3xl overflow-hidden group-hover:shadow-[0_20px_40px_rgba(var(--primary),0.1)]">
                <CardContent className="p-10 flex flex-col items-center text-center">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.05 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-8 shadow-inner"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 font-playfair-display group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Fun Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-primary/5 backdrop-blur-xl border border-primary/20 rounded-[3rem] text-center shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
          >
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border border-primary/40 text-primary">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
              
              <div>
                <h3 className="text-3xl font-playfair-display font-bold mb-4 text-glow">
                  Interactive Features
                </h3>
                <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                  Experience the modern UI approach through real-time interaction. Feel free to toggle the theme or interact with the counters.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 w-full">
                {/* Theme Switcher */}
                <div className="flex flex-col items-center gap-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Toggle Theme</span>
                  <Button 
                    onClick={toggleTheme}
                    variant="outline"
                    className="w-20 h-20 rounded-2xl border-primary/30 hover:bg-primary/10 transition-all group p-0 relative"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        {theme === 'light' ? (
                          <motion.div
                            key="moon"
                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            className="text-primary"
                          >
                            <Moon className="w-10 h-10" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="sun"
                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            className="text-primary"
                          >
                            <Sun className="w-10 h-10" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Button>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block h-24 w-[1px] bg-primary/20" />

                {/* Click Counter */}
                <div className="flex flex-col items-center gap-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Interactions</span>
                  <Button 
                    onClick={() => setClickCount(prev => prev + 1)}
                    className="w-20 h-20 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-3xl shadow-[0_0_20px_rgba(var(--primary),0.3)] relative overflow-hidden group"
                  >
                    <motion.div
                      key={clickCount}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="relative z-10"
                    >
                      {clickCount}
                    </motion.div>
                    <Plus className="absolute top-2 right-2 w-4 h-4 opacity-50 group-hover:scale-125 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
