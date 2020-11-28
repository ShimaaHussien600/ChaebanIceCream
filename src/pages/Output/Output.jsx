import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import logo from '../../logo.svg';
import '../../App.css';
import ThemeSelector from '../../components/ThemeSelector';

const SytledH1 = styled.h1`
  color: ${(props) => props.theme.primary};
`;
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

function Output() {
  const theme = useSelector((state) => state.themeReducer.theme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <SytledH1>Output Page</SytledH1>
        <ThemeSelector></ThemeSelector>
      </div>
    </ThemeProvider>
  );
}
export default Output;