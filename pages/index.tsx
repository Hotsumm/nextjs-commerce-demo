import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Commerce demo</title>
        <meta name="description" content="Next-commerce-demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Home 입니다.</div>
    </>
  );
};

export default Home;
