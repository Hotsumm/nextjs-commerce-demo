interface IProduct {
  id: string;
  name: string;
  price: string;
  colors: string[];
  sizes: string[];
  images: IProductImages[];
  description: string;
  relatedProduct?: IProduct[];
}

interface IProductImages {
  url: string;
  isDefault: boolean;
}
