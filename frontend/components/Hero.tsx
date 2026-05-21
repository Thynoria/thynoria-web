export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 glow" />
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-xs rounded-full border border-border text-muted">
          🇭🇰 香港主体 · 面向亚太华人 AI 出海团队
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink">
          Reliability Infrastructure
          <br />
          <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
            for Enterprise AI
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto">
          一套凭据，一个入口，多通道容灾。
          <br />
          为出海 AI 团队打造的企业级 AI Runtime Infrastructure。
        </p>
        <div className="mt-4 text-sm text-muted">
          香港主体 · 合规透明 · 中英双语支持 · 明确的 SLA 承诺
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-md bg-brand text-white hover:opacity-90 transition"
          >
            申请内测 →
          </a>
          <a
            href="mailto:larrchen0125@gmail.com"
            className="px-6 py-3 rounded-md border border-border text-ink hover:border-brand transition"
          >
            联系创始人
          </a>
        </div>

        <div className="mt-16 max-w-3xl mx-auto rounded-xl border border-border bg-panel/60 p-6 font-mono text-sm text-left">
          <div className="text-muted mb-2"># 业务代码零改造，换一个 base_url 即可</div>
          <pre className="text-ink overflow-x-auto">{`from openai import OpenAI

client = OpenAI(
    base_url="https://api.thynoria.com/v1",
    api_key="thy-xxxxxxxx"
)
# 背后：OpenAI · Azure · Anthropic · Gemini · DeepSeek
# 主通道异常时毫秒级自动切换，流式响应不中断`}</pre>
        </div>
      </div>
    </section>
  );
}
