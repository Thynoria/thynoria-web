/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0B',
        panel: '#0F1011',
        elevated: '#16181B',
        border: '#1F2125',
        'border-strong': '#2A2D31',
        ink: '#F4F4F5',
        'ink-soft': '#D4D4D8',
        muted: '#8A8F98',
        'muted-strong': '#A1A6AE',
        'muted-soft': '#6B7280',
        accent: '#0070F3',
        'accent-hover': '#1A82FF',
        'accent-soft': 'rgba(0, 112, 243, 0.10)',
      },
      fontFamily: {
        sans: ['Inter', 'PingFang SC', 'HarmonyOS Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Geist Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        eyebrow: '0.18em',
      },
      maxWidth: {
        prose: '42rem', // 672px — 适合段落
        content: '64rem', // 1024px — 适合主体
        wide: '72rem', // 1152px — 适合宽栅格
      },
      spacing: {
        section: '7rem', // 112px section vertical
      },
    },
  },
  plugins: [],
};
