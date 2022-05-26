import styled from '@emotion/styled';
import Link from 'next/link';

import Logo from 'src/components/ui/Logo';
import Menu from 'src/components/ui/Menu';
import SearchBar from 'src/components/ui/SearchBar';
import Cart from '../ui/icons/Cart';
import Heart from '../ui/icons/Heart';

export default function Navigation() {
  return (
    <>
      <NavigationContainer>
        <NavigationWrap>
          <NavContents>
            <Logo />
            <NavMenu>
              <Menu href="/" name="All" />
              <Menu href="/" name="Apparel" />
              <Menu href="/" name="Shop All" />
            </NavMenu>
          </NavContents>
          <NavContents>
            <SearchBar />
          </NavContents>
          <NavUserWrap>
            <li>
              <button>
                <Cart />
              </button>
            </li>
            <li>
              <Link href="/" passHref>
                <a>
                  <Heart color={'white'} />
                </a>
              </Link>
            </li>
            <li>
              <button>
                <div></div>
              </button>
            </li>
          </NavUserWrap>
        </NavigationWrap>
      </NavigationContainer>
    </>
  );
}

const NavigationContainer = styled.div`
  min-width: 1440px;
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 100%;
  background: #000000;
`;

const NavigationWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;

const NavContents = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
`;

const NavUserWrap = styled.ul`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0 1.5rem;
  li {
    &:first-child {
      button {
        position: relative;
        display: flex;
        cursor: pointer;
        align-items: center;
        color: #fff;
        outline: 2px solid transparent;
        outline-offset: 2px;
        transition-duration: 0.1s;
        border-style: none;
        background-color: transparent;
      }
    }
    &:last-child {
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        text-transform: none;
        border-radius: 9999px;
        border: none;
        background-image: linear-gradient(
          140deg,
          rgb(121, 255, 225),
          rgb(55, 182, 121) 100%
        );
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 0 20px;
  margin-left: 30px;
`;
