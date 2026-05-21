'use client';
import { useT } from '@/lib/i18n';
import SectionHead from './SectionHead';

export default function PainPoints() {
  const { t } = useT();
  return (
    <section className="py-28 md:py-36 border-t border-border">
      <div className="max-w-wide mx-auto px-6 lg:px-8">
        <SectionHead eyebrow={t.pain.eyebrow} heading={t.pain.heading} sub={t.pain.sub} />

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {t.pain.items.map((it, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-panel p-8 md:p-9 card-glow"
            >
              <div className="font-mono text-[12px] text-muted tracking-eyebrow mb-6 uppercase">
                {String(i + 1).padStart(2, '0')} / {String(t.pain.items.length).padStart(2, '0')}
              </div>
              <h3 className="text-[20px] md:text-[22px] font-semibold text-ink leading-snug tracking-tighter2">
                {it.title}
              </h3>
              <p className="mt-5 text-[15.5px] md:text-[16px] text-muted-strong leading-[1.7]">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
