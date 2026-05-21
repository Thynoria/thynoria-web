'use client';
import { useT } from '@/lib/i18n';

export default function Hero() {
  const { t } = useT();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid fade-bottom pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 top-hairline pointer-events-none" />

      <div className="relative max-w-content mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        {/* Eyebrow */}
        <div className="flex justify-center mb-10">
          <div className="text-[12px] font-mono tracking-eyebrow text-accent inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.9)]" />
            {t.hero.eyebrow}
          </div>
        </div>

        {/* H1 */}
        <h1 className="text-center text-[44px] sm:text-[56px] md:text-[68px] lg:text-[76px] leading-[1.04] font-semibold tracking-tightest text-ink max-w-4xl mx-auto">
          {t.hero.h1}
        </h1>

        {/* Sub */}
        <p className="mt-8 md:mt-10 text-center text-[17px] md:text-[19px] text-muted-strong leading-[1.6] max-w-2xl mx-auto">
          {t.hero.sub}
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-accent text-white text-[15px] font-medium hover:bg-accent-hover transition shadow-[0_6px_30px_-8px_rgba(59,130,246,0.6)]"
          >
            {t.hero.cta1}
            <span aria-hidden>→</span>
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border-strong bg-panel/60 text-ink text-[15px] font-medium hover:border-accent/40 hover:bg-panel transition"
          >
            {t.hero.cta2}
          </a>
        </div>

        {/* Trust line */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[14px] text-muted-strong">
          <TrustTag>{t.hero.tag1}</TrustTag>
          <Divider />
          <TrustTag>{t.hero.tag2}</TrustTag>
          <Divider />
          <TrustTag>{t.hero.tag3}</TrustTag>
          <Divider />
          <TrustTag>{t.hero.tag4}</TrustTag>
        </div>

        {/* Code window */}
        <div className="mt-20 md:mt-24 mx-auto max-w-2xl rounded-2xl border border-border bg-panel overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8),_0_0_0_1px_rgba(255,255,255,0.02)_inset]">
          <div className="px-5 py-3.5 border-b border-border bg-elevated flex items-center justify-between">
            <div className="text-[11px] font-mono tracking-eyebrow text-muted-strong">
              {t.hero.codeLabel}
            </div>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
              <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
              <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
            </div>
          </div>
          <pre className="px-6 py-5 font-mono text-[14px] leading-[1.75] overflow-x-auto">
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
    <span className="inline-flex items-center gap-2">
      <span className="w-1 h-1 rounded-full bg-accent/80" />
      {children}
    </span>
  );
}

function Divider() {
  return <span className="hidden sm:inline text-border-strong text-[12px]">·</span>;
}
