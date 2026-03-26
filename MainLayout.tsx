import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-background selection:bg-primary/20">
      {/* Mouse Follow Glow - Reduced opacity */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, hsla(var(--primary), 0.05), transparent 80%)`
        }}
      />
      
      {/* Background Decorative Elements - Reduced size */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-primary/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <Navbar />
      
      <main className="relative z-10 pt-20">
        {children}
      </main>

      <footer className="relative z-10 py-10 border-t border-primary/10 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Debraj Dutta. Built with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};
