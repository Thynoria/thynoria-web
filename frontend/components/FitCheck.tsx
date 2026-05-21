'use client';
import { useT } from '@/lib/i18n';
import SectionHead from './SectionHead';

export default function FitCheck() {
  const { t } = useT();
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-wide mx-auto px-6">
        <SectionHead eyebrow={t.fit.eyebrow} heading={t.fit.heading} sub={t.fit.sub} />

        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-5">
          {/* Fit */}
          <div className="rounded-xl border border-border bg-panel p-7 md:p-9">
            <div className="flex items-center gap-2.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,112,243,0.9)]" />
              <div className="font-mono text-[11px] text-accent tracking-eyebrow">
                {t.fit.fitLabel.toUpperCase()}
              </div>
            </div>
            <ul className="space-y-4">
              {t.fit.fit.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-ink-soft text-[14.5px] leading-relaxed"
                >
                  <span className="text-accent shrink-0 leading-relaxed">→</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not fit */}
          <div className="rounded-xl border border-border bg-panel p-7 md:p-9">
            <div className="flex items-center gap-2.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-muted" />
              <div className="font-mono text-[11px] text-muted tracking-eyebrow">
                {t.fit.notFitLabel.toUpperCase()}
              </div>
            </div>
            <ul className="space-y-4">
              {t.fit.notFit.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-muted text-[14.5px] leading-relaxed"
                >
                  <span className="shrink-0 leading-relaxed">×</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
