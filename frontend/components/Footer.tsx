export default function Footer() {
  return (
    <footer className="border-t border-border py-12 text-sm text-muted">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-ink font-semibold">Thynoria</div>
          <div className="mt-2">Reliability Infrastructure for Enterprise AI</div>
        </div>
        <div>
          <div className="text-ink font-medium mb-2">联系我们</div>
          <a
            className="hover:text-accent"
            href="mailto:larrchen0125@gmail.com"
          >
            larrchen0125@gmail.com
          </a>
        </div>
        <div>
          <div className="text-ink font-medium mb-2">公司信息</div>
          <div>Thynoria Limited</div>
          <div>Registered in Hong Kong</div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-border text-xs leading-relaxed">
        © {new Date().getFullYear()} Thynoria Limited. All rights reserved.
        <br />
        Thynoria 是注册于香港的服务提供商，面向全球开发者提供 AI API 聚合服务，不主动向中国大陆境内提供服务。所有用户对自身的合规使用承担全部责任。
      </div>
    </footer>
  );
}
