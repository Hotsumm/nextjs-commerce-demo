import styled from '@emotion/styled';

type MarqueeProps = {
  children: React.ReactNode;
};

export default function Marquee({ children }: MarqueeProps) {
  return <MarqueeContainer>{children}</MarqueeContainer>;
}

const MarqueeContainer = styled.div`
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
`;
