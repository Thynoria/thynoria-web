'use client';
import { useT } from '@/lib/i18n';

export default function Nav() {
  const { t, locale, setLocale } = useT();
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bg/75 border-b border-border">
      <div className="max-w-wide mx-auto px-6 h-[60px] flex items-center justify-between">
        <a
          href="#"
          className="text-ink font-semibold tracking-tight text-[16px] hover:opacity-80 transition"
        >
          Thynoria
        </a>

        <div className="hidden md:flex items-center gap-8 text-[13.5px] text-muted">
          <a href="#stack" className="hover:text-ink transition">{t.nav.product}</a>
          <a href="#architecture" className="hover:text-ink transition">{t.nav.solutions}</a>
          <a href="#pricing" className="hover:text-ink transition">{t.nav.pricing}</a>
          <a href="#about" className="hover:text-ink transition">{t.nav.about}</a>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
            className="text-[11px] font-mono tracking-eyebrow text-muted hover:text-ink transition px-2.5 py-1 border border-border rounded hover:border-border-strong"
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
