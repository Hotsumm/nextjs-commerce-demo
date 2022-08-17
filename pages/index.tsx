import { fetchAllProduct } from 'src/api/productApi';
import Seo from 'src/components/Head/Seo';
import ProductCard from 'src/components/ui/ProductCard';
import ProductGrid from 'src/components/Home/ProductGrid';
import Hero from 'src/components/Home/Hero';
import Marquee from 'src/components/Home/Marquee';
import { ProductType } from 'src/types/product';

type HomeProps = {
  products: ProductType[];
};

const productBackground = ['#7928ca', '#fafafa', '#ff0080;', '#f1e05a'];

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Seo title="Home" />
      <ProductGrid>
        {products.length > 0 &&
          products.slice(0, 4).map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              imageProps={{
                width: i === 0 ? 1080 : 540,
                height: i === 0 ? 1080 : 540,
              }}
              variant="grid"
              color={productBackground[i]}
            />
          ))}
      </ProductGrid>
      <Marquee>
        {products.length > 0 &&
          products
            .slice(0, 3)
            .map((product, i) => (
              <ProductCard
                variant="marquee"
                key={product.id}
                product={product}
                color="white"
              />
            ))}
      </Marquee>
      <Hero
        headline="Dessert dragée halvah croissant."
        description="Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake."
      />
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchAllProduct();

  return {
    props: { products: data },
  };
}
