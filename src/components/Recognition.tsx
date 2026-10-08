import { recognition } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

const KIND_STYLE: Record<string, string> = {
  Award: 'bg-butter/70 text-espresso',
  Research: 'bg-sage/15 text-sage',
  Publication: 'bg-cream text-cocoa ring-1 ring-butter/60',
};

export function Recognition() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id="recognition" aria-labelledby="recognition-heading" className="scroll-mt-20 pb-24 sm:pb-32">
      <div ref={ref} className={`reveal ${shown ? 'reveal-in' : ''} mx-auto max-w-6xl px-5 sm:px-8`}>
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-gold">Recognition</p>
        <h2 id="recognition-heading" className="font-serif text-[2rem] font-semibold leading-[1.08] text-espresso sm:text-4xl">
          Awards & research
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recognition.map((r) => {
            const body = (
              <>
                <div className="flex items-center justify-between gap-2">
                  <span className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide ${KIND_STYLE[r.kind]}`}>
                    {r.kind}
                  </span>
                  <span className="font-mono text-[11px] text-cocoa/70">{r.date}</span>
                </div>
                <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-espresso">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cocoa">{r.detail}</p>
                {r.href && (
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold">
                    View
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </>
            );
            const cls = 'block h-full rounded-2xl border border-butter/50 bg-cream/40 p-5 transition-all duration-300';
            return (
              <li key={r.title}>
                {r.href ? (
                  <a href={r.href} target="_blank" rel="noreferrer" className={`${cls} hover:-translate-y-1 hover:border-gold hover:shadow-[var(--shadow-md)]`}>
                    {body}
                  </a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
