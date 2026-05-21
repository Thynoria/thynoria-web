'use client';
import { useT } from '@/lib/i18n';

export default function SeedProgram() {
  const { t } = useT();
  return (
    <section
      id="early-access"
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="relative rounded-2xl border border-accent/30 bg-gradient-to-br from-accent-soft via-panel to-panel p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-14 items-start">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-[12px] font-mono tracking-eyebrow rounded-full border border-accent/40 bg-accent-soft text-accent uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t.seed.tag}
              </div>
              <h3 className="text-[28px] md:text-[36px] leading-[1.15] font-semibold tracking-tightest text-ink">
                {t.seed.heading}
              </h3>
              <p className="mt-5 text-[16px] md:text-[17px] text-muted-strong leading-[1.65]">
                {t.seed.sub}
              </p>
              <p className="mt-5 text-[14.5px] text-muted leading-relaxed">
                {t.seed.exchange}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-white text-[14.5px] font-medium hover:bg-accent-hover transition shadow-[0_6px_24px_-8px_rgba(59,130,246,0.6)]"
                >
                  {t.seed.cta1} →
                </a>
                <a
                  href="mailto:larrchen0125@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border-strong bg-panel/60 text-ink text-[14.5px] font-medium hover:border-accent/40 transition"
                >
                  {t.seed.cta2}
                </a>
              </div>
            </div>

            {/* Right — Perks list */}
            <ul className="space-y-4">
              {t.seed.perks.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 text-[15px] text-ink-soft leading-[1.6]"
                >
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent/15 text-accent inline-flex items-center justify-center">
                    <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M1.5 5.2L4 7.5L8.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
