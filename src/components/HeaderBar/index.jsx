import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import LOGO from '../../assets/images/CHAEBANLOGO.png';
import {
    LogoImage,
    Nav,
    NavbarContainer
} from './Styles';

const SytledH1 = styled.h1`
  color: ${(props) => props.theme.headerColor};
  font-family: cursive;
`;


const HeaderBar = () => {
    const theme = useSelector((state) => state.themeReducer.theme);
    const themeName = theme.themeName
    
    return (
        <Nav>
            <LogoImage src={LOGO} alt="logo" />
            <NavbarContainer >
                <SytledH1>Welcome to CHAEBAN ICE CREAM Challenge</SytledH1>
            </NavbarContainer>
        </Nav>
    );
}
export default HeaderBar;