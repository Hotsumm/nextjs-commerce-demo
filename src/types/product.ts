export type ProductType = {
  id: string;
  name: string;
  price: string;
  colors: string[];
  sizes: string[];
  images: ProductImages[];
  description: string;
  relatedProduct?: ProductType[];
};

export type ProductImages = {
  url: string;
  isDefault: boolean;
};
