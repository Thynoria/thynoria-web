'use client';
import { useT } from '@/lib/i18n';
import { SectionHead } from './PainPoints';

export default function FitCheck() {
  const { t } = useT();
  return (
    <section className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead eyebrow={t.fit.eyebrow} heading={t.fit.heading} sub={t.fit.sub} />

        <div className="mt-16 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border bg-panel p-8">
            <div className="font-mono text-[11px] text-accent tracking-eyebrow mb-5">
              ✓ {t.fit.fitLabel.toUpperCase()}
            </div>
            <ul className="space-y-3.5">
              {t.fit.fit.map((line) => (
                <li key={line} className="flex gap-3 text-ink text-[14px] leading-relaxed">
                  <span className="text-accent mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-panel p-8">
            <div className="font-mono text-[11px] text-muted-strong tracking-eyebrow mb-5">
              ✗ {t.fit.notFitLabel.toUpperCase()}
            </div>
            <ul className="space-y-3.5">
              {t.fit.notFit.map((line) => (
                <li key={line} className="flex gap-3 text-muted text-[14px] leading-relaxed">
                  <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-muted" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
