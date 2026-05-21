'use client';
import { useT } from '@/lib/i18n';
import SectionHead from './SectionHead';

export default function Architecture() {
  const { t } = useT();
  return (
    <section
      id="architecture"
      className="py-28 md:py-36 border-t border-border bg-panel/40"
    >
      <div className="max-w-wide mx-auto px-6 lg:px-8">
        <SectionHead
          eyebrow={t.architecture.eyebrow}
          heading={t.architecture.heading}
          sub={t.architecture.sub}
        />

        <div className="mt-20 max-w-3xl mx-auto">
          {/* Layer 1: Apps */}
          <Tier label={t.architecture.apps} list={t.architecture.appsList} />

          <Connector />

          {/* Layer 2: Core */}
          <div className="relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/30 to-transparent opacity-70 blur-2xl pointer-events-none" />
            <div className="relative rounded-2xl border border-accent/40 bg-elevated overflow-hidden shadow-[0_0_0_1px_rgba(59,130,246,0.10),_0_24px_60px_-24px_rgba(59,130,246,0.25)]">
              <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.9)]" />
                  <span className="text-[12px] font-mono tracking-eyebrow text-accent uppercase">
                    {t.architecture.layer}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-muted tracking-eyebrow">CORE</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
                {t.architecture.layerItems.map((item, i) => (
                  <div key={item} className="px-5 py-7 text-center">
                    <div className="font-mono text-[11px] text-muted tracking-eyebrow mb-2.5 uppercase">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="text-[15px] md:text-[15.5px] font-medium text-ink">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Connector />

          {/* Layer 3: Providers */}
          <Tier label={t.architecture.providers} list={t.architecture.providersList} />
        </div>
      </div>
    </section>
  );
}

function Tier({ label, list }: { label: string; list: string }) {
  return (
    <div className="rounded-2xl border border-border bg-panel px-6 py-5 md:px-7 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div className="text-[15px] md:text-[16px] font-medium text-ink">{label}</div>
      <div className="text-[13px] md:text-[14px] font-mono text-muted-strong tracking-wide">
        {list}
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-3">
      <div className="w-px h-10 bg-gradient-to-b from-border via-accent/30 to-accent/60" />
    </div>
  );
}
