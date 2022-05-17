import React from 'react';
import Navigation from 'src/components/layouts/Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

export default Layout;
