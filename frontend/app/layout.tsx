import type { Metadata } from 'next';
import { I18nProvider } from '@/lib/i18n';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thynoria — Reliability Infrastructure for Enterprise AI',
  description:
    '面向出海 AI 团队的企业级 AI Runtime Infrastructure。一套凭据，多通道容灾，香港主体，SLA 承诺。',
  openGraph: {
    title: 'Thynoria — Reliability Infrastructure for Enterprise AI',
    description: '面向出海 AI 团队的企业级 AI Runtime Infrastructure。',
    url: 'https://thynoria.com',
    siteName: 'Thynoria',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
