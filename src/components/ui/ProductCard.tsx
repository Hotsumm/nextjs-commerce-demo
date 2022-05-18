import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: IProduct;
  imageProps: {
    width: number;
    height: number;
  };
  color: string;
}

export default function ProductCard({
  product,
  imageProps,
  color,
}: ProductCardProps) {
  return (
    <>
      <Link href="/" passHref>
        <ProductLink color={color}>
          <Image
            src={product.images[0].url}
            width={imageProps.width}
            height={imageProps.height}
            alt="Product image"
          />
          <ProductTagWrap>
            <Title>
              <span>{product.name}</span>
            </Title>
            <Price>{product.price}</Price>
          </ProductTagWrap>
        </ProductLink>
      </Link>
    </>
  );
}

const ProductLink = styled.a`
  position: relative;
  background: ${(props) => props.color};
  img {
    :hover {
      transform: scale(1.2625);
      transition-property: transform;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.5s;
    }
  }
`;

const ProductTagWrap = styled.div`
  padding-right: 4rem;
  position: absolute;
  top: 0;
  left: 0;
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
