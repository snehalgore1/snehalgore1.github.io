import { profile, avatars, photos } from '../data/portfolio';
import { Avatar } from './Avatar';
import { ContactRow } from './ContactLinks';

// First screen: who, what, when available, and how to reach her. Nothing else.
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden bg-cream/50 px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-0 h-[560px] w-[560px] rounded-full bg-butter/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {profile.openToWork && (
              <span className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-sage">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
                </span>
                Open to work
              </span>
            )}
            <span className="rounded-full border border-butter/40 bg-ivory/70 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-cocoa">
              {profile.location} · Open to relocation
            </span>
          </div>

          <h1 id="hero-heading" className="font-serif text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.03em] text-espresso sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-2 font-serif text-xl italic text-gold sm:text-2xl">{profile.role}</p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cocoa">{profile.positioning}</p>
          <p className="mt-3 hidden max-w-xl text-lg leading-relaxed text-cocoa sm:block">{profile.aboutParagraphs[1]}</p>

          <dl className="mt-7 max-w-xl divide-y divide-butter/50 border-y border-butter/50">
            {profile.aboutFacts.map((f) => (
              <div key={f.label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-2.5 text-sm sm:grid-cols-[8.5rem_1fr] sm:gap-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold">{f.label}</dt>
                <dd className="text-espresso">{f.value}</dd>
              </div>
            ))}
          </dl>

          <ContactRow start className="mt-8" />
        </div>

        <figure className="flex flex-col items-center lg:items-end">
          <div className="relative">
            <img
              src={photos.portrait}
              alt="Snehal Gore smiling on a riverside trail"
              width={960}
              height={1280}
              fetchPriority="high"
              className="h-auto w-56 rotate-[1.5deg] rounded-[2rem] shadow-[var(--shadow-lg)] ring-4 ring-butter/50 sm:w-80"
            />
            <div className="absolute -bottom-5 -left-6 rounded-full bg-ivory p-1 shadow-[var(--shadow-md)]">
              <Avatar src={avatars.hero} alt="" size={72} />
            </div>
          </div>
          <figcaption className="mt-7 font-mono text-[11px] text-cocoa/70">the real one, and the illustrated one ☕→🍵</figcaption>
        </figure>
      </div>
    </section>
  );
}
