'use client';
import BackgroundWrapper from '@/components/BackgroundWrapper';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BackgroundWrapper>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </BackgroundWrapper>
  );
}
export default Providers;
