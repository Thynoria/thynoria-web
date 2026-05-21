import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thynoria｜面向出海 AI 团队的企业级 AI 网关',
  description:
    '一套凭据，多通道容灾。香港主体、SLA 承诺、合规可控的 AI Runtime Infrastructure，专为亚太华人 AI 团队打造。',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Thynoria — Reliability Infrastructure for Enterprise AI',
    description: '一套凭据，多通道容灾。为出海 AI 团队打造的企业级 AI 网关。',
    url: 'https://thynoria.com',
    siteName: 'Thynoria',
    type: 'website',
    images: ['/logo.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
