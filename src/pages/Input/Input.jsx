import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import '../../App.css';
import HeaderBar from '../../components/HeaderBar';
import ThemeSelector from '../../components/ThemeSelector';
import DatePickerDialog from '../../components/DatePickerDialog';
import MultilineTextField from '../../components/MultilineTextField';
import NavigateButton from '../../components/NavigateButton';
import {
  Div,
  DivContainer,
  H3Text,
  TextFormContainer
} from './Styles';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    background-image: none
  }
`;


function Input() {
  const theme = useSelector((state) => state.themeReducer.theme);
  const themeName = theme.themeName

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {themeName !== 'pinky' && <GlobalStyle />}

        <HeaderBar />

        {/* The main Body content */}
        <Div>
          {/* The date view */}
          <DivContainer>
            <H3Text>Choose The date </H3Text>
            <TextFormContainer alignRight>
              <DatePickerDialog />
            </TextFormContainer>
          </DivContainer>

          {/* The textarea view */}
          <DivContainer>
            <H3Text>Enter your message </H3Text>
            <TextFormContainer>
              <MultilineTextField />
            </TextFormContainer>
          </DivContainer>

          {/* Theme view */}
          <DivContainer >
            <H3Text>Choose Theme to preview </H3Text>
            <ThemeSelector />
          </DivContainer>

          {/* Save button view */}
          <DivContainer oneElement>
            <NavigateButton />
          </DivContainer >

        </Div>

      </div>
    </ThemeProvider>
  );
}
export default Input;