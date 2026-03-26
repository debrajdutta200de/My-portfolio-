import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Github, Linkedin, Twitter, Send, ArrowUpRight, Loader2, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  { 
    label: 'Phone', 
    value: '+91 8536943389', 
    icon: <Phone className="w-6 h-6" />, 
    href: 'tel:+918536943389' 
  },
  { 
    label: 'WhatsApp', 
    value: '+91 8536943389', 
    icon: <MessageSquare className="w-6 h-6" />, 
    href: 'https://wa.me/918536943389' 
  },
  { 
    label: 'Email', 
    value: 'debrajdutta200de@gmail.com', 
    icon: <Mail className="w-6 h-6" />, 
    href: 'mailto:debrajdutta200de@gmail.com' 
  },
];

const socialLinks = [
  { icon: <Github className="w-6 h-6" />, href: 'https://github.com', label: 'GitHub' },
  { icon: <Linkedin className="w-6 h-6" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Twitter className="w-6 h-6" />, href: 'https://twitter.com', label: 'Twitter' },
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Submission',
          message: formData.message,
          to: 'debrajdutta200de@gmail.com'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-background/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-playfair-display font-bold mb-6 text-glow"
            >
              Let's Build Something <span className="text-primary italic underline decoration-primary/30 underline-offset-8">Extraordinary</span>
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
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Whether you have a specific project in mind or just want to explore the possibilities of modern frontend development, I'm here to help.
            </motion.p>
          </div>

          {/* Quick Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <Button
              asChild
              className="h-auto py-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-3xl shadow-[0_10px_30px_rgba(var(--primary),0.2)] transition-all hover:scale-105"
            >
              <a href="mailto:debrajdutta200de@gmail.com" className="flex flex-col items-center gap-3">
                <Mail className="w-8 h-8" />
                <div className="text-center">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Email Me</div>
                  <div className="text-sm font-semibold">debrajdutta200de@gmail.com</div>
                </div>
              </a>
            </Button>

            <Button
              asChild
              className="h-auto py-8 bg-green-600 hover:bg-green-700 text-white rounded-3xl shadow-[0_10px_30px_rgba(34,197,94,0.2)] transition-all hover:scale-105"
            >
              <a href="https://wa.me/918536943389" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3">
                <MessageSquare className="w-8 h-8" />
                <div className="text-center">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">WhatsApp</div>
                  <div className="text-sm font-semibold">+91 8536943389</div>
                </div>
              </a>
            </Button>

            <Button
              asChild
              className="h-auto py-8 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl shadow-[0_10px_30px_rgba(59,130,246,0.2)] transition-all hover:scale-105"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3">
                <Linkedin className="w-8 h-8" />
                <div className="text-center">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">LinkedIn</div>
                  <div className="text-sm font-semibold">Connect with me</div>
                </div>
              </a>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-2xl font-playfair-display font-bold mb-6">Contact Information</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-6 p-6 rounded-3xl bg-primary/5 border border-primary/20 hover:border-primary/50 transition-all hover:translate-x-4 group overflow-hidden relative shadow-lg"
                  >
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-1 block">
                        {info.label}
                      </span>
                      <span className="text-lg md:text-xl font-bold text-foreground">
                        {info.value}
                      </span>
                    </div>
                    <ArrowUpRight className="ml-auto w-6 h-6 text-primary/40 group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.a>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-6">
                <span className="text-sm font-bold uppercase tracking-widest text-primary/70">Socials</span>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-all"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-[80px] opacity-30 pointer-events-none" />
              <Card className="bg-background/40 backdrop-blur-xl border-primary/30 rounded-[3rem] overflow-hidden p-6 md:p-10 relative z-10 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                <CardContent className="p-0 space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-playfair-display font-bold mb-2">Send a Message</h3>
                    <p className="text-muted-foreground text-sm font-medium">Or use the quick contact buttons above</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-primary/70 ml-1">
                          Name *
                        </Label>
                        <Input 
                          id="name"
                          name="name"
                          type="text" 
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`bg-primary/5 border ${errors.name ? 'border-destructive' : 'border-primary/20'} rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all`}
                        />
                        {errors.name && <p className="text-xs text-destructive ml-1">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-primary/70 ml-1">
                          Email *
                        </Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email" 
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`bg-primary/5 border ${errors.email ? 'border-destructive' : 'border-primary/20'} rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all`}
                        />
                        {errors.email && <p className="text-xs text-destructive ml-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-primary/70 ml-1">
                        Subject
                      </Label>
                      <Input 
                        id="subject"
                        name="subject"
                        type="text" 
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-primary/5 border border-primary/20 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-primary/70 ml-1">
                        Message *
                      </Label>
                      <Textarea 
                        id="message"
                        name="message"
                        rows={4} 
                        placeholder="Tell me about your vision..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`bg-primary/5 border ${errors.message ? 'border-destructive' : 'border-primary/20'} rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none`}
                      />
                      {errors.message && <p className="text-xs text-destructive ml-1">{errors.message}</p>}
                    </div>

                    {submitStatus === 'success' && (
                      <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-2xl text-green-600 dark:text-green-400">
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                        <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-2xl text-destructive">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p className="text-sm font-medium">Failed to send. Please use the direct contact buttons above.</p>
                      </div>
                    )}

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 md:py-8 rounded-2xl text-lg shadow-[0_10px_30px_rgba(var(--primary),0.2)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
