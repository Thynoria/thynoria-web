'use client';
import { useT } from '@/lib/i18n';

export default function Nav() {
  const { t, locale, setLocale } = useT();
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bg/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-ink font-semibold tracking-tight text-[17px]">
          Thynoria
        </a>

        <div className="hidden md:flex items-center gap-8 text-[13px] text-muted">
          <a href="#stack" className="hover:text-ink transition">{t.nav.stack}</a>
          <a href="#architecture" className="hover:text-ink transition">{t.nav.architecture}</a>
          <a href="#compare" className="hover:text-ink transition">{t.nav.compare}</a>
          <a href="mailto:larrchen0125@gmail.com" className="hover:text-ink transition">{t.nav.contact}</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
            className="text-[12px] text-muted hover:text-ink transition px-2 py-1 border border-border rounded font-mono tracking-wider"
            aria-label="Switch language"
          >
            {locale === 'zh' ? 'EN' : '中'}
          </button>
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-md bg-accent text-white text-[13px] font-medium hover:bg-accent-hover transition"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
