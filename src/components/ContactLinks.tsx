import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';

/** Copies the email address (mailto links often do nothing on work laptops). */
export function CopyEmail({ className = '', label }: { className?: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <button type="button" onClick={copy} className={className} aria-live="polite">
      {copied ? 'Email copied ✓' : label ?? 'Copy email'}
    </button>
  );
}

const pill =
  'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5';

/** Résumé, LinkedIn, GitHub and email in one row. */
export function ContactRow({ dark = false, start = false, className = '' }: { dark?: boolean; start?: boolean; className?: string }) {
  const ghost = dark
    ? 'border border-white/20 text-ivory hover:border-butter'
    : 'border border-espresso/15 bg-ivory/70 text-espresso hover:border-gold';
  return (
    <div className={`flex flex-wrap items-center gap-2 ${start ? 'justify-start' : 'justify-center'} ${className}`}>
      <a href={profile.resumeFile} target="_blank" rel="noreferrer" className={`${pill} bg-espresso text-ivory shadow-[var(--shadow-md)] hover:brightness-110 ${dark ? 'bg-butter !text-espresso' : ''}`}>
        View résumé
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" className={`${pill} ${ghost}`}>
        LinkedIn ↗
      </a>
      <a href={profile.github} target="_blank" rel="noreferrer" className={`${pill} ${ghost}`}>
        GitHub ↗
      </a>
      <CopyEmail className={`${pill} ${ghost}`} />
    </div>
  );
}

/** Small bar that follows the reader once they scroll past the hero. */
export function ContactDock() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const link = 'rounded-full px-3 py-1.5 text-xs font-semibold text-ivory transition-colors hover:bg-white/15 sm:px-3.5';
  return (
    <nav
      aria-label="Contact shortcuts"
      className={`fixed bottom-4 left-1/2 z-[340] flex -translate-x-1/2 items-center gap-0.5 rounded-full bg-espresso/95 p-1 shadow-[var(--shadow-lg)] backdrop-blur transition-all duration-500 sm:left-auto sm:right-5 sm:translate-x-0 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <a href={profile.resumeFile} target="_blank" rel="noreferrer" className={`${link} bg-butter !text-espresso hover:bg-butter-deep`}>
        Résumé
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" className={link}>LinkedIn</a>
      <a href={profile.github} target="_blank" rel="noreferrer" className={link}>GitHub</a>
      <CopyEmail className={link} label="Email" />
    </nav>
  );
}
