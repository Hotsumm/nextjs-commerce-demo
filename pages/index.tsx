import Head from 'next/head';
import styled from '@emotion/styled';

import { fetchAllProduct } from 'pages/api/product';
import ProductCard from 'src/components/ui/ProductCard';

interface HomeProps {
  products: IProduct[];
}

const productBackground = ['#7928ca', '#fafafa', '#ff0080;', '#f1e05a'];

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Commerce demo</title>
        <meta name="description" content="Next-commerce-demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeGrid>
        {products.length > 0 &&
          products.slice(0, 4).map((product, i) => (
            <>
              <ProductCard
                key={product.id}
                product={product}
                imageProps={{
                  width: i === 0 ? 1080 : 540,
                  height: i === 0 ? 1080 : 540,
                }}
                color={productBackground[i]}
              />
            </>
          ))}
      </HomeGrid>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchAllProduct();

  return {
    props: { products: data },
  };
}

const HomeGrid = styled.div`
  width: 100%;
  min-width: 1024px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-gap: 0;
  gap: 0;
  a {
    :nth-child(6n + 1),
    :nth-child(6n + 5) {
      grid-column: span 2 / span 2;
      grid-row: span 2 / span 2;
    }
    grid-column: span 1 / span 1;
    grid-row: span 1 / span 1;
  }
`;
