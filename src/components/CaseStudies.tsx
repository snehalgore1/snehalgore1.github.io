import { caseStudies } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import { FeaturedBlock } from './Projects';

// Production work from industry roles, told as problem → constraint → solution.
export function CaseStudies() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id="case-studies" className="scroll-mt-20 bg-cream/30 py-24 sm:py-36">
      <div ref={ref} className={`reveal ${shown ? 'reveal-in' : ''} mx-auto max-w-6xl px-5 sm:px-8`}>
        <div className="mb-10">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-gold">Case studies</p>
          <h2 className="font-serif text-[2rem] font-semibold leading-[1.08] text-espresso sm:text-5xl">
            Production work, up close
          </h2>
          <p className="mt-3 max-w-2xl text-cocoa">
            The systems I shipped at work don't have public repos, so here is the story behind each one:
            the real problem, the constraint that made it hard, and what I built.
          </p>
        </div>
        <div className="space-y-6">
          {caseStudies.map((p, i) => (
            <FeaturedBlock key={p.id} p={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
