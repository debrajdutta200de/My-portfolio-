import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, User, Briefcase, Code, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
  { name: 'Projects', href: '#projects', icon: <Briefcase className="w-4 h-4" /> },
  { name: 'Why Hire Me', href: '#why-hire', icon: <Code className="w-4 h-4" /> },
  { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Default to dark mode
    document.documentElement.classList.add('dark');
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    setActiveTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const NavItems = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-8", className)}>
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 group relative"
        >
          {link.name}
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </div>
  );

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20 py-3" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group cursor-pointer">
          <img 
            src="https://miaoda-conversation-file.s3cdn.medo.dev/user-8zy7wwpflo1s/conv-9rhy51ow5j41/20260222/file-9szanjsmemm8.png" 
            alt="Debraj Dutta Logo" 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300 shadow-[0_0_15px_rgba(var(--primary),0.2)]"
          />
          <span className="text-lg sm:text-xl font-bold font-playfair-display tracking-wider hidden sm:block">
            Debraj Dutta's <span className="text-primary">Portfolio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems />
          <div className="h-6 w-[1px] bg-primary/20" />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-primary/10 text-primary"
            aria-label="Toggle theme"
          >
            {activeTheme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-[0_0_15px_rgba(var(--primary),0.3)]"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full text-primary"
          >
            {activeTheme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-lg border-l border-primary/20">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {link.icon}
                    </div>
                    {link.name}
                  </a>
                ))}
                <Button className="mt-4 bg-primary text-primary-foreground">
                  Hire Me
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
