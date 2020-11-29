import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { applyTheme } from '../app_state/reducers/theme/themeActions';
import { darkTheme, lightTheme, pinkyTheme } from '../assets/themes';

const StyledButton = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.tempPrimary};
  border-radius: 4px;
  font-size: 1.2em;
  min-width: 120px;
  padding: 12px;
  border: ${(props) => props.outline ? '2px solid #4c8d93' : 0};
  background: url(img/tiger.png) no-repeat;

  &:focus {
    outline: none !important;
    box-shadow: none;
  }

  @media (max-width: 767.98px) {
    min-width: 100px;
    padding: 10px; 
  }
  
`;

const ThemeContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767.98px) {
    width: 100%;
    margin-top: 10px;
    justify-content: flex-end;
  }
  @media (max-width: 575.98px) {
    width: 100%;
    justify-content: flex-start;
  }
`

const ThemeSelector = () => {

  const initialTheme = useSelector((state) => state.themeReducer.theme);

  const dispatch = useDispatch();
  const [selectedTheme, setSelectedTheme] = useState(initialTheme);
  const changeTheme = (theme) => {
    setSelectedTheme(theme)
    dispatch(applyTheme(theme));
  }

  const themeName = selectedTheme.themeName

  return (
    <ThemeContainer>
      <StyledButton
        outline={themeName == 'light'}
        onClick={() => changeTheme(lightTheme)}>Light</StyledButton>
      <StyledButton
        outline={themeName == 'dark'}
        onClick={() => changeTheme(darkTheme)}>Dark</StyledButton>
      <StyledButton
        outline={themeName == 'pinky'}
        onClick={() => changeTheme(pinkyTheme)}>Pinky</StyledButton>
    </ThemeContainer>
  );
}
export default ThemeSelector;