import styled from '@emotion/styled';
import ArrowLeft from '../ui/icons/ArrowLeft';
import ArrowRight from '../ui/icons/ArrowRight';

type ProductArrowProps = {
  onPrev: () => void;
  onNext: () => void;
};

export default function ProductArrow({ onPrev, onNext }: ProductArrowProps) {
  return (
    <ProductArrowContainer>
      <button onClick={onPrev}>
        <ArrowLeft />
      </button>
      <button onClick={onNext}>
        <ArrowRight />
      </button>
    </ProductArrowContainer>
  );
}

const ProductArrowContainer = styled.div`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  z-index: 30;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  color: white;
  height: 48px;
  button {
    background: #7928ca;
    cursor: pointer;
    padding: 0 2.25rem;
    :hover {
      background: #4c2889;
    }
    :last-child {
      border-left: 1px solid black;
    }
  }
`;
