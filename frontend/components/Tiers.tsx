'use client';
import { useT } from '@/lib/i18n';
import SectionHead from './SectionHead';

export default function Tiers() {
  const { t } = useT();
  return (
    <section
      id="pricing"
      className="py-28 md:py-36 border-t border-border bg-panel/40"
    >
      <div className="max-w-wide mx-auto px-6 lg:px-8">
        <SectionHead
          eyebrow={t.tiers.eyebrow}
          heading={t.tiers.heading}
          sub={t.tiers.sub}
        />

        <div className="mt-20 grid md:grid-cols-3 gap-6 items-stretch">
          {t.tiers.items.map((tier, i) => (
            <TierCard
              key={tier.name}
              tier={tier}
              featuredLabel={t.tiers.featuredLabel}
              index={i}
            />
          ))}
        </div>

        <p className="mt-12 text-center text-[14px] text-muted leading-relaxed max-w-2xl mx-auto">
          {t.tiers.footnote}
        </p>
      </div>
    </section>
  );
}

type Tier = {
  name: string;
  tagline: string;
  features: string[];
  cta: string;
  featured: boolean;
};

function TierCard({
  tier,
  featuredLabel,
  index,
}: {
  tier: Tier;
  featuredLabel: string;
  index: number;
}) {
  if (tier.featured) {
    return (
      <div className="relative">
        {/* Glow */}
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-accent/20 to-transparent opacity-70 blur-2xl pointer-events-none" />
        <div
          className="relative rounded-2xl bg-panel-2 p-8 md:p-9 flex flex-col h-full gradient-border shadow-featured"
        >
          {/* Featured badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white text-[11px] font-mono tracking-eyebrow uppercase shadow-[0_4px_16px_-4px_rgba(59,130,246,0.6)]">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {featuredLabel}
            </span>
          </div>
          <TierContent tier={tier} variant="featured" index={index} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl border border-border bg-panel p-8 md:p-9 flex flex-col h-full card-glow">
      <TierContent tier={tier} variant="default" index={index} />
    </div>
  );
}

function TierContent({
  tier,
  variant,
  index,
}: {
  tier: Tier;
  variant: 'default' | 'featured';
  index: number;
}) {
  const isFeatured = variant === 'featured';
  return (
    <>
      <div className="font-mono text-[12px] tracking-eyebrow uppercase text-muted mb-5">
        {String(index + 1).padStart(2, '0')} · TIER
      </div>

      <h3
        className={`text-[26px] md:text-[28px] font-semibold tracking-tighter2 ${
          isFeatured ? 'text-ink' : 'text-ink'
        }`}
      >
        {tier.name}
      </h3>

      <p className="mt-3 text-[15px] md:text-[15.5px] text-muted-strong leading-[1.55] min-h-[44px]">
        {tier.tagline}
      </p>

      {/* Divider */}
      <div
        className={`my-8 h-px ${
          isFeatured
            ? 'bg-gradient-to-r from-transparent via-accent/40 to-transparent'
            : 'bg-border'
        }`}
      />

      {/* Features */}
      <ul className="space-y-3.5 mb-8">
        {tier.features.map((f) => (
          <li
            key={f}
            className="flex gap-3 text-[14.5px] md:text-[15px] text-ink-soft leading-[1.6]"
          >
            <Check featured={isFeatured} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA pinned to bottom */}
      <div className="mt-auto pt-2">
        <a
          href="#contact"
          className={
            isFeatured
              ? 'block text-center px-5 py-3 rounded-md bg-accent text-white text-[14.5px] font-medium hover:bg-accent-hover transition shadow-[0_6px_24px_-8px_rgba(59,130,246,0.6)]'
              : 'block text-center px-5 py-3 rounded-md border border-border-strong bg-elevated text-ink text-[14.5px] font-medium hover:border-accent/40 hover:bg-elevated-2 transition'
          }
        >
          {tier.cta} →
        </a>
      </div>
    </>
  );
}

function Check({ featured }: { featured: boolean }) {
  return (
    <span
      className={`shrink-0 mt-1 w-4 h-4 rounded-full inline-flex items-center justify-center ${
        featured
          ? 'bg-accent/15 text-accent'
          : 'bg-elevated text-accent border border-border'
      }`}
      aria-hidden
    >
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path
          d="M1.5 5.2L4 7.5L8.5 2.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
