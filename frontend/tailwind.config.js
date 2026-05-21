/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08090A',
        panel: '#0E0F11',
        'panel-2': '#13151A',
        elevated: '#181A1F',
        'elevated-2': '#1E2128',
        border: '#1F2229',
        'border-strong': '#2A2E36',
        ink: '#F5F5F7',
        'ink-soft': '#D7D8DC',
        muted: '#92969F',
        'muted-strong': '#A8ADB6',
        'muted-soft': '#6B7280',
        accent: '#3B82F6',
        'accent-hover': '#4F8FFB',
        'accent-soft': 'rgba(59, 130, 246, 0.10)',
        'accent-glow': 'rgba(59, 130, 246, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'PingFang SC', 'HarmonyOS Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Geist Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter2: '-0.02em',
        eyebrow: '0.16em',
      },
      fontSize: {
        eyebrow: ['12px', { letterSpacing: '0.16em', lineHeight: '1.4' }],
        caption: ['13px', { lineHeight: '1.55' }],
        body: ['16px', { lineHeight: '1.65' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        lead: ['20px', { lineHeight: '1.55' }],
        h3: ['24px', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        h2: ['40px', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        h1: ['64px', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
      },
      maxWidth: {
        prose: '42rem', // 672px — 适合段落
        content: '64rem', // 1024px — 适合主体
        wide: '76rem', // 1216px — 适合宽栅格
      },
      spacing: {
        section: '8rem', // 128px section vertical
      },
      boxShadow: {
        'card': '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 1px 2px 0 rgba(0,0,0,0.4)',
        'card-hover': '0 1px 0 0 rgba(255,255,255,0.05) inset, 0 20px 50px -20px rgba(59,130,246,0.18)',
        'featured': '0 1px 0 0 rgba(59,130,246,0.18) inset, 0 24px 80px -24px rgba(59,130,246,0.35)',
      },
    },
  },
  plugins: [],
};
