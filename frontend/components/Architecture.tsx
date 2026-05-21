'use client';
import { useT } from '@/lib/i18n';
import { SectionHead } from './PainPoints';

export default function Architecture() {
  const { t } = useT();
  return (
    <section id="architecture" className="py-28 border-t border-border bg-panel/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead
          eyebrow={t.architecture.eyebrow}
          heading={t.architecture.heading}
          sub={t.architecture.sub}
        />

        <div className="mt-16 max-w-4xl mx-auto">
          {/* Layer 1: Your Apps */}
          <Tier
            label={t.architecture.apps}
            list={t.architecture.appsList}
            dim
          />

          <Connector />

          {/* Layer 2: Thynoria Layer (highlight) */}
          <div className="relative">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-accent/30 to-accent/5 opacity-60 blur-xl pointer-events-none" />
            <div className="relative rounded-xl border border-accent/40 bg-elevated overflow-hidden">
              <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,112,243,0.8)]" />
                  <span className="text-[13px] font-mono tracking-wider text-accent">
                    {t.architecture.layer}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-muted tracking-wider">CORE</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4">
                {t.architecture.layerItems.map((item, i) => (
                  <div
                    key={item}
                    className={`px-6 py-6 text-center ${i < 3 ? 'md:border-r border-border' : ''} ${i < 2 ? 'border-r border-b md:border-b-0 border-border' : ''} ${i === 2 ? 'border-b md:border-b-0 border-border' : ''}`}
                  >
                    <div className="font-mono text-[10px] text-muted tracking-wider mb-2">
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
          <Tier
            label={t.architecture.providers}
            list={t.architecture.providersList}
            dim
          />
        </div>
      </div>
    </section>
  );
}

function Tier({ label, list, dim }: { label: string; list: string; dim?: boolean }) {
  return (
    <div
      className={`rounded-xl border border-border bg-panel px-6 py-5 ${
        dim ? 'opacity-90' : ''
      }`}
    >
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="text-[14px] font-medium text-ink">{label}</div>
        <div className="text-[13px] font-mono text-muted tracking-wide">{list}</div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-3">
      <div className="w-px h-8 bg-gradient-to-b from-border-strong to-accent/60" />
    </div>
  );
}
