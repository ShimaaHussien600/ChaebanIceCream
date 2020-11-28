import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import '../../App.css';
import ThemeSelector from '../../components/ThemeSelector';
import DatePickerDialog from '../../components/DatePickerDialog';
import MultilineTextField from '../../components/MultilineTextField';
import ICECREAM_LogoPink from '../../assets/images/ICECREAM_LogoPink.png';

const SytledH1 = styled.h1`
  color: ${(props) => props.theme.headerColor};
  font-family: cursive;
`;
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    background-image: none
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
  justify-content: center;
  align-items: center;
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
  height: 100%;
  margin-top : 80px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex
`
const DivContainer = styled.div`
  display: ${(props) => props.oneElement ? 'flex' : 'inline-flex'};
  overflow: ${(props) => props.oneElement ? 'none' : 'hidden'};
  width: 50%;
  margin-bottom: 40px;
  justify-content: ${(props) => props.oneElement ? 'center' : 'space-between'};
  align-items: center;
`

const H3Text = styled.span`
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  font-size: 20px;
  font-family: cursive;
`
const TextFormContainer = styled.div`
  width: 55%;
  justify-content: ${(props) => props.alignRight ? 'flex-start' : 'center'};
  align-items: center;
`
const StyledButton = styled.button`
  color: ${(props) => props.theme.secondaryTextColor};
  background-color: ${(props) => props.theme.primary};
  box-shadow: none;
  border: 0px;
  border-radius: 4px;
  font-size: 1.2em;
  min-width: 120px;
  padding: 12px;
  margin: 20px 0px 0px 0px;
`;


function Input() {
  const theme = useSelector((state) => state.themeReducer.theme);
  const themeName = theme.themeName

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {themeName !== 'pinky' && <GlobalStyle />}
        <Nav>
          <LogoImage src={ICECREAM_LogoPink} alt="logo" />
          <NavbarContainer>
            <SytledH1>Welcome to CHAEBAN ICE CREAM Challenge</SytledH1>
          </NavbarContainer>
        </Nav>

        <Div>
          <DivContainer>
            <H3Text>Choose The date </H3Text>
            <TextFormContainer alignRight>
              <DatePickerDialog />
            </TextFormContainer>
          </DivContainer>
          <DivContainer>
            <H3Text>Enter your message </H3Text>
            <TextFormContainer>
              <MultilineTextField />
            </TextFormContainer>
          </DivContainer>
          <DivContainer >
            <H3Text>Choose Theme to preview </H3Text>
            <ThemeSelector />
          </DivContainer>
          <DivContainer oneElement>
            <StyledButton >Save</StyledButton>
          </DivContainer >
        </Div>

      </div>
    </ThemeProvider>
  );
}
export default Input;