'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-2 pt-5 pb-5">
        <li>
          <Link href="/" className="text-xl text-black dark:text-gray-100">
            Home
          </Link>
          {pathSegments.map((selgment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            return (
              <span key={href} className="text-gray-400 text-xl">
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
