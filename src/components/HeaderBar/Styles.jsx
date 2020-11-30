import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${(props) => props.theme.headerBackground};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.2);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media (max-width: 767.98px) {
    height: 70px;
  }
`
export const NavbarContainer = styled.div`
  height: 80px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  max-width: 700px;
  background: #0000;
  @media (max-width: 767.98px) {
    height: 70px;
  }
`

export const LogoImage = styled.img`
  height: 80px;
  width: 130px;

  @media (max-width: 767.98px) {
    height: 60px;
    width: 100px;
  }
`
export const SytledH1 = styled.h1`
  color: ${(props) => props.theme.headerColor};
  font-family: cursive;

  @media (max-width: 767.98px) {
    font-size: 1.3rem;
    margin-block-start: 0.9em;
  }

  @media (max-width: 575.98px) {
    font-size: 1.2rem;
    margin-block-start: 0.3em;
    margin-block-end: 0.2em;
  }
  
`;