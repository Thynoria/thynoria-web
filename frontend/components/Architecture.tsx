'use client';
import { useT } from '@/lib/i18n';
import SectionHead from './SectionHead';

export default function Architecture() {
  const { t } = useT();
  return (
    <section id="architecture" className="py-24 md:py-32 border-t border-border bg-panel/40">
      <div className="max-w-wide mx-auto px-6">
        <SectionHead
          eyebrow={t.architecture.eyebrow}
          heading={t.architecture.heading}
          sub={t.architecture.sub}
        />

        <div className="mt-16 md:mt-20 max-w-3xl mx-auto">
          {/* Layer 1: Apps */}
          <Tier label={t.architecture.apps} list={t.architecture.appsList} />

          <Connector />

          {/* Layer 2: Core */}
          <div className="relative">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-accent/25 to-transparent opacity-70 blur-2xl pointer-events-none" />
            <div className="relative rounded-xl border border-accent/40 bg-elevated overflow-hidden shadow-[0_0_0_1px_rgba(0,112,243,0.08)]">
              <div className="px-5 py-3.5 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,112,243,0.9)]" />
                  <span className="text-[12px] font-mono tracking-eyebrow text-accent">
                    {t.architecture.layer}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-muted tracking-eyebrow">CORE</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
                {t.architecture.layerItems.map((item, i) => (
                  <div key={item} className="px-5 py-6 text-center">
                    <div className="font-mono text-[10px] text-muted tracking-eyebrow mb-2">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="text-[14px] font-medium text-ink">{item}</div>
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
    <div className="rounded-xl border border-border bg-panel px-5 py-4 md:px-6 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <div className="text-[14px] font-medium text-ink">{label}</div>
      <div className="text-[12px] md:text-[13px] font-mono text-muted tracking-wide">{list}</div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-2.5">
      <div className="w-px h-8 bg-gradient-to-b from-border to-accent/50" />
    </div>
  );
}
