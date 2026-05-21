'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { dict, type Dict, type Locale } from './dict';

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const I18nContext = createContext<Ctx>({
  locale: 'zh',
  setLocale: () => {},
  t: dict.zh,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('zh');

  useEffect(() => {
    const saved =
      typeof window !== 'undefined' ? (localStorage.getItem('thy_locale') as Locale | null) : null;
    if (saved === 'en' || saved === 'zh') setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') {
      localStorage.setItem('thy_locale', l);
      document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';
    }
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: dict[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useT() {
  return useContext(I18nContext);
}
