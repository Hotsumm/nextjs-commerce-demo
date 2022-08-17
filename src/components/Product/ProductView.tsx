import styled from '@emotion/styled';
import Heart from 'src/components/ui/icons/Heart';
import ProductTag from 'src/components/Product/ProductTag';
import ProductSideBar from 'src/components/Product/ProductSideBar';
import ProductSlider from 'src/components/Product/ProductSlider';
import Image from 'next/image';
import { ProductType } from 'src/types/product';

type ProductViewProps = {
  product: ProductType;
};

export default function ProductView({ product }: ProductViewProps) {
  return (
    <ProductViewContainer>
      <ProductViewWrap>
        <ProductTag name={product.name} price={product.price} />
        <ProductButton>
          <Heart />
        </ProductButton>
        <ProductSlider>
          {product.images.map((image, index) => (
            <ProductSliderImgWrap className="keen-slider__slide" key={index}>
              <Image
                src={image.url}
                alt="Product thumbnail"
                width={600}
                height={600}
              />
            </ProductSliderImgWrap>
          ))}
        </ProductSlider>
      </ProductViewWrap>
      <ProductSideBar product={product} />
    </ProductViewContainer>
  );
}

const ProductViewContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  position: relative;
  align-items: flex-start;
  grid-gap: 0.25rem;
  gap: 0.25rem;
  overflow-x: hidden;
  min-height: auto;
  padding-bottom: 2rem;
  border-bottom: 1px solid #444;
`;

const ProductViewWrap = styled.div`
  grid-column: span 8 / span 8;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  padding: 0;
  min-height: 500px;
`;

const ProductSliderImgWrap = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ProductButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  background: #000;
  z-index: 99;
  border: none;
  cursor: pointer;
`;
