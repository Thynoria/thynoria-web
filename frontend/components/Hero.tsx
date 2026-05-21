'use client';
import { useT } from '@/lib/i18n';

export default function Hero() {
  const { t } = useT();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid fade-bottom pointer-events-none" />

      <div className="relative max-w-content mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Eyebrow — small category badge */}
        <div className="flex justify-center mb-8">
          <div className="text-[11px] font-mono tracking-eyebrow text-accent inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-accent/30 bg-accent-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,112,243,0.9)]" />
            {t.hero.eyebrow}
          </div>
        </div>

        {/* H1 — brand slogan */}
        <h1 className="text-center text-[36px] sm:text-[48px] md:text-[60px] leading-[1.1] font-semibold tracking-tightest text-ink max-w-3xl mx-auto">
          {t.hero.h1}
        </h1>

        {/* Sub — brand positioning paragraph */}
        <p className="mt-7 md:mt-8 text-center text-[16px] md:text-[17px] text-muted leading-relaxed max-w-2xl mx-auto">
          {t.hero.sub}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-md bg-accent text-white text-[14px] font-medium hover:bg-accent-hover transition shadow-[0_4px_24px_-4px_rgba(0,112,243,0.45)]"
          >
            {t.hero.cta1} →
          </a>
          <a
            href="mailto:larrchen0125@gmail.com"
            className="px-5 py-2.5 rounded-md border border-border bg-panel/60 text-ink text-[14px] hover:border-border-strong hover:bg-panel transition"
          >
            {t.hero.cta2}
          </a>
        </div>

        {/* Trust tags */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-[13px] text-muted">
          <TrustTag>{t.hero.tag1}</TrustTag>
          <Divider />
          <TrustTag>{t.hero.tag2}</TrustTag>
          <Divider />
          <TrustTag>{t.hero.tag3}</TrustTag>
          <Divider />
          <TrustTag>{t.hero.tag4}</TrustTag>
        </div>

        {/* Code window */}
        <div className="mt-20 md:mt-24 mx-auto max-w-2xl rounded-xl border border-border bg-panel overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
          <div className="px-5 py-3 border-b border-border bg-elevated flex items-center justify-between">
            <div className="text-[10px] font-mono tracking-eyebrow text-muted">
              {t.hero.codeLabel}
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-border-strong" />
              <span className="w-2 h-2 rounded-full bg-border-strong" />
              <span className="w-2 h-2 rounded-full bg-border-strong" />
            </div>
          </div>
          <pre className="px-6 py-5 font-mono text-[13px] leading-[1.7] overflow-x-auto">
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

function Divider() {
  return <span className="hidden sm:inline text-border-strong">·</span>;
}
