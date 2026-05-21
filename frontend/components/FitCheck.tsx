'use client';
import { useT } from '@/lib/i18n';
import SectionHead from './SectionHead';

export default function FitCheck() {
  const { t } = useT();
  return (
    <section id="fit" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-wide mx-auto px-6 lg:px-8">
        <SectionHead eyebrow={t.fit.eyebrow} heading={t.fit.heading} sub={t.fit.sub} />

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {/* Fit */}
          <div className="rounded-2xl border border-border bg-panel p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.9)]" />
              <div className="font-mono text-[12px] text-accent tracking-eyebrow uppercase">
                {t.fit.fitLabel}
              </div>
            </div>
            <ul className="space-y-5">
              {t.fit.fit.map((line) => (
                <li
                  key={line}
                  className="flex gap-3.5 text-ink-soft text-[16px] leading-[1.7]"
                >
                  <span className="text-accent shrink-0 mt-0.5 font-mono">→</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not fit */}
          <div className="rounded-2xl border border-border bg-panel p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-muted" />
              <div className="font-mono text-[12px] text-muted-strong tracking-eyebrow uppercase">
                {t.fit.notFitLabel}
              </div>
            </div>
            <ul className="space-y-5">
              {t.fit.notFit.map((line) => (
                <li
                  key={line}
                  className="flex gap-3.5 text-muted-strong text-[16px] leading-[1.7]"
                >
                  <span className="shrink-0 mt-0.5">×</span>
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
