import styled from '@emotion/styled';
import Link from 'next/link';

export default function Hero({ headline, description }: any) {
  return (
    <HeroContainer>
      <HeroWrap>
        <Headline>{headline}</Headline>
        <Description>
          <p>{description}</p>
          <Link href="/">
            <a>Read it here→</a>
          </Link>
        </Description>
      </HeroWrap>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  width: 100%;
  background: white;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding: 0 1.5rem;
`;

const HeroWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8rem 0;
`;
const Headline = styled.h2`
  font-size: 3.75rem;
  font-weight: 800;
  line-height: 1;
  margin-top: -0.75rem;
  max-width: 36rem;
  text-align: right;
`;

const Description = styled.div`
  max-width: 56rem;
  font-size: 1.25rem;
  padding-left: 1.5rem;
  p {
    margin-bottom: 0.25rem;
    line-height: 2rem;
  }
  a {
    font-weight: 700;
    padding-top: 0.75rem;
  }
`;
