import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import logo from '../../logo.svg';
import '../../App.css';
import ThemeSelector from '../../components/ThemeSelector';

const SytledH1 = styled.h1`
  color: ${(props: any) => props.theme.primary};
`;
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.backgroundColor};
  }
`;

function Home() {
    const theme = useSelector((state: any) => state.themeReducer.theme);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <GlobalStyle />
                <header className="App-header">
                    <SytledH1>React Themes Demo</SytledH1>
                    <ThemeSelector></ThemeSelector>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        </ThemeProvider>
    );
}
export default Home;