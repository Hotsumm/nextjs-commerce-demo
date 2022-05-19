import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import Heart from 'src/components/ui/icons/Heart';

interface ProductCardProps {
  product: IProduct;
  imageProps?: {
    width: number;
    height: number;
  };
  color: string;
  variant: 'grid' | 'marquee';
}

export default function ProductCard({
  product,
  imageProps,
  color,
  variant,
}: ProductCardProps) {
  return (
    <>
      <Link href="/" passHref>
        <ProductLink color={color}>
          {variant === 'grid' && (
            <>
              <Image
                src={product.images[0].url}
                width={imageProps?.width}
                height={imageProps?.height}
                alt="Product image"
              />
              <ProductButton>
                <Heart />
              </ProductButton>
              <ProductTagWrap>
                <Title>
                  <span>{product.name}</span>
                </Title>
                <Price>{product.price}</Price>
              </ProductTagWrap>
            </>
          )}
          {variant === 'marquee' && (
            <MarqueeWrap>
              <Image
                src={product.images[0].url}
                width={300}
                height={300}
                alt="Product image"
              />
              <ProductTitleWrap>
                <span>{product.name}</span>
              </ProductTitleWrap>
            </MarqueeWrap>
          )}
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
  :hover {
    button {
      background: transparent;
    }
  }
`;

const ProductButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  background: #000;
  border: none;
  cursor: pointer;
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

const MarqueeWrap = styled.div`
  display: flex;
`;

const ProductTitleWrap = styled.div`
  display: flex;
  align-items: center;
  span {
    padding: 0.75rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    background: black;
    color: white;
  }
`;
