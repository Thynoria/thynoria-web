export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 背景层：网格 + 多层光晕 */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 glow" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-28 text-center">
        {/* 巨型 Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand to-accent blur-2xl opacity-50 rounded-full" />
            <img
              src="/logo.svg"
              alt="Thynoria"
              className="relative h-24 w-24 md:h-32 md:w-32 drop-shadow-[0_0_30px_rgba(124,58,237,0.5)]"
            />
          </div>
        </div>

        {/* 品牌名 */}
        <h1 className="text-5xl md:text-7xl font-black tracking-[0.15em] text-ink mb-3">
          THYNORIA
        </h1>
        <div className="text-sm md:text-base tracking-[0.4em] text-muted mb-10">
          星 · 诺 · 智 · 能
        </div>

        {/* 主 Slogan */}
        <div className="inline-block px-4 py-1.5 mb-6 text-xs rounded-full border border-brand/40 bg-brand/5 text-brand backdrop-blur">
          🇭🇰 香港主体 · 面向亚太华人 AI 出海团队
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          <span className="text-ink">Reliability Infrastructure</span>
          <br />
          <span className="bg-gradient-to-r from-brand via-pink-400 to-accent bg-clip-text text-transparent">
            for Enterprise AI
          </span>
        </h2>

        <p className="mt-7 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          一套凭据，一个入口，多通道容灾。
          <br />
          为出海 AI 团队打造的<span className="text-ink font-medium">企业级 AI Runtime Infrastructure</span>。
        </p>

        <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          <span>🇭🇰 香港主体</span>
          <span className="text-border">·</span>
          <span>📜 合规透明</span>
          <span className="text-border">·</span>
          <span>💬 中英双语</span>
          <span className="text-border">·</span>
          <span>⚡ 明确 SLA</span>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-md bg-gradient-to-r from-brand to-accent text-white font-medium hover:opacity-90 transition shadow-xl shadow-brand/30"
          >
            申请内测 →
          </a>
          <a
            href="mailto:larrchen0125@gmail.com"
            className="px-7 py-3.5 rounded-md border border-border bg-panel/40 text-ink hover:border-brand transition backdrop-blur"
          >
            联系创始人
          </a>
        </div>

        {/* 代码示例 */}
        <div className="mt-20 max-w-3xl mx-auto rounded-xl border border-border bg-panel/60 backdrop-blur shadow-2xl shadow-brand/10 overflow-hidden text-left">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-panel/80">
            <span className="w-3 h-3 rounded-full bg-rose-500/60" />
            <span className="w-3 h-3 rounded-full bg-amber-500/60" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
            <span className="ml-3 text-xs text-muted font-mono">业务代码零改造</span>
          </div>
          <pre className="p-6 font-mono text-sm overflow-x-auto leading-relaxed">
            <span className="text-pink-400">from</span>
            <span className="text-ink"> openai </span>
            <span className="text-pink-400">import</span>
            <span className="text-ink"> OpenAI</span>
            {'\n\n'}
            <span className="text-ink">client = OpenAI(</span>
            {'\n  '}
            <span className="text-accent">base_url</span>
            <span className="text-ink">=</span>
            <span className="text-emerald-400">"https://api.thynoria.com/v1"</span>
            <span className="text-ink">,</span>
            {'\n  '}
            <span className="text-accent">api_key</span>
            <span className="text-ink">=</span>
            <span className="text-emerald-400">"thy-xxxxxxxx"</span>
            {'\n'}
            <span className="text-ink">)</span>
            {'\n'}
            <span className="text-muted"># 背后：OpenAI · Azure · Anthropic · Gemini · DeepSeek</span>
            {'\n'}
            <span className="text-muted"># 主通道异常 → 毫秒级自动切换，流式响应不中断</span>
          </pre>
        </div>
      </div>
    </section>
  );
}
