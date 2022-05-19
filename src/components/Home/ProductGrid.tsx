import styled from '@emotion/styled';

interface ProductGridProps {
  children: React.ReactNode;
}

export default function ProductGrid({ children }: ProductGridProps) {
  return <ProductGridContainer>{children}</ProductGridContainer>;
}

const ProductGridContainer = styled.div`
  width: 100%;
  min-width: 1024px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-gap: 0;
  gap: 0;
  a {
    :nth-child(6n + 1),
    :nth-child(6n + 5) {
      grid-column: span 2 / span 2;
      grid-row: span 2 / span 2;
    }
    grid-column: span 1 / span 1;
    grid-row: span 1 / span 1;
  }
`;
