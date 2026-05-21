'use client';
import { useT } from '@/lib/i18n';

export default function Founder() {
  const { t } = useT();
  return (
    <section id="about" className="py-28 md:py-36 border-t border-border bg-panel/40">
      <div className="max-w-prose mx-auto px-6 lg:px-8">
        <div className="text-[12px] font-mono tracking-eyebrow text-accent mb-5 uppercase">
          {t.founder.eyebrow}
        </div>
        <h2 className="text-[32px] md:text-[40px] leading-[1.18] font-semibold tracking-tightest text-ink">
          {t.founder.heading}
        </h2>

        {/* Vision */}
        <div className="mt-14 md:mt-16">
          <div className="text-[12px] font-mono tracking-eyebrow text-accent mb-4 uppercase">
            {t.founder.visionLabel}
          </div>
          <p className="text-[22px] md:text-[26px] font-semibold tracking-tighter2 text-ink leading-[1.4]">
            {t.founder.vision}
          </p>
        </div>

        {/* Mission */}
        <div className="mt-12 md:mt-14">
          <div className="text-[12px] font-mono tracking-eyebrow text-accent mb-4 uppercase">
            {t.founder.missionLabel}
          </div>
          <p className="text-[16.5px] md:text-[17.5px] text-ink-soft leading-[1.7] border-l-2 border-accent pl-6 py-1">
            {t.founder.mission}
          </p>
        </div>

        {/* Founder */}
        <div className="mt-16 md:mt-20 pt-12 border-t border-border">
          <div className="text-[12px] font-mono tracking-eyebrow text-muted-strong mb-6 uppercase">
            {t.founder.founderSubhead}
          </div>
          <div className="space-y-5 text-[16px] md:text-[16.5px] text-muted-strong leading-[1.75]">
            <p className="text-ink-soft font-medium">{t.founder.lines[0]}</p>
            <p>{t.founder.lines[1]}</p>
            <p className="text-ink-soft">{t.founder.lines[2]}</p>
            <p>{t.founder.lines[3]}</p>
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <span className="text-[14px] text-muted">{t.founder.contactLabel}</span>
              <a
                className="inline-block text-accent hover:underline font-mono text-[15px]"
                href="mailto:larrchen0125@gmail.com"
              >
                larrchen0125@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
