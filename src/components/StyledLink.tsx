import Link from 'next/link';
import React from 'react';

interface StyledLinkProps {
  href: string;
  target_blank?: boolean;
  type: string;
  children: React.ReactNode;
}
const StyledLink = ({ href, type, target_blank = true, children }: StyledLinkProps) => {
  switch (type) {
    case 'card':
      return (
        <Link href={href} target={target_blank ? '_blank' : undefined}>
          <div className="h-full border p-4 rounded-lg dark:border-gray-800 border-gray-400 dark:text-white hover:scale-101 transition-transform">
            {children}
          </div>
        </Link>
      );

    case 'summary':
      return (
        <Link href={href} target={target_blank ? '_blank' : undefined} className="text-white">
          <div className="backdrop-blur-sm aspect-square bg-black/10 rounded-lg p-4 flex flex-col justify-between hover:scale-101 transition-transform">
            {children}
          </div>
        </Link>
      );
    case 'underline':
      return (
        <Link
          href={href}
          target={target_blank ? '_blank' : undefined}
          className=" underline underline-offset-1 text-gray-400 hover:text-gray-500 transition-colors"
        >
          {children}
        </Link>
      );
    default:
      return;
  }
};

export default StyledLink;
