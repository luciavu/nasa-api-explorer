'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="text-xl">
            Home
          </Link>
          {pathSegments.map((selgment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            return (
              <span key={href} className="text-gray-500 text-xl">
                {' / '}
                <Link href={href}>{selgment}</Link>
              </span>
            );
          })}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
