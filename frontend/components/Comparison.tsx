const rows = [
  ['主战场', '全球开发者', '大陆个人开发者', '全球企业', '亚太华人出海企业'],
  ['定价策略', '略有折扣', '极低价', '标准', '标准价 · 不打价格战'],
  ['多通道容灾', '有限', '无', '无', '毫秒级自动切换'],
  ['合同发票', '无中文', '模糊', '美元英文', '港币 · 中英双语'],
  ['客户支持', '英文 / Discord', '微信群无承诺', '工单', '中文 · 1v1 专属群'],
  ['SLA 承诺', '无', '无', '无明确', '有明确 SLA 与违约责任'],
  ['主体合规', '海外', '不透明', '海外', '香港正规公司'],
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink">
          为什么选 Thynoria
        </h2>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead className="bg-panel">
              <tr className="text-left text-muted">
                <th className="px-4 py-3 font-medium">维度</th>
                <th className="px-4 py-3 font-medium">OpenRouter</th>
                <th className="px-4 py-3 font-medium">国内中转站</th>
                <th className="px-4 py-3 font-medium">官方直连</th>
                <th className="px-4 py-3 font-medium text-brand">Thynoria</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className="border-t border-border hover:bg-panel/40"
                >
                  <td className="px-4 py-3 text-muted">{r[0]}</td>
                  <td className="px-4 py-3 text-ink">{r[1]}</td>
                  <td className="px-4 py-3 text-ink">{r[2]}</td>
                  <td className="px-4 py-3 text-ink">{r[3]}</td>
                  <td className="px-4 py-3 text-ink font-medium">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
