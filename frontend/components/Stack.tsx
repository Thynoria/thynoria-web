'use client';
import { useT } from '@/lib/i18n';
import SectionHead from './SectionHead';

export default function Stack() {
  const { t } = useT();
  return (
    <section id="stack" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-wide mx-auto px-6 lg:px-8">
        <SectionHead
          eyebrow={t.stack.eyebrow}
          heading={t.stack.heading}
          sub={t.stack.sub}
        />

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {t.stack.items.map((it) => (
            <div
              key={it.tag}
              className="group rounded-2xl border border-border bg-panel p-8 md:p-10 card-glow"
            >
              <div className="flex items-baseline justify-between mb-8">
                <div className="font-mono text-[12px] text-accent tracking-eyebrow uppercase">
                  {it.tag} · {it.subtitle.toUpperCase()}
                </div>
                <div className="h-px flex-1 ml-5 bg-gradient-to-r from-border to-transparent" />
              </div>
              <h3 className="text-[24px] md:text-[26px] font-semibold tracking-tighter2 text-ink">
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
