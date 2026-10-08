import { story, profile } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

// The career arc as chapters: a vertical line on phones, a horizontal track on desktop.
export function Story() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id="story" aria-labelledby="story-heading" className="scroll-mt-20 py-24 sm:py-32">
      <div ref={ref} className={`reveal ${shown ? 'reveal-in' : ''} mx-auto max-w-6xl px-5 sm:px-8`}>
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-gold">My story</p>
        <h2 id="story-heading" className="font-serif text-[2rem] font-semibold leading-[1.08] text-espresso sm:text-5xl">
          From a dryer's microcontroller to an LLM that shows its work
        </h2>
        <p className="mt-3 max-w-2xl text-cocoa">
          Every chapter added a harder constraint: less memory, more users, higher stakes. Here's how it went.
        </p>

        <ol className="relative mt-12 grid gap-6 border-l-2 border-butter/50 pl-7 lg:grid-cols-5 lg:gap-4 lg:border-l-0 lg:pl-0">
          {/* horizontal track on desktop */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-[11px] hidden h-0.5 bg-butter/50 lg:block" />
          {story.map((c, i) => (
            <li key={c.title} className="relative lg:pt-10">
              <span
                aria-hidden="true"
                className={`absolute -left-[39px] top-1 flex h-6 w-6 items-center justify-center rounded-full font-mono text-[10px] font-semibold ring-2 lg:left-0 lg:top-0 ${
                  c.next ? 'bg-butter text-espresso ring-butter-deep' : 'bg-ivory text-gold ring-butter-deep'
                }`}
              >
                {c.next ? '→' : i + 1}
              </span>
              <div
                className={`h-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 ${
                  c.next ? 'bg-espresso text-ivory shadow-[var(--shadow-lg)]' : 'border border-butter/50 bg-cream/50'
                }`}
              >
                <p className={`font-mono text-[11px] font-semibold ${c.next ? 'text-butter' : 'text-gold'}`}>{c.years}</p>
                <p className={`mt-0.5 text-xs ${c.next ? 'text-cream/70' : 'text-cocoa/80'}`}>{c.place}</p>
                <h3 className={`mt-3 font-serif text-xl font-semibold leading-snug ${c.next ? 'text-ivory' : 'text-espresso'}`}>
                  {c.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${c.next ? 'text-cream/85' : 'text-cocoa'}`}>{c.body}</p>
                <p
                  className={`mt-4 inline-block rounded-md px-2.5 py-1 font-mono text-[11px] ${
                    c.next ? 'bg-butter text-espresso' : 'bg-ivory text-sage ring-1 ring-sage/25'
                  }`}
                >
                  {c.highlight}
                </p>
                {c.next && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={`mailto:${profile.email}`} className="rounded-full bg-ivory px-4 py-2 text-xs font-semibold text-espresso transition-transform hover:-translate-y-0.5">
                      Email me
                    </a>
                    <a href={profile.resumeFile} target="_blank" rel="noreferrer" className="rounded-full border border-cream/30 px-4 py-2 text-xs font-semibold text-ivory transition-colors hover:border-butter">
                      Résumé
                    </a>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
