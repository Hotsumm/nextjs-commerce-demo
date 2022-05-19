import React from 'react';
import styled from '@emotion/styled';

import Navigation from 'src/components/layouts/Navigation';
import Footer from 'src/components/layouts/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  min-width: 1440px;
  width: 100vw;
  min-height: 100vh;
`;
