import Link from 'next/link';
import React from 'react';
import { BiPlanet } from 'react-icons/bi';
interface StyledLinkProps {
  href: string;
  target_blank?: boolean;
  type: string;
  children: React.ReactNode;
}
const StyledLink = ({ href, type, target_blank = true, children }: StyledLinkProps) => {
  switch (type) {
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
