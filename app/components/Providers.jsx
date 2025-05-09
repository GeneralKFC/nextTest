'use client'

import { ThemeModeProvider } from './ThemeContext';

export default function Providers({ children }) {
  return <ThemeModeProvider>{children}</ThemeModeProvider>;
}