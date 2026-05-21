'use client';
import { useT } from '@/lib/i18n';
import { SectionHead } from './PainPoints';

export default function Stack() {
  const { t } = useT();
  return (
    <section id="stack" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead
          eyebrow={t.stack.eyebrow}
          heading={t.stack.heading}
          sub={t.stack.sub}
        />

        <div className="mt-16 grid md:grid-cols-2 gap-4">
          {t.stack.items.map((it) => (
            <div
              key={it.tag}
              className="group rounded-xl border border-border bg-panel p-8 card-glow transition"
            >
              <div className="flex items-baseline justify-between mb-6">
                <div className="font-mono text-[11px] text-accent tracking-eyebrow">
                  {it.tag} · {it.subtitle.toUpperCase()}
                </div>
                <div className="h-px flex-1 ml-4 bg-gradient-to-r from-border to-transparent" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-ink">{it.title}</h3>
              <p className="mt-4 text-[14px] text-muted leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
