import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { CaseStudies } from './components/CaseStudies';
import { Story } from './components/Story';
import { Recognition } from './components/Recognition';
import { Personal } from './components/Personal';
import { Footer } from './components/Footer';
import { AppLoader } from './components/ui/AppLoader';
import { MiniTerminal } from './components/MiniTerminal';
import { TakeABreak } from './components/TakeABreak';
import { ContactDock } from './components/ContactLinks';

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function App() {
  const [loading, setLoading] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Intro loader - brief, and instant under reduced-motion.
  useEffect(() => {
    const hold = reduceMotion() ? 0 : 250;
    const t1 = setTimeout(() => setLeaving(true), hold);
    const t2 = setTimeout(() => setLoading(false), hold + (reduceMotion() ? 0 : 300));
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Lock background scroll while the terminal overlay is open.
  useEffect(() => {
    document.body.style.overflow = terminalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [terminalOpen]);

  // Backtick opens the hidden terminal; the footer's ">_" button fires the same event.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;
      if (e.key === '`' && !typing) {
        e.preventDefault();
        setTerminalOpen((v) => !v);
      }
    };
    const onOpen = () => setTerminalOpen(true);
    document.addEventListener('keydown', onKey);
    window.addEventListener('open-terminal', onOpen);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('open-terminal', onOpen);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      {loading && <AppLoader leaving={leaving} />}

      <a href="#main" className="sr-only skip-link">Skip to main content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Story />
        <Experience />
        <Skills />
        <Stats />
        <CaseStudies />
        <Projects />
        <Recognition />
        <Personal />
        <Footer />
      </main>

      {terminalOpen && <MiniTerminal onClose={() => setTerminalOpen(false)} />}

      <TakeABreak />
      <ContactDock />
    </MotionConfig>
  );
}
