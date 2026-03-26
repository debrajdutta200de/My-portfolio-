import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const PersonalBranding: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 mb-8"
            >
              <User className="w-10 h-10 text-primary" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-playfair-display font-bold mb-6 text-glow"
            >
              Who Am I?
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-background/40 backdrop-blur-xl border-primary/20 rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <CardContent className="p-10 md:p-16">
                <div className="space-y-8">
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-medium text-center"
                  >
                    I am an <span className="text-primary font-bold">entry-level frontend developer</span> passionate about building clean, responsive and performance-focused websites. I focus on <span className="text-primary italic">clarity</span>, <span className="text-primary italic">structure</span>, and <span className="text-primary italic">usability</span> while continuously improving my skills.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-4 pt-6"
                  >
                    <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    <Target className="w-6 h-6 text-primary" />
                    <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  </motion.div>

                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center"
                  >
                    I am actively seeking <span className="text-primary font-bold">freelance and remote opportunities</span> where I can contribute my skills, learn from experienced professionals, and deliver high-quality web solutions.
                  </motion.p>

                  {/* Key Values */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
                  >
                    {[
                      { icon: <Lightbulb className="w-6 h-6" />, text: 'Continuous Learning' },
                      { icon: <Target className="w-6 h-6" />, text: 'Goal-Oriented' },
                      { icon: <User className="w-6 h-6" />, text: 'User-Focused' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10"
                      >
                        <div className="text-primary">
                          {item.icon}
                        </div>
                        <span className="font-bold text-foreground/90">{item.text}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
