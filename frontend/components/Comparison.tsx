'use client';
import { useT } from '@/lib/i18n';
import { SectionHead } from './PainPoints';

export default function Comparison() {
  const { t } = useT();
  return (
    <section id="compare" className="py-28 border-t border-border bg-panel/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead
          eyebrow={t.compare.eyebrow}
          heading={t.compare.heading}
          sub={t.compare.sub}
        />

        <div className="mt-16 overflow-x-auto">
          <table className="w-full text-[14px] border border-border rounded-xl overflow-hidden bg-panel">
            <thead className="bg-elevated">
              <tr>
                {t.compare.cols.map((c, i) => (
                  <th
                    key={i}
                    className={`px-5 py-4 text-left font-mono text-[11px] tracking-eyebrow ${
                      i === 4 ? 'text-accent' : 'text-muted'
                    }`}
                  >
                    {c.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.compare.rows.map((r, i) => (
                <tr
                  key={i}
                  className="border-t border-border hover:bg-elevated/50 transition"
                >
                  <td className="px-5 py-4 text-muted font-medium">{r[0]}</td>
                  <td className="px-5 py-4 text-ink/80">{r[1]}</td>
                  <td className="px-5 py-4 text-ink/80">{r[2]}</td>
                  <td className="px-5 py-4 text-ink/80">{r[3]}</td>
                  <td className="px-5 py-4 text-ink font-medium">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent shadow-[0_0_6px_rgba(0,112,243,0.8)]" />
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
