'use client';
import { useT } from '@/lib/i18n';

export default function Founder() {
  const { t } = useT();
  return (
    <section className="py-28 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-[11px] font-mono tracking-eyebrow text-accent mb-4">
          {t.founder.eyebrow}
        </div>
        <h2 className="text-3xl md:text-[40px] font-semibold tracking-tightest text-ink">
          {t.founder.heading}
        </h2>
        <div className="mt-10 space-y-5 text-[16px] text-muted leading-relaxed">
          <p>{t.founder.lines[0]}</p>
          <p>{t.founder.lines[1]}</p>
          <p className="text-ink font-medium border-l-2 border-accent pl-5 py-1">
            {t.founder.lines[2]}
          </p>
          <p>{t.founder.lines[3]}</p>
          <p className="pt-4">
            {t.founder.contactLabel}
            <br />
            <a
              className="text-accent hover:underline font-mono text-[15px] mt-2 inline-block"
              href="mailto:larrchen0125@gmail.com"
            >
              larrchen0125@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
