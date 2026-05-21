'use client';
import { useT } from '@/lib/i18n';

export default function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-border py-16 md:py-20 text-[13px] text-muted bg-panel/30">
      <div className="max-w-wide mx-auto px-6 grid md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <div className="text-ink font-semibold tracking-tight text-[17px] mb-3">Thynoria</div>
          <div className="text-[13px] leading-relaxed text-muted">{t.footer.slogan}</div>
        </div>
        <div>
          <div className="text-[11px] font-mono tracking-eyebrow text-muted-strong mb-4">
            {t.footer.contactTitle.toUpperCase()}
          </div>
          <a
            className="text-ink-soft hover:text-accent transition font-mono text-[13.5px]"
            href="mailto:larrchen0125@gmail.com"
          >
            larrchen0125@gmail.com
          </a>
        </div>
        <div>
          <div className="text-[11px] font-mono tracking-eyebrow text-muted-strong mb-4">
            {t.footer.companyTitle.toUpperCase()}
          </div>
          <div className="text-ink-soft text-[13.5px]">{t.footer.companyL1}</div>
          <div className="text-[13px] mt-1">{t.footer.companyL2}</div>
        </div>
      </div>
      <div className="max-w-wide mx-auto px-6 mt-14 pt-8 border-t border-border text-[12px] leading-relaxed text-muted-soft">
        © {new Date().getFullYear()} Thynoria Limited. {t.footer.rights}
        <br className="hidden sm:inline" />
        <span className="sm:ml-0">{t.footer.legal}</span>
      </div>
    </footer>
  );
}
