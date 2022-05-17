import React from 'react';
import styled from '@emotion/styled';

import Navigation from 'src/components/layouts/Navigation';
import Footer from 'src/components/layouts/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

export default Layout;
