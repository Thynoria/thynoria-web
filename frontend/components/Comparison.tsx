'use client';
import { useT } from '@/lib/i18n';
import SectionHead from './SectionHead';

export default function Comparison() {
  const { t } = useT();
  return (
    <section
      id="compare"
      className="py-28 md:py-36 border-t border-border bg-panel/40"
    >
      <div className="max-w-wide mx-auto px-6 lg:px-8">
        <SectionHead
          eyebrow={t.compare.eyebrow}
          heading={t.compare.heading}
          sub={t.compare.sub}
        />

        <div className="mt-20 rounded-2xl border border-border bg-panel overflow-hidden">
          <div className="-mx-px overflow-x-auto">
            <table className="w-full min-w-[800px] text-[15px]">
              <thead>
                <tr className="border-b border-border-strong bg-elevated/60">
                  {t.compare.cols.map((c, i) => (
                    <th
                      key={i}
                      className={`px-5 py-5 text-left font-mono text-[12px] tracking-eyebrow font-medium uppercase ${
                        i === 4 ? 'text-accent' : 'text-muted-strong'
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.compare.rows.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-border last:border-b-0 hover:bg-elevated/50 transition"
                  >
                    <td className="px-5 py-4 text-ink-soft font-medium">{r[0]}</td>
                    <td className="px-5 py-4 text-muted-strong">{r[1]}</td>
                    <td className="px-5 py-4 text-muted-strong">{r[2]}</td>
                    <td className="px-5 py-4 text-muted-strong">{r[3]}</td>
                    <td className="px-5 py-4 text-ink font-medium">
                      <span className="inline-flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,0.9)]" />
                        {r[4]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
