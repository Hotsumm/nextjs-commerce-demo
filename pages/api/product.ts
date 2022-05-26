import { products } from 'src/utils/data';

export async function fetchAllProduct() {
  const data = products.map((product) => product);
  return data;
}

export async function fetchProduct(id: string) {
  const data = products.find((products) => products.id === id);
  return data;
}
