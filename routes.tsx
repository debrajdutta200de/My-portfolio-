import { Hero } from './components/Hero';
import { About } from './components/About';
import { PersonalBranding } from './components/PersonalBranding';
import { Projects } from './components/Projects';
import { WhyHireMe } from './components/WhyHireMe';
import { Contact } from './components/Contact';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: (
      <div className="flex flex-col gap-0">
        <Hero />
        <About />
        <PersonalBranding />
        <Projects />
        <WhyHireMe />
        <Contact />
      </div>
    )
  }
];

export default routes;
