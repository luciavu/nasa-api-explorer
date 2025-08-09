import Link from 'next/link';
import React from 'react';

interface StyledLinkProps {
  href: string;
  target_blank?: boolean;
  children: React.ReactNode;
}
const StyledLink = ({ href, target_blank = true, children }: StyledLinkProps) => {
  return (
    <Link
      href={href}
      target={target_blank ? '_blank' : undefined}
      className=" underline underline-offset-1 text-gray-400 hover:text-gray-500 transition-colors"
    >
      {children}
    </Link>
  );
};

export default StyledLink;
