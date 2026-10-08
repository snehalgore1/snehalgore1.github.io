import { profile, avatars, photos } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import { Avatar } from './Avatar';
import { CopyEmail } from './ContactLinks';

// Who Snehal is as a person. The career arc lives in the Story section below.
export function About() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="scroll-mt-20 bg-cream/50 py-24 sm:py-36">
      <div ref={ref} className={`reveal ${shown ? 'reveal-in' : ''} mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]`}>
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-gold">About</p>
          <h2 className="font-serif text-[2rem] font-semibold leading-[1.08] text-espresso sm:text-5xl">
            A real person behind the terminal
          </h2>
          <div className="mt-6 space-y-4">
            {profile.aboutParagraphs.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-cocoa">{para}</p>
            ))}
          </div>

          <dl className="mt-8 divide-y divide-butter/50 border-y border-butter/50">
            {profile.aboutFacts.map((f) => (
              <div key={f.label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-2.5 text-sm sm:grid-cols-[8.5rem_1fr] sm:gap-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold">{f.label}</dt>
                <dd className="text-espresso">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#story"
              className="rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-ivory shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Read my story ↓
            </a>
            <CopyEmail className="rounded-full border border-espresso/15 px-5 py-2.5 text-sm font-semibold text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:border-gold" />
          </div>
        </div>

        <figure className="order-first flex flex-col items-center lg:order-none lg:items-end">
          <div className="relative">
            <img
              src={photos.portrait}
              alt="Snehal Gore smiling on a riverside trail"
              width={960}
              height={1280}
              loading="lazy"
              className="h-auto w-64 rotate-[1.5deg] rounded-[2rem] shadow-[var(--shadow-lg)] ring-4 ring-butter/50 sm:w-80"
            />
            <div className="absolute -bottom-5 -left-6 rounded-full bg-ivory p-1 shadow-[var(--shadow-md)]">
              <Avatar src={avatars.about} alt="" size={72} />
            </div>
          </div>
          <figcaption className="mt-7 font-mono text-[11px] text-cocoa/70">the real one, and the illustrated one ☕→🍵</figcaption>
        </figure>
      </div>
    </section>
  );
}
