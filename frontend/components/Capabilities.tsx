const items = [
  {
    tag: '01',
    title: '多通道智能容灾',
    desc: '同一个模型背后挂载多家上游，主通道出现 429 / 5xx / 超时 / 假活时毫秒级自动切换，流式响应也能接续。这是 Thynoria 区别于普通中转站和 OpenRouter 的关键技术底座。',
  },
  {
    tag: '02',
    title: '统一 API · 协议自动翻译',
    desc: '提供 OpenAI 兼容协议，背后自动翻译到 Anthropic、Gemini、各家上游的真实协议。你只需要换一个 base_url 和一个 key，业务代码零改造。',
  },
  {
    tag: '03',
    title: '香港主体 · 合规可控',
    desc: '注册于香港的正规服务商，提供中英双语合同与发票、港币 / USDT 多种付款方式、明确的 SLA 承诺与违约责任。月底报销不再扯皮。',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink">
          Thynoria 的三个核心能力
        </h2>
        <p className="mt-4 text-center text-muted">
          不做花哨功能，把基础设施层做厚、做稳。
        </p>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.tag}
              className="rounded-xl border border-border bg-panel/40 p-6"
            >
              <div className="font-mono text-sm text-brand">{it.tag}</div>
              <h3 className="mt-3 text-xl font-semibold text-ink">{it.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
