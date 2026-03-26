import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntersectObserver from '@/components/common/IntersectObserver';
import { Toaster } from '@/components/ui/sonner';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { PersonalBranding } from '@/components/PersonalBranding';
import { Projects } from '@/components/Projects';
import { WhyHireMe } from '@/components/WhyHireMe';
import { Contact } from '@/components/Contact';
import NotFound from '@/pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <IntersectObserver />
      <MainLayout>
        <Routes>
          <Route path="/" element={
            <div className="flex flex-col gap-0">
              <Hero />
              <About />
              <PersonalBranding />
              <Projects />
              <WhyHireMe />
              <Contact />
            </div>
          } />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </MainLayout>
      <Toaster />
    </Router>
  );
};

export default App;
