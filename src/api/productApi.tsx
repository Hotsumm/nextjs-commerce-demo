import { ProductType } from 'src/types/product';

const BASE_URL = 'http://localhost:3000';

export async function fetchAllProduct() {
  const response = await fetch(`${BASE_URL}/api/products`);
  const data: ProductType[] = await response.json();
  return data;
}

export async function fetchProductById(id: string) {
  const products = await fetchAllProduct();
  const data = products.find(
    (product: any) => product.id === id
  ) as ProductType;
  return data;
}
