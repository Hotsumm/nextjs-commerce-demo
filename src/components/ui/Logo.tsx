import styled from '@emotion/styled';
import Link from 'next/link';

function Logo() {
  return (
    <>
      <Link href="/" passHref>
        <LogoA>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100%" height="100%" rx="16" fill="#fff" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="#000000"
            />
          </svg>
        </LogoA>
      </Link>
    </>
  );
}

const LogoA = styled.a`
  transition-duration: 0.1s;
  &:hover {
    transform: scale(1.05);
  }
`;

export default Logo;
