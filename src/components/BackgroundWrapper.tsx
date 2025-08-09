'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isHome = pathname === '/';

  return (
    <div className="relative min-h-screen w-full">
      {isHome && (
        <div className="absolute inset-0 -z-10">
          <Image src="/background.jpg" alt="Background" fill priority className="object-cover" />
        </div>
      )}
      {children}
    </div>
  );
}
