'use client';
import { useT } from '@/lib/i18n';
import SectionHead from './SectionHead';

export default function Comparison() {
  const { t } = useT();
  return (
    <section id="compare" className="py-24 md:py-32 border-t border-border bg-panel/40">
      <div className="max-w-wide mx-auto px-6">
        <SectionHead
          eyebrow={t.compare.eyebrow}
          heading={t.compare.heading}
          sub={t.compare.sub}
        />

        <div className="mt-16 md:mt-20 -mx-6 px-6 overflow-x-auto">
          <table className="w-full min-w-[760px] text-[14px]">
            <thead>
              <tr className="border-b border-border-strong">
                {t.compare.cols.map((c, i) => (
                  <th
                    key={i}
                    className={`px-4 py-4 text-left font-mono text-[11.5px] tracking-wide font-medium ${
                      i === 4 ? 'text-accent' : 'text-muted'
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.compare.rows.map((r, i) => (
                <tr key={i} className="border-b border-border last:border-b-0 hover:bg-elevated/50 transition">
                  <td className="px-4 py-4 text-muted-strong font-medium">{r[0]}</td>
                  <td className="px-4 py-4 text-ink-soft">{r[1]}</td>
                  <td className="px-4 py-4 text-ink-soft">{r[2]}</td>
                  <td className="px-4 py-4 text-ink-soft">{r[3]}</td>
                  <td className="px-4 py-4 text-ink font-medium">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent shadow-[0_0_6px_rgba(0,112,243,0.9)]" />
                      {r[4]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
