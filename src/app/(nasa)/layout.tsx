import Breadcrumb from '@/components/Breadcrumb';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="ml-10 mr-10">
      <Breadcrumb />
      {children}
    </div>
  );
};

export default Layout;
