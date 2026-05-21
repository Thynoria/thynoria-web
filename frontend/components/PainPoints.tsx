'use client';
import { useT } from '@/lib/i18n';

export default function PainPoints() {
  const { t } = useT();
  return (
    <section className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead eyebrow={t.pain.eyebrow} heading={t.pain.heading} sub={t.pain.sub} />

        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {t.pain.items.map((it, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-panel p-7 card-glow transition"
            >
              <div className="font-mono text-[11px] text-muted tracking-wider mb-4">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-[17px] font-semibold text-ink leading-snug">{it.title}</h3>
              <p className="mt-3 text-[14px] text-muted leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  heading,
  sub,
}: {
  eyebrow?: string;
  heading: string;
  sub?: string;
}) {
  return (
    <div className="text-center">
      {eyebrow && (
        <div className="text-[11px] font-mono tracking-eyebrow text-accent mb-4">{eyebrow}</div>
      )}
      <h2 className="text-3xl md:text-[44px] font-semibold tracking-tightest text-ink">
        {heading}
      </h2>
      {sub && <p className="mt-4 text-[16px] text-muted max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}
