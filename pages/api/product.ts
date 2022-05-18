import { products } from 'src/utils/data';

export async function fetchAllProduct() {
  const data = products.map((product) => product);
  return data;
}
