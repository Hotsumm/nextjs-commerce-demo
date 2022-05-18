import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'styles/globalStyle';
import Layout from 'src/components/layouts/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
