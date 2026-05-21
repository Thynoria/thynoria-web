'use client';
import { useT } from '@/lib/i18n';
import SectionHead from './SectionHead';

export default function PainPoints() {
  const { t } = useT();
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-wide mx-auto px-6">
        <SectionHead eyebrow={t.pain.eyebrow} heading={t.pain.heading} sub={t.pain.sub} />

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-5">
          {t.pain.items.map((it, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-panel p-7 md:p-8 card-glow"
            >
              <div className="font-mono text-[11px] text-muted tracking-eyebrow mb-5">
                {String(i + 1).padStart(2, '0')} / {String(t.pain.items.length).padStart(2, '0')}
              </div>
              <h3 className="text-[17px] md:text-[18px] font-semibold text-ink leading-snug tracking-tight">
                {it.title}
              </h3>
              <p className="mt-4 text-[14px] text-muted leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
