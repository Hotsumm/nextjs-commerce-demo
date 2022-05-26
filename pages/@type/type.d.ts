interface IProduct {
  id: string;
  name: string;
  price: string;
  color: string[];
  size: string[];
  images: IProductImages[];
  desc: string;
  relatedProduct?: IProduct[];
}

interface IProductImages {
  url: string;
  isDefault: boolean;
}
