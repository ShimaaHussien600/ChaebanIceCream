import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
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
`;

const ThemeContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ThemeSelector = () => {

  const dispatch = useDispatch();
  const changeTheme = (theme) => {

    dispatch(applyTheme(theme));
  }

  const theme = useSelector((state) => state.themeReducer.theme);
  const themeName = theme.themeName

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