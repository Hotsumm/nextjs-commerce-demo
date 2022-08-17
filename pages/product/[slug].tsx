import { fetchAllProduct, fetchProductById } from 'src/api/productApi';
import Seo from 'src/components/Head/Seo';
import ProductView from 'src/components/Product/ProductView';
import { ProductType } from 'src/types/product';

type ProductDetailProps = {
  product: ProductType;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <>
      <Seo title={product.name} />
      <ProductView product={product}></ProductView>
    </>
  );
}

export async function getStaticProps(context: any) {
  const { slug } = context.params;
  const product = await fetchProductById(slug);
  return {
    props: { product },
  };
}

export async function getStaticPaths() {
  const products = await fetchAllProduct();
  const paths = products.map((product: any) => ({
    params: { slug: product.id },
  }));
  return { paths, fallback: false };
}
