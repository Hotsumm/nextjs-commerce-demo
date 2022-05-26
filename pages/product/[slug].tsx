import { fetchAllProduct, fetchProduct } from 'pages/api/product';
import Seo from 'src/components/Head/Seo';
import ProductView from 'src/components/Product/ProductView';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: PageProps) {
  const product = await fetchProduct(params.slug);
  return {
    props: { product },
  };
}

export async function getStaticPaths() {
  const products = await fetchAllProduct();
  const paths = products.map((product) => ({
    params: { slug: product.id },
  }));
  return { paths, fallback: false };
}

interface SlugProps {
  product: IProduct;
}

export default function Slug({ product }: SlugProps) {
  return (
    <>
      <Seo title={product.name} />
      <ProductView product={product}></ProductView>
    </>
  );
}
