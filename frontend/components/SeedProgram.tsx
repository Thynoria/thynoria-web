export default function SeedProgram() {
  const perks = [
    '前 6 个月费用半价',
    '创始人微信 1v1 兜底，出现故障半夜也回',
    '优先功能开发权，你的核心需求会进入首版路线图',
    '永久锁定种子客户价，未来不调价',
  ];
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-xs rounded-full border border-brand/50 text-brand">
          仅 3 个名额
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-ink">
          正在招募前 3 家种子客户
        </h2>
        <p className="mt-4 text-muted">
          我们目前处于内测阶段，正在邀请 3 家种子客户共建产品。
        </p>
        <ul className="mt-10 grid md:grid-cols-2 gap-4 text-left">
          {perks.map((p) => (
            <li
              key={p}
              className="flex gap-3 rounded-lg border border-border bg-panel/40 p-4 text-ink"
            >
              <span className="text-brand">✦</span> {p}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">
          作为交换，我们希望你愿意每两周给我们 30 分钟反馈。
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-3 rounded-md bg-brand text-white hover:opacity-90"
          >
            申请加入种子客户 →
          </a>
          <a
            href="mailto:larrchen0125@gmail.com"
            className="px-6 py-3 rounded-md border border-border text-ink hover:border-brand"
          >
            先聊聊 · larrchen0125@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
