'use client';
import { useT } from '@/lib/i18n';

export default function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-border py-16 text-[13px] text-muted bg-panel/30">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="text-ink font-semibold tracking-tight text-[16px] mb-3">Thynoria</div>
          <div className="leading-relaxed">{t.footer.slogan}</div>
        </div>
        <div>
          <div className="text-[11px] font-mono tracking-eyebrow text-muted-strong mb-3">
            {t.footer.contactTitle.toUpperCase()}
          </div>
          <a className="text-ink hover:text-accent transition font-mono" href="mailto:larrchen0125@gmail.com">
            larrchen0125@gmail.com
          </a>
        </div>
        <div>
          <div className="text-[11px] font-mono tracking-eyebrow text-muted-strong mb-3">
            {t.footer.companyTitle.toUpperCase()}
          </div>
          <div className="text-ink">{t.footer.companyL1}</div>
          <div>{t.footer.companyL2}</div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-border text-[12px] leading-relaxed text-muted">
        © {new Date().getFullYear()} Thynoria Limited. {t.footer.rights}
        <br />
        {t.footer.legal}
      </div>
    </footer>
  );
}
