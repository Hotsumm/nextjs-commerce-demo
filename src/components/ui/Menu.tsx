import styled from '@emotion/styled';
import Link from 'next/link';

type MenuProps = {
  href: string;
  name: string;
};

export default function Menu({ href, name }: MenuProps) {
  return (
    <>
      <Link href={href} passHref>
        <MenuA>{name}</MenuA>
      </Link>
    </>
  );
}

const MenuA = styled.a`
  display: flex;
  align-items: center;
  color: #888;
  line-height: 1.5rem;
  text-decoration: none;
  :hover {
    color: #fff;
  }
`;
