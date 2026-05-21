'use client';
import { useT } from '@/lib/i18n';

export default function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-border py-16 md:py-20 text-[14px] text-muted-strong bg-panel/30">
      <div className="max-w-wide mx-auto px-6 lg:px-8 grid md:grid-cols-[1.6fr_1fr_1fr] gap-12 md:gap-16">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <FooterLogo />
            <span className="text-ink font-semibold tracking-tight text-[18px]">
              Thynoria
            </span>
          </div>
          <div className="text-[14px] leading-[1.7] text-muted-strong max-w-sm">
            {t.footer.slogan}
          </div>
        </div>
        <div>
          <div className="text-[12px] font-mono tracking-eyebrow text-muted-strong mb-5 uppercase">
            {t.footer.contactTitle}
          </div>
          <a
            className="text-ink-soft hover:text-accent transition font-mono text-[14.5px]"
            href="mailto:larrchen0125@gmail.com"
          >
            larrchen0125@gmail.com
          </a>
        </div>
        <div>
          <div className="text-[12px] font-mono tracking-eyebrow text-muted-strong mb-5 uppercase">
            {t.footer.companyTitle}
          </div>
          <div className="text-ink-soft text-[14.5px]">{t.footer.companyL1}</div>
          <div className="text-[13.5px] text-muted-strong mt-1.5">{t.footer.companyL2}</div>
        </div>
      </div>
      <div className="max-w-wide mx-auto px-6 lg:px-8 mt-14 pt-8 border-t border-border text-[13px] leading-[1.7] text-muted">
        © {new Date().getFullYear()} Thynoria Limited. {t.footer.rights}
        <br className="hidden sm:inline" />
        <span className="sm:ml-0">{t.footer.legal}</span>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-ink"
    >
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
      <path
        d="M10 9.5H14M12 9.5V14.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
