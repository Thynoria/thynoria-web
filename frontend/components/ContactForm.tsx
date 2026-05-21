'use client';
import { useState } from 'react';

export default function ContactForm() {
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
      website: fd.get('website'), // 蜜罐字段
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
        throw new Error(j.error || '提交失败');
      }
      setStatus('ok');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus('err');
      setErrMsg(err.message || '网络错误');
    }
  }

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-ink text-center">
          申请加入种子客户
        </h2>
        <p className="mt-3 text-muted text-center">
          我们会在 24 小时内回复，并约一次 30 分钟的视频沟通。
        </p>

        {status === 'ok' ? (
          <div className="mt-10 rounded-xl border border-emerald-500/40 bg-emerald-500/5 p-6 text-center text-ink">
            ✓ 已收到，我们会尽快通过邮件与你联系。
            <br />
            <span className="text-sm text-muted mt-2 inline-block">
              如有紧急事项可直接发邮件至 larrchen0125@gmail.com
            </span>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 space-y-5">
            {/* 蜜罐字段 */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <Field label="邮箱" required>
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full bg-panel border border-border rounded-md px-4 py-3 text-ink focus:border-brand outline-none"
              />
            </Field>

            <Field label="公司主体注册地" required>
              <select
                name="entity_location"
                required
                defaultValue=""
                className="w-full bg-panel border border-border rounded-md px-4 py-3 text-ink focus:border-brand outline-none"
              >
                <option value="" disabled>请选择</option>
                <option value="HK">香港</option>
                <option value="SG">新加坡</option>
                <option value="US">美国</option>
                <option value="CN">中国大陆</option>
                <option value="OTHER">其他</option>
              </select>
            </Field>

            <Field label="月度 AI API 花费量级" required>
              <select
                name="monthly_spend"
                required
                defaultValue=""
                className="w-full bg-panel border border-border rounded-md px-4 py-3 text-ink focus:border-brand outline-none"
              >
                <option value="" disabled>请选择</option>
                <option value="<1k">&lt; $1,000</option>
                <option value="1k-10k">$1,000 – $10,000</option>
                <option value="10k-100k">$10,000 – $100,000</option>
                <option value=">100k">&gt; $100,000</option>
              </select>
            </Field>

            <Field label="一句话描述你的业务场景与最痛的点（选填）">
              <textarea
                name="scenario"
                rows={4}
                maxLength={1000}
                placeholder="例如：跨境电商 AI 客服，每次 OpenAI 抽风都丢单……"
                className="w-full bg-panel border border-border rounded-md px-4 py-3 text-ink focus:border-brand outline-none"
              />
            </Field>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-6 py-3 rounded-md bg-brand text-white hover:opacity-90 disabled:opacity-50"
            >
              {status === 'loading' ? '提交中…' : '提交申请 →'}
            </button>

            {status === 'err' && (
              <div className="text-rose-400 text-sm text-center">
                提交失败：{errMsg}。也可直接发邮件至 larrchen0125@gmail.com
              </div>
            )}

            <p className="text-xs text-muted text-center">
              我们承诺不向任何第三方分享你的信息。
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
      <span className="block text-sm text-muted mb-2">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {children}
    </label>
  );
}
