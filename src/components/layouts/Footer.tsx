import styled from '@emotion/styled';

import Logo from 'src/components/ui/Logo';
import Menu from 'src/components/ui/Menu';

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterRow>
            <FooterCol>
              <Logo />
              <span>ACME</span>
            </FooterCol>
            <FooterCol>
              <Menu href="/" name="Home" />
              <Menu href="/" name="About" />
              <Menu href="/" name="Terms of use" />
              <Menu href="/" name="Shipping & Returns" />
              <Menu href="/" name="Privacy Policy" />
            </FooterCol>
          </FooterRow>
          <FooterRow>
            <span>2022 ACME, Inc. All rights reserved.</span>
            <span>Created by hotsumm</span>
          </FooterRow>
        </FooterWrap>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  border-top: 1px solid #333;
`;

const FooterWrap = styled.div`
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterRow = styled.div`
  width: 100%;
  display: flex;
  max-width: 1280px;
  :first-child {
    padding: 48px 0;
  }
  :last-child {
    border-top: 1px solid #333;
    justify-content: space-between;
    padding: 24px 0;
    span {
      color: #888;
    }
  }
`;

const FooterCol = styled.div`
  :first-child {
    width: 20%;
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
      font-weight: 700;
    }
  }
  :last-child {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
  }
  span {
    color: white;
  }
`;
