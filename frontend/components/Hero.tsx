'use client';
import { useT } from '@/lib/i18n';

export default function Hero() {
  const { t } = useT();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid fade-bottom pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        {/* Eyebrow */}
        <div className="flex justify-center mb-8">
          <div className="text-[11px] font-mono tracking-eyebrow text-accent flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,112,243,0.8)]" />
            {t.hero.eyebrow}
          </div>
        </div>

        {/* H1 */}
        <h1 className="text-center text-[44px] md:text-[68px] leading-[1.05] font-semibold tracking-tightest text-ink">
          {t.hero.h1Line1}
          <br />
          <span className="text-muted-strong">{t.hero.h1Line2}</span>
        </h1>

        {/* Sub */}
        <p className="mt-8 text-center text-[17px] md:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          {t.hero.sub}
        </p>

        {/* Trust tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-muted">
          <TrustTag>{t.hero.tag1}</TrustTag>
          <TrustTag>{t.hero.tag2}</TrustTag>
          <TrustTag>{t.hero.tag3}</TrustTag>
          <TrustTag>{t.hero.tag4}</TrustTag>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-md bg-accent text-white text-[14px] font-medium hover:bg-accent-hover transition shadow-[0_4px_24px_-4px_rgba(0,112,243,0.4)]"
          >
            {t.hero.cta1} →
          </a>
          <a
            href="mailto:larrchen0125@gmail.com"
            className="px-5 py-2.5 rounded-md border border-border text-ink text-[14px] hover:border-border-strong hover:bg-panel transition"
          >
            {t.hero.cta2}
          </a>
        </div>

        {/* Code window */}
        <div className="mt-20 mx-auto max-w-3xl rounded-lg border border-border bg-panel overflow-hidden shadow-2xl shadow-black/40">
          <div className="px-4 py-2.5 border-b border-border bg-elevated flex items-center justify-between">
            <div className="text-[11px] font-mono tracking-wider text-muted">{t.hero.codeLabel}</div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-border-strong" />
              <span className="w-2 h-2 rounded-full bg-border-strong" />
              <span className="w-2 h-2 rounded-full bg-border-strong" />
            </div>
          </div>
          <pre className="p-6 font-mono text-[13px] leading-relaxed overflow-x-auto">
            <span className="text-[#FF8B7B]">from</span>{' '}
            <span className="text-ink">openai</span>{' '}
            <span className="text-[#FF8B7B]">import</span>{' '}
            <span className="text-ink">OpenAI</span>
            {'\n\n'}
            <span className="text-ink">client = OpenAI(</span>
            {'\n    '}
            <span className="text-[#79B8FF]">base_url</span>
            <span className="text-ink">=</span>
            <span className="text-[#9ECBFF]">&quot;https://api.thynoria.com/v1&quot;</span>
            <span className="text-ink">,</span>
            {'\n    '}
            <span className="text-[#79B8FF]">api_key</span>
            <span className="text-ink">=</span>
            <span className="text-[#9ECBFF]">&quot;thy-xxxxxxxx&quot;</span>
            {'\n'}
            <span className="text-ink">)</span>
            {'\n\n'}
            <span className="text-muted">{t.hero.codeComment}</span>
          </pre>
        </div>
      </div>
    </section>
  );
}

function TrustTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-1 h-1 rounded-full bg-accent/70" />
      {children}
    </span>
  );
}
