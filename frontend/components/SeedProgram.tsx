'use client';
import { useT } from '@/lib/i18n';

export default function SeedProgram() {
  const { t } = useT();
  return (
    <section className="py-28 border-t border-border bg-panel/40">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-[11px] font-mono tracking-eyebrow text-accent mb-4">
          {t.seed.eyebrow}
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[12px] font-mono rounded-full border border-accent/40 bg-accent-soft text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {t.seed.tag}
        </div>
        <h2 className="text-3xl md:text-[44px] font-semibold tracking-tightest text-ink">
          {t.seed.heading}
        </h2>
        <p className="mt-4 text-muted">{t.seed.sub}</p>

        <ul className="mt-12 grid md:grid-cols-2 gap-3 text-left">
          {t.seed.perks.map((p) => (
            <li
              key={p}
              className="flex gap-3 rounded-lg border border-border bg-panel px-5 py-4 text-ink text-[14px]"
            >
              <span className="text-accent shrink-0">✓</span>
              {p}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[13px] text-muted">{t.seed.exchange}</p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-md bg-accent text-white text-[14px] font-medium hover:bg-accent-hover transition shadow-[0_4px_24px_-4px_rgba(0,112,243,0.4)]"
          >
            {t.seed.cta1} →
          </a>
          <a
            href="mailto:larrchen0125@gmail.com"
            className="px-5 py-2.5 rounded-md border border-border bg-panel text-ink text-[14px] hover:border-border-strong transition"
          >
            {t.seed.cta2} · larrchen0125@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
