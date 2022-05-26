import { useKeenSlider } from 'keen-slider/react';
import React, {
  useRef,
  Children,
  isValidElement,
  useState,
  useCallback,
} from 'react';
import styled from '@emotion/styled';

import ProductArrow from 'src/components/Product/ProductArrow';

interface ProductSliderProps {
  children?: React.ReactNode;
}

export default function ProductSlider({ children }: ProductSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slides: { perView: 1 },
    slideChanged(slider) {
      const slideNumber = slider.track.details.rel;
      setCurrentSlide(slideNumber);
      if (thumbnailRef.current) {
        const $el = document.getElementById(`thumb-${slideNumber}`);
        console.log($el);
        if (slideNumber >= 3) {
          thumbnailRef.current.scrollLeft = $el!.offsetLeft;
        } else {
          thumbnailRef.current.scrollLeft = 0;
        }
      }
    },
  });

  const onPrev = useCallback(() => slider.current?.prev(), [slider]);
  const onNext = useCallback(() => slider.current?.next(), [slider]);
  return (
    <ProductSliderContainer ref={sliderContainerRef}>
      <ProductSliderWrap ref={sliderRef}>
        {children}
        <ProductArrow onPrev={onPrev} onNext={onNext} />
      </ProductSliderWrap>
      <ProductSliderThumbWrap ref={thumbnailRef} currentSlide={currentSlide}>
        {Children.map(children, (child, idx) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: '',
                id: `thumb-${idx}`,
                onClick: () => {
                  slider.current?.moveToIdx(idx);
                },
              },
            };
          }
        })}
      </ProductSliderThumbWrap>
    </ProductSliderContainer>
  );
}

const ProductSliderContainer = styled.div`
  width: 100%;
  background: #7928ca;
`;

const ProductSliderWrap = styled.div`
  transition-property: opacity;
  transition-duration: 0.15s;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  background: #7928ca;
`;

const ProductSliderThumbWrap = styled.div<{ currentSlide: number }>`
  width: 100%;
  display: flex;
  overflow-y: hidden;
  height: 200px;
  overflow-x: auto;
  white-space: nowrap;
  box-sizing: content-box;
  cursor: pointer;
  background: #4c2889;
  div {
    width: 230px;
    background: transparent;
    :nth-of-type(${(props) => props.currentSlide + 1}) {
      background: white;
    }
  }
`;
