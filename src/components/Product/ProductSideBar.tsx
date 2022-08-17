import styled from '@emotion/styled';
import { useState } from 'react';
import Check from 'src/components/ui/icons/Check';
import { ProductType } from 'src/types/product';

type ProductSideBarProps = {
  product: ProductType;
};

export default function ProductSideBar({ product }: ProductSideBarProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  function handleColorClick(idx: number) {
    setSelectedColor(idx);
  }

  function handleSizeClick(idx: number) {
    setSelectedSize(idx);
  }

  return (
    <ProductSideBarContainer>
      <ProductOptionContainer>
        {product && product.colors.length > 0 && (
          <ProductOptionWrap>
            <h2>COLOR</h2>
            <ProductOptionListWrap>
              {product.colors.map((color, idx) => (
                <li key={color} onClick={() => handleColorClick(idx)}>
                  <OptionButton color={color} selected={selectedColor === idx}>
                    {selectedColor === idx && (
                      <IconWrap>
                        <Check color={color === 'white' ? 'black' : 'white'} />
                      </IconWrap>
                    )}
                  </OptionButton>
                </li>
              ))}
            </ProductOptionListWrap>
          </ProductOptionWrap>
        )}
        {product && product.sizes.length > 0 && (
          <ProductOptionWrap>
            <h2>SIZE</h2>
            <ProductOptionListWrap>
              {product.sizes.map((size, idx) => (
                <li key={size} onClick={() => handleSizeClick(idx)}>
                  <OptionButton selected={selectedSize === idx}>
                    {size}
                  </OptionButton>
                </li>
              ))}
            </ProductOptionListWrap>
          </ProductOptionWrap>
        )}
      </ProductOptionContainer>
      <ProductDescWrap>
        <p>{product.description}</p>
      </ProductDescWrap>
      <ProductButtonWrap>
        <button>Add To Cart</button>
      </ProductButtonWrap>
      <ProductCollapseWrap>
        <ProductCollapse>
          <ProductCollapseHeader>Care</ProductCollapseHeader>
          <ProductCollapseContent>
            This is a limited edition production run. Printing starts when the
            drop ends.
          </ProductCollapseContent>
        </ProductCollapse>
        <ProductCollapse>
          <ProductCollapseHeader>Details</ProductCollapseHeader>
          <ProductCollapseContent>
            This is a limited edition production run. Printing starts when the
            drop ends. Reminder: Bad Boys For Life. Shipping may take 10+ days
            due to COVID-19.
          </ProductCollapseContent>
        </ProductCollapse>
      </ProductCollapseWrap>
    </ProductSideBarContainer>
  );
}

const ProductSideBarContainer = styled.div`
  grid-column: span 4 / span 4;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  padding: 1.5rem;
`;

const ProductOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProductOptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;
  h2 {
    font-weight: 600;
    color: white;
    letter-spacing: 0.05em;
  }
`;

const ProductOptionListWrap = styled.ul`
  padding: 1.5rem 0;
  width: 100%;
  display: flex;
  gap: 0 1rem;
`;
const OptionButton = styled.button<{ color?: string; selected?: boolean }>`
  width: 48px;
  height: 48px;
  border: 1px solid ${(props) => (props.selected ? '#fff' : '#444')};
  background: ${(props) => (props.color ? props.color : 'black')};
  border-radius: 50%;
  color: white;
  cursor: pointer;
  :hover {
    transition-duration: 0.15s;
  }
`;

const IconWrap = styled.span``;

const ProductDescWrap = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  p {
    color: white;
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;

const ProductButtonWrap = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  button {
    cursor: pointer;
    width: 100%;
    background: white;
    color: black;
    padding: 1.25rem 2.5rem;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.5rem;
    letter-spacing: 0.025em;
    :hover {
      background: #999;
    }
  }
`;

const ProductCollapseWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;
const ProductCollapse = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  :last-child {
    border-top: 1px solid #444;
  }
`;

const ProductCollapseHeader = styled.h4`
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  color: white;
`;
const ProductCollapseContent = styled.p`
  font-size: 1rem;
  color: white;
`;
