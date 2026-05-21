export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-bg/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-wide text-ink">
          <span className="text-brand">●</span> Thynoria
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#capabilities" className="hover:text-ink">产品</a>
          <a href="#comparison" className="hover:text-ink">对比</a>
          <a href="mailto:larrchen0125@gmail.com" className="hover:text-ink">联系我们</a>
        </div>
        <a
          href="#contact"
          className="px-4 py-2 rounded-md bg-brand text-white text-sm hover:opacity-90"
        >
          申请内测
        </a>
      </div>
    </nav>
  );
}
