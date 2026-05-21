'use client';
import { useState } from 'react';
import { useT } from '@/lib/i18n';

export default function ContactForm() {
  const { t } = useT();
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  const [errMsg, setErrMsg] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrMsg('');
    const fd = new FormData(e.currentTarget);
    const payload = {
      email: fd.get('email'),
      entity_location: fd.get('entity_location'),
      monthly_spend: fd.get('monthly_spend'),
      scenario: fd.get('scenario'),
      website: fd.get('website'),
      source: 'landing',
    };
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || 'submit failed');
      }
      setStatus('ok');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus('err');
      setErrMsg(err.message || 'network error');
    }
  }

  return (
    <section id="contact" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-prose mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <div className="text-[12px] font-mono tracking-eyebrow text-accent mb-5 uppercase">
            {t.contact.eyebrow}
          </div>
          <h2 className="text-[32px] md:text-[40px] leading-[1.18] font-semibold tracking-tightest text-ink">
            {t.contact.heading}
          </h2>
          <p className="mt-6 text-[16px] md:text-[17px] text-muted-strong leading-[1.65]">
            {t.contact.sub}
          </p>
        </div>

        {status === 'ok' ? (
          <div className="rounded-2xl border border-accent/40 bg-accent-soft p-10 text-center">
            <div className="font-mono text-[12px] text-accent tracking-eyebrow mb-3 uppercase">
              Success
            </div>
            <div className="text-ink text-[16px] md:text-[17px]">{t.contact.okMessage}</div>
            <div className="text-[14px] text-muted-strong mt-3">{t.contact.okSub}</div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <Field label={t.contact.labels.email} required>
              <input
                name="email"
                type="email"
                required
                placeholder={t.contact.placeholders.email}
                className="w-full bg-panel border border-border-strong rounded-md px-4 py-3.5 text-ink text-[15px] focus-ring transition placeholder:text-muted"
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label={t.contact.labels.entity} required>
                <select
                  name="entity_location"
                  required
                  defaultValue=""
                  className="w-full bg-panel border border-border-strong rounded-md px-4 py-3.5 text-ink text-[15px] focus-ring transition"
                >
                  <option value="" disabled>
                    {t.contact.placeholders.select}
                  </option>
                  {t.contact.entityOptions.map(([v, l]) => (
                    <option key={v} value={v}>{l}</option>
                  ))}
                </select>
              </Field>

              <Field label={t.contact.labels.spend} required>
                <select
                  name="monthly_spend"
                  required
                  defaultValue=""
                  className="w-full bg-panel border border-border-strong rounded-md px-4 py-3.5 text-ink text-[15px] focus-ring transition"
                >
                  <option value="" disabled>
                    {t.contact.placeholders.select}
                  </option>
                  {t.contact.spendOptions.map(([v, l]) => (
                    <option key={v} value={v}>{l}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label={t.contact.labels.scenario}>
              <textarea
                name="scenario"
                rows={4}
                maxLength={1000}
                placeholder={t.contact.placeholders.scenario}
                className="w-full bg-panel border border-border-strong rounded-md px-4 py-3.5 text-ink text-[15px] leading-[1.65] focus-ring transition resize-none placeholder:text-muted"
              />
            </Field>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-5 py-3.5 rounded-md bg-accent text-white text-[15px] font-medium hover:bg-accent-hover disabled:opacity-50 transition shadow-[0_6px_24px_-8px_rgba(59,130,246,0.6)]"
            >
              {status === 'loading' ? t.contact.submitting : `${t.contact.submit} →`}
            </button>

            {status === 'err' && (
              <div className="text-[14px] text-rose-400 text-center">
                {t.contact.errPrefix}{errMsg}{t.contact.errSuffix}
              </div>
            )}

            <p className="text-[13px] text-muted text-center pt-2 leading-relaxed">
              {t.contact.privacy}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-mono tracking-eyebrow text-muted-strong mb-3 uppercase">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {children}
    </label>
  );
}
