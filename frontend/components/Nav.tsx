export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bg/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src="/logo.svg"
            alt="Thynoria"
            className="h-8 w-8 transition-transform group-hover:scale-110"
          />
          <span className="font-bold tracking-wider text-ink text-lg">
            THYNORIA
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#capabilities" className="hover:text-ink transition">产品</a>
          <a href="#comparison" className="hover:text-ink transition">对比</a>
          <a href="mailto:larrchen0125@gmail.com" className="hover:text-ink transition">联系我们</a>
        </div>
        <a
          href="#contact"
          className="px-4 py-2 rounded-md bg-gradient-to-r from-brand to-accent text-white text-sm font-medium hover:opacity-90 transition shadow-lg shadow-brand/20"
        >
          申请内测
        </a>
      </div>
    </nav>
  );
}
