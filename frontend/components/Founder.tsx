'use client';
import { useT } from '@/lib/i18n';

export default function Founder() {
  const { t } = useT();
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-prose mx-auto px-6">
        <div className="text-[11px] font-mono tracking-eyebrow text-accent mb-5">
          {t.founder.eyebrow}
        </div>
        <h2 className="text-[28px] md:text-[36px] leading-[1.2] font-semibold tracking-tightest text-ink">
          {t.founder.heading}
        </h2>
        <div className="mt-10 space-y-6 text-[15.5px] md:text-[16px] text-muted leading-relaxed">
          <p>{t.founder.lines[0]}</p>
          <p>{t.founder.lines[1]}</p>
          <blockquote className="text-ink font-medium border-l-2 border-accent pl-5 py-1 text-[16px] md:text-[17px]">
            {t.founder.lines[2]}
          </blockquote>
          <p>{t.founder.lines[3]}</p>
          <p className="pt-2">
            {t.founder.contactLabel}
          </p>
          <a
            className="inline-block text-accent hover:underline font-mono text-[15px]"
            href="mailto:larrchen0125@gmail.com"
          >
            larrchen0125@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
