export default function FitCheck() {
  const fit = [
    '公司主体在 香港 / 新加坡 / 美国 的出海 AI 团队',
    '业务跑在生产环境，稳定性比省 5% 成本更重要',
    '需要合规发票、需要中文支持的港新美主体公司',
    '一线在踩 API 故障与多供应商管理的坑',
  ];
  const notFit = [
    '公司主体与业务都在中国大陆境内',
    '主要诉求是"比官方便宜 30%"',
    '个人开发者 / Hobby 项目',
  ];
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink">
          我们不适合所有人
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
            <div className="text-emerald-400 font-semibold mb-4">✓ 适合</div>
            <ul className="space-y-3">
              {fit.map((t) => (
                <li key={t} className="flex gap-3 text-ink">
                  <span className="text-emerald-400">●</span> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-6">
            <div className="text-rose-400 font-semibold mb-4">✗ 不适合</div>
            <ul className="space-y-3">
              {notFit.map((t) => (
                <li key={t} className="flex gap-3 text-muted">
                  <span className="text-rose-400">●</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
