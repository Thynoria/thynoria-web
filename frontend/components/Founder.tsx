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

        {/* Vision */}
        <div className="mt-12 md:mt-14">
          <div className="text-[11px] font-mono tracking-eyebrow text-accent mb-4">
            {t.founder.visionLabel}
          </div>
          <p className="text-[20px] md:text-[24px] font-semibold tracking-tight text-ink leading-[1.45]">
            {t.founder.vision}
          </p>
        </div>

        {/* Mission */}
        <div className="mt-10 md:mt-12">
          <div className="text-[11px] font-mono tracking-eyebrow text-accent mb-4">
            {t.founder.missionLabel}
          </div>
          <p className="text-[15.5px] md:text-[16.5px] text-ink-soft leading-relaxed border-l-2 border-accent pl-5 py-1">
            {t.founder.mission}
          </p>
        </div>

        {/* Founder */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-border">
          <div className="text-[11px] font-mono tracking-eyebrow text-muted mb-5">
            {t.founder.founderSubhead}
          </div>
          <div className="space-y-5 text-[15.5px] md:text-[16px] text-muted leading-relaxed">
            <p>{t.founder.lines[0]}</p>
            <p>{t.founder.lines[1]}</p>
            <p className="text-ink-soft">{t.founder.lines[2]}</p>
            <p>{t.founder.lines[3]}</p>
            <p className="pt-2">{t.founder.contactLabel}</p>
            <a
              className="inline-block text-accent hover:underline font-mono text-[15px]"
              href="mailto:larrchen0125@gmail.com"
            >
              larrchen0125@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
