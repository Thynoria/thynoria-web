export default function Founder() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-ink">关于创始人</h2>
        <div className="mt-8 space-y-5 text-muted leading-relaxed">
          <p>
            我是 <span className="text-ink font-semibold">Larry Chen</span>，Thynoria 的创始人。
          </p>
          <p>
            在创办 Thynoria 之前，我曾在生产环境亲历过多次 OpenAI、Anthropic 的区域性故障，
            也亲手用胶带和铁丝把多通道容灾这件事缝合过无数次。
          </p>
          <p className="text-ink">
            我相信：AI 基础设施的价值，不在于平时跑得多快，而在于出事时还活着。
          </p>
          <p>
            Thynoria 是我把这些年踩过的坑沉淀下来，做给和我有同样烦恼的出海 AI 团队的工具。
          </p>
          <p>
            如果你也在踩同样的坑，欢迎随时找我聊：
            <br />
            📧{' '}
            <a
              className="text-accent hover:underline"
              href="mailto:larrchen0125@gmail.com"
            >
              larrchen0125@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
