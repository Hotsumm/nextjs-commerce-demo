import styled from '@emotion/styled';

interface ProductTagProps {
  name: string;
  price: string;
}

export default function ProductTag({ name, price }: ProductTagProps) {
  return (
    <ProductTagContainer>
      <Title>
        <span>{name}</span>
      </Title>
      <Price>{price}</Price>
    </ProductTagContainer>
  );
}

const ProductTagContainer = styled.div`
  padding-right: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  color: white;
`;

const Title = styled.h3`
  width: 100%;
  background: black;
  padding: 1rem 1.5rem;
  span {
    line-height: 32px;
    font-weight: 800;
    font-size: 32px;
  }
`;

const Price = styled.div`
  width: auto;
  background: black;
  display: inline-block;
  padding: 0.5rem 1rem;
  line-height: 18px;
  font-size: 18px;
`;
