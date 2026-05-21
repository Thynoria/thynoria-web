const items = [
  {
    icon: '🔥',
    title: 'OpenAI 抽风 18 分钟，业务就停了 18 分钟',
    desc: '没有 Plan B、没有自动切换、没有告警。等你发现，客户已经跑去用竞品了。',
  },
  {
    icon: '📄',
    title: '用中转站，月底报销发票拿不出来',
    desc: '公司主体在香港 / 新加坡，财务要正规合同与中英双语发票。中转站连真实主体都不愿告诉你。',
  },
  {
    icon: '🔑',
    title: '7 家供应商 12 个 key，账单和额度没人说得清',
    desc: 'OpenAI、Azure、Claude、Gemini、DeepSeek……协议、计费、配额各不相同，出问题时日志都拼不出来。',
  },
];

export default function PainPoints() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink">
          你是不是也遇到过这些事？
        </h2>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-xl border border-border bg-panel/40 p-6 hover:border-brand/60 transition"
            >
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{it.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
