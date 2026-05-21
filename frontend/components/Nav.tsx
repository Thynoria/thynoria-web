'use client';
import { useEffect, useState } from 'react';
import { useT } from '@/lib/i18n';

export default function Nav() {
  const { t, locale, setLocale } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#stack', label: t.nav.product },
    { href: '#fit', label: t.nav.solutions },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#about', label: t.nav.about },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-bg/80 border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-wide mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-ink hover:opacity-90 transition"
          aria-label="Thynoria home"
        >
          <Logo />
          <span className="font-semibold tracking-tight text-[17px]">Thynoria</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-9 text-[14.5px] font-medium text-muted-strong">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-ink transition relative py-1"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
            className="text-[12px] font-mono tracking-eyebrow text-muted hover:text-ink transition px-2.5 py-1.5 border border-border rounded hover:border-border-strong"
            aria-label="Switch language"
          >
            {locale === 'zh' ? 'EN' : '中'}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex px-3.5 py-2 rounded-md text-[14px] font-medium text-ink-soft hover:text-ink hover:bg-elevated transition"
          >
            {t.nav.ctaSecondary}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-md bg-accent text-white text-[14px] font-medium whitespace-nowrap hover:bg-accent-hover transition shadow-[0_4px_24px_-6px_rgba(59,130,246,0.6)]"
          >
            {t.nav.cta}
            <span aria-hidden className="ml-0.5">→</span>
          </a>
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden ml-1 inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-muted hover:text-ink hover:border-border-strong transition"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M2 4h12" strokeLinecap="round" />
                  <path d="M2 12h12" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-xl">
          <div className="max-w-wide mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-[15px] text-ink-soft hover:text-ink border-b border-border/50 last:border-b-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Logo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-ink"
    >
      {/* 双重叠八边形 */}
      <path
        d="M7 3.5L17 3.5L21 7.5L21 16.5L17 20.5L7 20.5L3 16.5L3 7.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.45"
      />
      <path
        d="M9 6L15 6L18 9L18 15L15 18L9 18L6 15L6 9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* 中央 T */}
      <path
        d="M10 9.5H14M12 9.5V14.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
