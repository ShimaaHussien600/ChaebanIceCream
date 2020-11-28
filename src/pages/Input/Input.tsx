import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import '../../App.css';
import ThemeSelector from '../../components/ThemeSelector';
import DatePickerDialog from '../../components/DatePickerDialog';
import MultilineTextField from '../../components/MultilineTextField';
import ICECREAM_LogoPink from '../../assets/images/ICECREAM_LogoPink.png';

const SytledH1 = styled.h1`
  color: ${(props: any) => props.theme.textColor};
`;
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.backgroundColor};
  }
`;

const Nav = styled.nav`
  background: #f8a9a6;
  height: 80px;
  margin-bottom: 80px;
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
`
const NavbarContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  width: 100%;
  padding: 0 24px;
  max-width: 700px;
  background: #0000;
`

const LogoImage = styled.img`
  height: 80px;
  width: 130px;
`
const Div = styled.div`
  width: 100%;
  height: 100%;
  margin-top : 160px;
  justify-content: center;
  align-items: center;
`
const DateContainer = styled.div`
  width: 50%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`
const SubDiv = styled.div`
  width: 200px;
  justify-content: left;
  align-items: center;
`
//   font-family: "Helvetica Neue",Arial,sans-serif",

const H3Text = styled.h1`
  color: ${(props: any) => props.theme.textColor};
`

function Input() {
  const theme = useSelector((state: any) => state.themeReducer.theme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Nav>
          <LogoImage src={ICECREAM_LogoPink} alt="logo" />
          <NavbarContainer>
          <SytledH1>Welcome to CHAEBAN ICE CREAM Challenge</SytledH1>
          </NavbarContainer>
        </Nav>
        <Div>
        <DateContainer>
          {/* <SubDiv> */}
        <H3Text>Choose The date </H3Text>
        {/* </SubDiv> */}
        {/* <SubDiv> */}
        <DatePickerDialog />
        {/* </SubDiv> */}
        </DateContainer>
        {/* <DateContainer> */}
        <MultilineTextField />
        {/* </DateContainer> */}
        <ThemeSelector />
        </Div>
      </div>
    </ThemeProvider>
  );
}
export default Input;