'use client';
import { useT } from '@/lib/i18n';

export default function SeedProgram() {
  const { t } = useT();
  return (
    <section id="pricing" className="py-24 md:py-32 border-t border-border bg-panel/40">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-[11px] font-mono tracking-eyebrow text-accent mb-5">
          {t.seed.eyebrow}
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[11.5px] font-mono rounded-full border border-accent/40 bg-accent-soft text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {t.seed.tag}
        </div>
        <h2 className="text-[28px] md:text-[40px] leading-[1.15] font-semibold tracking-tightest text-ink">
          {t.seed.heading}
        </h2>
        <p className="mt-5 text-[16px] text-muted leading-relaxed">{t.seed.sub}</p>

        <ul className="mt-12 grid sm:grid-cols-2 gap-3 text-left">
          {t.seed.perks.map((p) => (
            <li
              key={p}
              className="flex gap-3 rounded-lg border border-border bg-panel px-5 py-4 text-ink-soft text-[14px] leading-relaxed"
            >
              <span className="text-accent shrink-0 mt-0.5">✓</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-[13px] text-muted">{t.seed.exchange}</p>

        <div className="mt-7 flex flex-wrap gap-3 justify-center">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-md bg-accent text-white text-[14px] font-medium hover:bg-accent-hover transition shadow-[0_4px_24px_-4px_rgba(0,112,243,0.45)]"
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
